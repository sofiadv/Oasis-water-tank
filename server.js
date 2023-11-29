const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar todas las solicitudes y enviar index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,  'public', 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
