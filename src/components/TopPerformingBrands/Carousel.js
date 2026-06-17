export function Carousel() {
  const carousel = document.getElementById("carouselList");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const cards = carousel
    ? Array.from(carousel.querySelectorAll(".brand-card"))
    : [];

  let currentIndex = 0;
  let autoScrollTimer;
  let pauseTimeout;
  const AUTO_SCROLL_INTERVAL = 4000;
  const USER_PAUSE_TIME = 6000;

  if (!carousel || cards.length === 0) return;

  const getScrollPosition = (index) => {
    const card = cards[index];
    return card.offsetLeft - (carousel.clientWidth - card.offsetWidth) / 2;
  };

  const updateButtons = () => {
    if (!prevBtn || !nextBtn) return;

    if (carousel.scrollWidth <= carousel.clientWidth + 2) {
      prevBtn.classList.add("hidden");
      nextBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === cards.length - 1;
    }
  };

  const centerCards = () => {
    const totalWidth = cards.reduce(
      (sum, card) => sum + card.offsetWidth + 24,
      -24,
    );
    const containerWidth = carousel.clientWidth;
    const extraSpace = containerWidth - totalWidth;
    carousel.style.justifyContent = extraSpace > 0 ? "center" : "flex-start";
  };

  const scrollToIndex = (index) => {
    index = Math.max(0, Math.min(cards.length - 1, index));
    currentIndex = index;
    const target = getScrollPosition(index);
    carousel.scrollTo({ left: target, behavior: "smooth" });
    updateButtons();
  };

  const startAutoScroll = () => {
    clearInterval(autoScrollTimer);
    if (cards.length > 1 && carousel.scrollWidth > carousel.clientWidth) {
      autoScrollTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        scrollToIndex(currentIndex);
      }, AUTO_SCROLL_INTERVAL);
    }
  };

  const pauseAutoScroll = () => {
    clearInterval(autoScrollTimer);
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(startAutoScroll, USER_PAUSE_TIME);
  };

  const handlePrev = () => {
    pauseAutoScroll();
    scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    pauseAutoScroll();
    scrollToIndex(currentIndex + 1);
  };

  prevBtn?.addEventListener("click", handlePrev);
  nextBtn?.addEventListener("click", handleNext);

  let scrollThrottle;
  const handleScroll = () => {
    clearTimeout(scrollThrottle);
    scrollThrottle = setTimeout(() => {
      const center = carousel.scrollLeft + carousel.clientWidth / 2;
      let closestIndex = 0;
      let minDiff = Infinity;

      cards.forEach((card, i) => {
        const diff = Math.abs(
          center - (card.offsetLeft + card.offsetWidth / 2),
        );
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      });
      currentIndex = closestIndex;
      updateButtons();
    }, 100);
    pauseAutoScroll();
  };

  carousel.addEventListener("scroll", handleScroll);

  const handleResize = () => {
    centerCards();
    updateButtons();
    scrollToIndex(currentIndex);
  };

  window.addEventListener("resize", handleResize);

  centerCards();
  updateButtons();
  scrollToIndex(0);
  startAutoScroll();

  return () => {
    prevBtn?.removeEventListener("click", handlePrev);
    nextBtn?.removeEventListener("click", handleNext);
    carousel.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
    clearInterval(autoScrollTimer);
    clearTimeout(pauseTimeout);
  };
}
