// Change Navbar Style on Scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
