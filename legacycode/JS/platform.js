// burger menu
let burgerMenu = document.querySelector(".burger-menu");

let imgMenu = document.querySelector(".menu");

let navLinks = document.querySelector("ul.nav");

burgerMenu.addEventListener("click", (e) => {
  e.target === imgMenu && navLinks.classList.toggle("open");
});

window.addEventListener("click", (e) => {
  if (e.target !== imgMenu) {
    navLinks.classList.remove("open");
  }
});