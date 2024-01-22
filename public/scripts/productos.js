document.addEventListener('DOMContentLoaded', function () {
    // Elementos del DOM
    const accesoriosButton = document.querySelector('.accesorios-button');
    const accesoriosPopup = document.getElementById('accesorios-popup');
    const cerrarAccesoriosButton = document.getElementById('cerrar-accesorios');

    // Mostrar el popup al hacer clic en el botón de accesorios
    accesoriosButton.addEventListener('click', function () {
        accesoriosPopup.style.display = 'block';
    });

    // Cerrar el popup al hacer clic en el botón de cerrar
    cerrarAccesoriosButton.addEventListener('click', function () {
        accesoriosPopup.style.display = 'none';
    });
});