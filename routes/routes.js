// routes.js
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');  // Renderiza la vista EJS 'index.ejs'
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

