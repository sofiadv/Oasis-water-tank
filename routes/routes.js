// routes.js
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');  // Renderiza la vista EJS 'index.ejs'
});

module.exports = router;
