let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let cart = document.querySelector("#cart-icon");
let cartItems = document.querySelector(".cart");

menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
  cartItems.classList.remove("active");
  loginForm.classList.remove("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove("move");
  loginForm.classList.remove("active");
};

cart.onclick = () => {
  cartItems.classList.toggle("active");
  navbar.classList.remove("active");
  menu.classList.remove("move");
  loginForm.classList.remove("active");
};

let login = document.querySelector("#user-icon");
let loginForm = document.querySelector(".login-form");

login.onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  menu.classList.remove("move");
  cartItems.classList.remove("active");
};
//header color on scroll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
