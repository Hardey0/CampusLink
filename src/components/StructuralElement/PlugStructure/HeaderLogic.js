export function HeaderLogic() {
  const toggleButton = document.getElementById("menu-toggle-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const searchBtn = document.getElementById("mobile-search-btn");
  const cancelBtn = document.getElementById("mobile-cancel-btn");
  const searchBox = document.getElementById("mobile-search-box");
  const dropdowns = Array.from(document.querySelectorAll(".mobile-dropdown"));

  if (!toggleButton || !mobileMenu || !searchBtn || !cancelBtn || !searchBox) {
    console.warn("Some header elements are missing");
    return () => {};
  }

  const handleToggleMenu = (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("open");

    toggleButton.classList.toggle(
      "fa-bars",
      !mobileMenu.classList.contains("open"),
    );
    toggleButton.classList.toggle(
      "fa-times",
      mobileMenu.classList.contains("open"),
    );
  };

  const handleOutsideClick = (event) => {
    const insideMenu = mobileMenu.contains(event.target);
    const clickedToggle = toggleButton.contains(event.target);

    if (!insideMenu && !clickedToggle) closeMenu();
  };

  const handleScroll = () => {
    if (mobileMenu.classList.contains("open")) closeMenu();
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("open");
    toggleButton.classList.remove("fa-times");
    toggleButton.classList.add("fa-bars");
  };

  toggleButton.addEventListener("click", handleToggleMenu);
  document.addEventListener("click", handleOutsideClick);
  window.addEventListener("scroll", handleScroll);

  const handleSearchOpen = () => {
    searchBox.style.display = "flex";
    searchBtn.style.display = "none";
    cancelBtn.style.display = "flex";
  };

  const handleSearchClose = () => {
    searchBox.style.display = "none";
    cancelBtn.style.display = "none";
    searchBtn.style.display = "flex";
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      searchBox.style.display = "none";
      cancelBtn.style.display = "none";
      searchBtn.style.display = "none";
    } else {
      searchBtn.style.display = "flex";
    }
  };

  searchBtn.addEventListener("click", handleSearchOpen);
  cancelBtn.addEventListener("click", handleSearchClose);
  window.addEventListener("resize", handleResize);

  const dropdownListeners = [];

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const content = dropdown.querySelector(".dropdown-content");
    if (!toggle || !content) return;

    const handleDropdownToggle = () => {
      const isOpen = dropdown.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      content.setAttribute("aria-hidden", String(!isOpen));
      content.style.maxHeight = isOpen ? content.scrollHeight + "px" : "0";

      dropdowns.forEach((other) => {
        if (other !== dropdown) {
          other.classList.remove("open");
          const oToggle = other.querySelector(".dropdown-toggle");
          const oContent = other.querySelector(".dropdown-content");
          if (oToggle) oToggle.setAttribute("aria-expanded", "false");
          if (oContent) {
            oContent.setAttribute("aria-hidden", "true");
            oContent.style.maxHeight = "0";
          }
        }
      });
    };

    const handleKeyDown = (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        toggle.click();
      }
    };

    toggle.addEventListener("click", handleDropdownToggle);
    toggle.addEventListener("keydown", handleKeyDown);

    dropdownListeners.push({
      toggle,
      handleDropdownToggle,
      handleKeyDown,
    });
  });

  return () => {
    // menu
    toggleButton.removeEventListener("click", handleToggleMenu);
    document.removeEventListener("click", handleOutsideClick);
    window.removeEventListener("scroll", handleScroll);

    // search
    searchBtn.removeEventListener("click", handleSearchOpen);
    cancelBtn.removeEventListener("click", handleSearchClose);
    window.removeEventListener("resize", handleResize);

    // dropdowns
    dropdownListeners.forEach((item) => {
      item.toggle.removeEventListener("click", item.handleDropdownToggle);
      item.toggle.removeEventListener("keydown", item.handleKeyDown);
    });
  };
}
