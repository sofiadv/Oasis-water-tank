function loadHeader() {
    fetch('./partials/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el encabezado');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
}

function loadFooter() {
    fetch('./partials/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el pie de página');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
}

// Llama a estas funciones al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
    loadFooter();
});