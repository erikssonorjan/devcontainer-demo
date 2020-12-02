const http = require('http');

const hostname = '127.0.0.1';
const port = 4321;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('God Jul');
});

server.listen(port, hostname, () => {
  console.log(`Surfa till http://${hostname}:${port} i din webbläsare`);
});