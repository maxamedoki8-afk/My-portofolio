// Soo qaado navbar-ka
const navbar = document.getElementById('navbar');

// Dhageyso dhacdada scroll-ka window-ga
window.addEventListener('scroll', () => {
    // Haddii hoos loo dego in ka badan 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
