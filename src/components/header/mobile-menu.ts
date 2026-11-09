function setupMobileMenu() {
  const btn = document.querySelector<HTMLButtonElement>("#mobile-menu-btn");
  const menu = document.querySelector<HTMLElement>("#mobile-menu");
  if (!btn || !menu) return;

  if (btn.dataset.menuInitialized === "true") return;
  btn.dataset.menuInitialized = "true";

  const setMenuState = (isOpen: boolean) => {
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    btn.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
    menu.setAttribute("data-open", isOpen ? "true" : "false");
    menu.setAttribute("aria-hidden", isOpen ? "false" : "true");
    if (isOpen) {
      menu.removeAttribute("inert");
    } else {
      menu.setAttribute("inert", "");
    }
  };

  btn.addEventListener("click", () => {
    const isCurrentlyOpen = btn.getAttribute("aria-expanded") === "true";
    setMenuState(!isCurrentlyOpen);
  });
}

setupMobileMenu();
document.addEventListener("astro:after-swap", setupMobileMenu);
