
// Toggle navigation open 

const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function() {
    navbarMenu.classList.toggle("open");
});