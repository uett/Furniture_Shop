
let hamburger = document.querySelector(".header__button");
let headerMenu = document.querySelector(".header__list");

hamburger.addEventListener("click", function(){
    headerMenu.classList.add("header__list--the-drop-down-menu");
})
