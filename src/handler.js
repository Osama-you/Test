const fs = require('fs');
const path = require('path');

const rootHandler = (req, res) => {
  fs.readFile(path.join(__dirname, "..", "public", 'fac.html'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('server error');

    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
}

const facHandler = (req, res) => {
  fs.readFile(path.join(__dirname, "..", "public", 'fac.html'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('server error');
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
}
const dwylHandler = (req, res) => {
  fs.readFile(path.join(__dirname, "..", "public", 'dwyl.html'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      Head(500, { 'content-type': 'text/plain' });
      res.en
      res.writed('server error');
    } else {
      res.writeHead(200, { 'content-type': "text/html" });
      res.end(file);
    }
  });
}
const publicHandler = (req, res, url, extname) => {

  const ext = {
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".html": "text/html",

  }

  fs.readFile(path.join(__dirname, "..", "public", url), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('server error');
    } else {
      console.log({ extname });
      res.writeHead(200, { 'content-type': ext[extname] });
      res.end(file);
    }
  });
}
const jsonHandler = (req, res, file)=>{
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(file));
}
module.exports = {
  rootHandler,
  facHandler,
  dwylHandler,
  publicHandler,
  jsonHandler,
}