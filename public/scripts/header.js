document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenuButton = document.getElementById("close-menu");
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo");
    const main = document.querySelector(".main")
        

    menuToggle.addEventListener("click", function () {
        if (mobileMenu.classList.contains('menu-opened')) {
            hideMobileMenu();
        } else {
            showMobileMenu();
        }
    });

    closeMenuButton.addEventListener("click", function () {
        hideMobileMenu();
    });

    function showMobileMenu() {
        mobileMenu.style.zIndex = 1;
        mobileMenu.style.display = "block";
        closeMenuButton.style.display = "block"
        header.classList.add('paddingCero')
        logo.classList.add('hidden'); 
        menuToggle.classList.add('hidden');
        main.style.marginTop = 0
    }

    function hideMobileMenu() {
        mobileMenu.style.zIndex = -10;
        mobileMenu.style.display = "none";
        closeMenuButton.style.display = "none"
        logo.classList.remove('hidden');
        menuToggle.classList.remove('hidden');
        header.classList.remove('paddingCero')
        main.style.marginTop = "20px"
    }
});
