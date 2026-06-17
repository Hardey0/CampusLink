

export function Gallery () {
  // --- 1. Image Data Initialization (Dynamic) ---
  const mobileBreakpoint = 992;
  const galleryContainer = document.getElementById('productGallery');
  if (!galleryContainer) return;

  const imageListAttr = galleryContainer.getAttribute('data-image-list');
  const allImages = JSON.parse(imageListAttr || '[]');

  let currentImageIndex = 0;
  const totalImages = allImages.length;
  let isMobileView = window.innerWidth <= mobileBreakpoint;

  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const mainImage = document.getElementById('mainImage');
  const mainImagePlaceholder = document.getElementById('mainImagePlaceholder');
  const thumbnailList = document.getElementById('thumbnailList');
  const mobileCarousel = document.getElementById('mobileCarousel');
  const carouselTrack = document.getElementById('carouselTrack');
  const mobileCounter = document.getElementById('mobileCounter');

  if (!mainImage || !modal || !carouselTrack) return;

  // --- 3. Dynamic Gallery Builder ---
  function buildGallery() {
    if (totalImages === 0) {
      if (mainImagePlaceholder) mainImagePlaceholder.style.display = 'none';
      return;
    }

    if (thumbnailList) thumbnailList.innerHTML = '';
    if (carouselTrack) carouselTrack.innerHTML = '';

    mainImage.src = allImages[0];
    updateCarouselWidth();

    allImages.forEach((src, index) => {
      // a) Desktop thumbnails
      const thumbItem = document.createElement('div');
      thumbItem.className = `thumbnail-item ${index === 0 ? 'active' : ''}`;
      thumbItem.dataset.imageIndex = index;
      thumbItem.innerHTML = `<img src="${src}" alt="Thumbnail ${index + 1}" class="thumbnail-image">`;
      thumbItem.onclick = () => handleThumbnailClick(index);
      thumbnailList.appendChild(thumbItem);

      // b) Mobile carousel slide
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.innerHTML = `<img src="${src}" />`;
      slide.onclick = () => openModal(index);
      carouselTrack.appendChild(slide);
    });

    updateMobileCounter();
  }

  // --- 4. Thumbnail handling ---
  function updateThumbnails(newIndex) {
    document.querySelectorAll('.thumbnail-item').forEach(item =>
      item.classList.remove('active')
    );

    const activeThumb = document.querySelector(
      `.thumbnail-item[data-image-index="${newIndex}"]`
    );

    if (activeThumb) activeThumb.classList.add('active');
  }

  function handleThumbnailClick(index) {
    currentImageIndex = index;
    mainImage.src = allImages[index];

    updateThumbnails(index);

    if (isMobileView) {
      mobileCarousel.scrollLeft =
        index * mobileCarousel.offsetWidth;
      updateMobileCounter();
    }

    openModal(index);
  }

  // --- 5. Modal Logic ---
  function openModal(index) {
    currentImageIndex = index;
    modal.style.display = 'block';
    updateModalImage();
  }

  function updateModalImage() {
    modalImage.src = allImages[currentImageIndex];
    updateThumbnails(currentImageIndex);
    mainImage.src = allImages[currentImageIndex];

    if (isMobileView) {
      mobileCarousel.scrollLeft =
        currentImageIndex * mobileCarousel.offsetWidth;
      updateMobileCounter();
    }
  }

  function navigateModal(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) currentImageIndex = totalImages - 1;
    if (currentImageIndex >= totalImages) currentImageIndex = 0;

    updateModalImage();
  }

  // --- 6. Mobile scroll tracking ---
  function updateMobileCounter() {
    if (totalImages === 0) return;

    let newIndex = currentImageIndex;

    if (isMobileView && mobileCarousel.offsetWidth > 0) {
      const scrollLeft = mobileCarousel.scrollLeft;
      const slideWidth = mobileCarousel.offsetWidth;
      newIndex = Math.round(scrollLeft / slideWidth);
    }

    mobileCounter.textContent = `${newIndex + 1} / ${totalImages}`;
    currentImageIndex = newIndex;
    mainImage.src = allImages[currentImageIndex];
  }

  function updateCarouselWidth() {
    if (isMobileView) {
      const viewportWidth = window.innerWidth;
      carouselTrack.style.width = `calc(${viewportWidth}px * ${totalImages})`;
    } else {
      carouselTrack.style.width = '100%';
    }
  }

  function handleInitialMobileView(newWidth) {
    const wasMobile = isMobileView;
    isMobileView = newWidth <= mobileBreakpoint;

    if (!wasMobile && isMobileView) {
      updateCarouselWidth();
      mobileCarousel.scrollLeft = currentImageIndex * newWidth;
      updateMobileCounter();
    }
  }

  // --- 7. Event Listeners ---
  const closeModal = () => (modal.style.display = 'none');

  document.getElementById('closeModal').onclick = closeModal;
  document.getElementById('prevBtn').onclick = () => navigateModal(-1);
  document.getElementById('nextBtn').onclick = () => navigateModal(1);
  modal.onclick = e => {
    if (e.target === modal) closeModal();
  };

  if (mainImagePlaceholder)
    mainImagePlaceholder.onclick = () => openModal(currentImageIndex);

  let scrollTimeout;
  if (mobileCarousel) {
    mobileCarousel.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateMobileCounter, 66);
    });
  }

  const resizeHandler = () => {
    const newWidth = window.innerWidth;
    handleInitialMobileView(newWidth);

    if (isMobileView) {
      updateCarouselWidth();
      mobileCarousel.scrollLeft =
        currentImageIndex * newWidth;
    }
  };

  window.addEventListener('resize', resizeHandler);

  // --- 8. Init ---
  buildGallery();

  // --- Cleanup for React ---
  return () => {
    window.removeEventListener('resize', resizeHandler);
    if (mobileCarousel)
      mobileCarousel.removeEventListener('scroll', updateMobileCounter);
  };
}
