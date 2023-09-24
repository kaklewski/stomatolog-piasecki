const hamburgerMenu = document.querySelector(".hamburger-menu");
const navButtons = document.querySelectorAll(".hamburger-nav-toggler");
const navLinks = document.querySelectorAll(".hamburger-menu__link")
const footerYear = document.querySelector(".footer__year");

// Handle mobile navigation
const handleNav = () => {
	hamburgerMenu.classList.toggle("hamburger-menu--active");
};

// Auto update the date in the footer
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear();
	footerYear.innerText = currentYear;
};

// Event listeners
navButtons.forEach(button => {
    button.addEventListener("click", handleNav);
});
navLinks.forEach(link => {
    link.addEventListener("click", handleNav);
});
document.addEventListener("DOMContentLoaded", setCurrentYear);