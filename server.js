const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const ejs = require('ejs');
require('dotenv').config();

const config = require('./config/config');
const routes = require('./routes/routes');

const app = express();
const PORT = config.PORT;

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para permitir CORS
app.use(cors());

// Middleware para agregar encabezados de seguridad
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://kit.fontawesome.com', 'https://code.jquery.com', 'https://gc.kis.v2.scr.kaspersky-labs.com'],
        styleSrc: ["'self'", 'https://kit.fontawesome.com', 'https://ka-f.fontawesome.com', 'https://fonts.googleapis.com', "'unsafe-inline'", 'https://gc.kis.v2.scr.kaspersky-labs.com'],
        fontSrc: ["'self'", 'https://ka-f.fontawesome.com', 'https://fonts.gstatic.com', 'https://gc.kis.v2.scr.kaspersky-labs.com'], // Añade 'https://fonts.gstatic.com' para permitir fuentes de Google Fonts
        connectSrc: ["'self'", 'https://ka-f.fontawesome.com', 'https://gc.kis.v2.scr.kaspersky-labs.com'], // Agrega 'https://ka-f.fontawesome.com' y 'https://gc.kis.v2.scr.kaspersky-labs.com' a connect-src
        // ... otras directivas ...
      },
    },
  })
);

// Middleware para logging de solicitudes
app.use(morgan('dev'));

// Rutas manejadas por el enrutador
app.use('/', routes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
