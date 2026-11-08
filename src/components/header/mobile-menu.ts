function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

setupMobileMenu();
document.addEventListener("astro:after-swap", setupMobileMenu);
