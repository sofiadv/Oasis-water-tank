// routes.js
const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
  res.render('index'); // Asegúrate de que 'index' coincida con el nombre de tu vista EJS
});

// Rutas para otras páginas
router.get('/mision-vision', (req, res) => {
  res.render('mision-vision');
});

router.get('/productos', (req, res) => {
  res.render('productos');
});

router.get('/mayoristas', (req, res) => {
  res.render('mayoristas');
});

module.exports = router;