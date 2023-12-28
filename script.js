const navId = document.getElementById("nav_menu");
const ToggleBtnId = document.getElementById("toggle_btn");
const CloseBtnId = document.getElementById("close_btn");

// Show Menu
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// Hide Menu
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// Animate on Scroll Initialize
AOS.init();
