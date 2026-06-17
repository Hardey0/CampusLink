
export function FlashCarousel () {
  const carousel = document.getElementById("product-carousel");
  const dotsContainer = document.getElementById("carousel-dots");
  const progressBar = document.getElementById("scroll-progress-bar");

  if (!carousel || !dotsContainer || !progressBar) {
    console.warn("Flash carousel elements not found");
    return () => {};
  }

  const items = Array.from(carousel.querySelectorAll(".flash-product-card"));
  let activeIndex = 0;

  const isMobile = () => window.innerWidth < 768;

  // --- Progress Bar ---
  const updateProgressBar = () => {
    if (isMobile()) return;

    const scrollLeft = carousel.scrollLeft;
    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;

    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      progressBar.style.width = "0%";
      return;
    }

    const percentage = (scrollLeft / maxScroll) * 100;
    progressBar.style.width = `${percentage}%`;
  };

  // --- Mobile Dots ---
  const updateDots = () => {
    if (!isMobile()) return;
    const dots = Array.from(dotsContainer.children);

    dots.forEach((dot, index) => {
      dot.classList.remove("active");
      if (index === activeIndex) {
        dot.classList.add("active");
      }
    });
  };

  const handleMobileScroll = () => {
    if (!isMobile() || items.length === 0) return;

    const itemWidth = items[0].offsetWidth + 16;
    const newIndex = Math.round(
      (carousel.scrollLeft + itemWidth / 4) / itemWidth
    );

    if (newIndex !== activeIndex) {
      activeIndex = newIndex;
      updateDots();
    }
  };

  // Unified scroll handler
  const handleScroll = () => {
    updateProgressBar();
    handleMobileScroll();
  };

  // Create dots for mobile
  const createDots = () => {
    dotsContainer.innerHTML = "";

    if (!isMobile() || items.length <= 1) {
      dotsContainer.style.display = "none";
      return;
    }

    dotsContainer.style.display = "flex";

    items.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.dataset.index = index;

      dot.addEventListener("click", () => {
        const itemWidth = items[0].offsetWidth + 16;
        carousel.scrollTo({
          left: index * itemWidth,
          behavior: "smooth",
        });
      });

      dotsContainer.appendChild(dot);
    });

    updateDots();
  };

  const init = () => {
    createDots();
    handleScroll();
  };

  // Event listeners
  carousel.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", init);

  // Initial run
  init();

  // Cleanup on unmount
  return () => {
    carousel.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", init);
  };
}
