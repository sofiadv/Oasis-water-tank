document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenuButton = document.getElementById("close-menu");
    const header = document.querySelector("header");

    menuToggle.addEventListener("click", function () {
        mobileMenu.style.display = "block"; // Mostrar el menú desplegable
        header.style.background = "rgba(0, 0, 0, 0)"; // Cambiar el fondo del header a gris con transparencia
        header.style.transition = "background 0.3s"; // Agregar una transición para suavizar el cambio

        // Ocultar el logo y el icono del menú
        const logo = document.querySelector(".logo");
        const menuIcon = document.querySelector(".menu-toggle");
        logo.style.display = "none";
        menuIcon.style.display = "none";
    });

    closeMenuButton.addEventListener("click", function () {
        mobileMenu.style.display = "none"; // Ocultar el menú desplegable
        header.style.background = "transparent"; // Restaurar el fondo del header a transparente
        
        // Mostrar el logo y el icono del menú nuevamente
        const logo = document.querySelector(".logo");
        const menuIcon = document.querySelector(".menu-toggle");
        logo.style.display = "block";
        menuIcon.style.display = "block";
    });
});
