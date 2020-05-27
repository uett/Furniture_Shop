var hamburger = document.querySelector(".header__button");
var headerMenu = document.querySelector(".header__list");
var bodyDocument = document.querySelector(".body")
var buttonCloce = document.querySelector(".header__button--close");

hamburger.addEventListener("click", function(){
    headerMenu.classList.add("header__list--the-drop-down-menu");
    bodyDocument.classList.add("body-active-menu");
    buttonCloce.classList.add("header__button--close-active")
})
buttonCloce.addEventListener("click", function(){
    buttonCloce.classList.remove("header__button--close-active")
    headerMenu.classList.remove("header__list--the-drop-down-menu");
})