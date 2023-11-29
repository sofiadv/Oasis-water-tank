document.addEventListener("DOMContentLoaded", function () {
    // Menú Móvil
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenuButton = document.getElementById("close-menu");
    const header = document.querySelector("header");

    menuToggle.addEventListener("click", function () {
        showMobileMenu();
    });

    closeMenuButton.addEventListener("click", function () {
        hideMobileMenu();
    });

    function showMobileMenu() {
        mobileMenu.style.display = "block";
        header.style.background = "rgba(0, 0, 0, 0.8)";
        header.style.transition = "background 0.3s";

        // Ocultar el logo y el icono del menú
        const logo = document.querySelector(".logo");
        const menuIcon = document.querySelector(".menu-toggle");
        logo.style.display = "none";
        menuIcon.style.display = "none";
    }

    function hideMobileMenu() {
        mobileMenu.style.display = "none";
        header.style.background = "transparent";

        // Mostrar el logo y el icono del menú nuevamente
        const logo = document.querySelector(".logo");
        const menuIcon = document.querySelector(".menu-toggle");
        logo.style.display = "block";
        menuIcon.style.display = "block";
    }
    
    // Script para cambiar videos
    const videoElement = document.getElementById("video-background");
    const videoSources = [
        "/img/camioneta1.mp4",
        "/img/camioneta2.mp4",
        "/img/camioneta3.mp4"
        // Agrega más rutas de video según sea necesario
    ];

    let currentVideoIndex = 0;

    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        const nextVideoSource = videoSources[currentVideoIndex];

        // Show loading animation.
        videoElement.src = nextVideoSource;
        videoElement.load();

        videoElement.addEventListener('canplaythrough', function () {
            videoElement.play().catch(error => {
                console.error("Error playing video:", error);
            });
        }, { once: true });
    }

    videoElement.addEventListener("ended", playNextVideo);

    // Inicia la reproducción con el primer video
    playNextVideo();
});
