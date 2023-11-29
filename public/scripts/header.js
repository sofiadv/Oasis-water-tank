document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenuButton = document.getElementById("close-menu");
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo");
    const menuIcon = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function () {
        showMobileMenu();
    });

    closeMenuButton.addEventListener("click", function () {
        hideMobileMenu();
    });

    function showMobileMenu() {
        mobileMenu.style.display = "block";
        header.classList.add("menu-opened");
        logo.classList.add("hidden");
        menuIcon.classList.add("hidden");
    }

    function hideMobileMenu() {
        mobileMenu.style.display = "none";
        header.classList.remove("menu-opened");
        logo.classList.remove("hidden");
        menuIcon.classList.remove("hidden");
    }
});
