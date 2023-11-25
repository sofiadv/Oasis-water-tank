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

    // Script para cambiar videos
    const videoElement = document.getElementById("video-background");
    const videoSources = [
        "./img/camioneta3.mp4",
        "./img/camioneta2.mp4",
        "./img/camioneta3.mp4"
        // Agrega más rutas de video según sea necesario
    ];

    let currentVideoIndex = 0;

    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        const nextVideoSource = videoSources[currentVideoIndex];
        videoElement.src = nextVideoSource;
        videoElement.load();
        videoElement.play();
    }

    videoElement.addEventListener("ended", playNextVideo);

    // Inicia la reproducción con el primer video
    playNextVideo();
});
