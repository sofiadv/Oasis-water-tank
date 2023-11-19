const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Obtén la ruta del archivo solicitado
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  // Determina el tipo de contenido en función de la extensión del archivo
  let contentType = 'text/html';
  if (filePath.endsWith('.css')) {
    contentType = 'text/css';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Si el archivo no se encuentra, muestra una página de error 404
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        });
      } else {
        // Si hay otro error, muestra un error interno del servidor (500)
        res.writeHead(500);
        res.end(`Error interno del servidor: ${err.code}`);
      }
    } else {
      // Si se encuentra el archivo, muestra el contenido
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
