// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 5000;
// Listen on all interfaces to avoid IPv6/IPv4 binding issues
const host = "0.0.0.0";

const server = http.createServer((req, res) => {
  // Remove query parameters from URL and strip leading slashes
  const url = req.url.split('?')[0];
  const cleanUrl = url.replace(/^\/+/, ''); // remove leading '/'

  // Determine the file path based on the request URL
  let filePath;
  if (cleanUrl === "" || url === "/") {
    filePath = path.join(__dirname, "index.html");
  } else if (cleanUrl.startsWith("aulas/")) {
    // Serve files from the aulas directory (one level up)
    const relativePath = cleanUrl.slice(6); // Remove "aulas/" prefix
    filePath = path.join(__dirname, "..", relativePath);
  } else {
    filePath = path.join(__dirname, cleanUrl);
  }

  // Get the file extension
  const ext = path.extname(filePath);

  // Set the content type based on the file extension
  let contentType = "text/html";
  switch (ext) {
    case ".html":
      contentType = "text/html";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "application/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".md":
      contentType = "text/markdown";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
    case ".jpeg":
      contentType = "image/jpeg";
      break;
    case ".gif":
      contentType = "image/gif";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
    case ".ico":
      contentType = "image/x-icon";
      break;
    default:
      contentType = "text/plain";
  }

  // Log request and resolved path for debugging
  console.log(`${req.method} ${req.url} -> ${filePath}`);

  // Ensure file exists before attempting to read
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      console.warn(`Arquivo não encontrado: ${filePath}`);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
      return;
    }

    // Read and serve the file
    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        console.error(`Erro lendo arquivo ${filePath}:`, readErr);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal server error");
        return;
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    });
  });
});

// Try listening on a range of ports to avoid EADDRINUSE issues
const portsToTry = Array.from({ length: 11 }, (_, i) => port + i);

function tryListen(ports) {
  if (!ports.length) {
    console.error('Não foi possível iniciar o servidor em nenhuma porta.');
    process.exit(1);
  }

  const p = ports[0];
  const srv = server.listen(p, host)
    .on('listening', () => {
      console.log(`Server running at http://${host}:${p}/`);
    })
    .on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.warn(`Porta ${p} em uso, tentando próxima porta...`);
        tryListen(ports.slice(1));
      } else {
        console.error('Erro ao iniciar o servidor:', err);
        process.exit(1);
      }
    });
}

tryListen(portsToTry);
