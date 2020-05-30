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

var html = document.querySelector(".html");
var topPopup = document.querySelector(".popup-thanks-top-of-the-page");

html.addEventListener('mouseleave', function () {
    topPopup.classList.add("popup-thanks-top-of-the-page--active");
});


var blockPopup = document.querySelector(".сategory");
var positionBlock = blockPopup.offsetTop;
var positionHeightBlock = blockPopup.offsetHeight;

var centerPopup = document.querySelector(".popup-thanks-center-of-the-page");
var closePopup = document.querySelector(".popup-thanks-center-of-the-page__close-button");
console.log(closePopup);


var iScrolling = 0;

window.addEventListener('scroll', function() {
    if (iScrolling === 0 && window.scrollY >= positionBlock && window.scrollY <= positionBlock + positionHeightBlock) {
      iScrolling += 1;
      centerPopup.classList.add("popup-thanks-center-of-the-page--active");
    }
});
closePopup.addEventListener("click", function() {
    centerPopup.classList.remove("popup-thanks-center-of-the-page--active");
})
