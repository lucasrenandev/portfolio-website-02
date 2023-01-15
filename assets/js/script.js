// Scrolling normal
const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0)
})

const scrollArrow = document.getElementById("scroll-arrow")

scrollArrow.addEventListener("click", function() {
    window.scrollTo(0, 0)
})

function hiddenScrollArrow() {
    if(window.scrollY < 500) {
        scrollArrow.style.display = "none"
    }
    else {
        scrollArrow.style.display = "inline-flex"
    }
}
window.addEventListener("scroll", hiddenScrollArrow)
hiddenScrollArrow()

const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", function() {
    navBar.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})

// Scroll animation
ScrollReveal().reveal(".home-text", {reset: true, distance: "25px", duration: 2500, delay: 190, origin: "bottom"})
ScrollReveal().reveal(".about, .services, .portfolio, .contact", {reset: true, distance: "25px", duration: 2500, delay: 200, origin: "bottom"})