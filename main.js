document.addEventListener('DOMContentLoaded', () => {


//when click hamburger menu button, takes you to menu page, then click X to exit menu
const menuOverlay = document.querySelector(".menu-overlay")
const hamburgerMenu = document.querySelector("#menu")
hamburgerMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("invisible")
})

const closeButton = document.querySelector("#close")
closeButton.addEventListener("click", () => {
    menuOverlay.classList.add("invisible")
})


//when click submit, takes to thankyou page, then click X to exit thank you page
const thankYouOverlay = document.querySelector(".thankyou")
const sumbitButton = document.querySelector("#submit")
sumbitButton.addEventListener("click", () => {
    thankYouOverlay.classList.remove("invisible")
})

const closeSecButton = document.querySelector("#close-thank")
closeSecButton.addEventListener("click", () => {
    thankYouOverlay.classList.add("invisible")
})

})