let dropdown = document.querySelector(".dropdown");
let dropdown2 = document.querySelector(".dropdown2");
let fature = document.querySelector(".header__link-item");
let compani = document.querySelector(".compani");
let icon = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
let menu = document.querySelector('.header__menu__icon');
let menu__list = document.querySelector('.header__menu');
fature.addEventListener("click", () => {
    dropdown.classList.toggle("flex");
    icon.classList.toggle("transforme");
})
compani.addEventListener("click", () => {
    dropdown2.classList.toggle("flex");
    icon2.classList.toggle("transforme");
})
menu.addEventListener('click', () => {
    menu__list.classList.toggle('margin');
})