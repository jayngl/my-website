const sideMenu = document.querySelector(".side-menu");

function openMenu() {
  sideMenu.style.display = "flex";
}

function closeMenu() {
  sideMenu.style.display = "none";
}

// Hide sidebar automatically when resizing to desktop view
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sideMenu.style.display = "none";
  }
});
