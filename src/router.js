const path = require('path');
const repos = require('./repos.json');
const { rootHandler, facHandler, dwylHandler,publicHandler,jsonHandler } = require('./handler');

const router = (req, res) => {
  const url = req.url;
  console.log('URL: ', url);
  const extname = path.extname(url)
  if (url === '/') {
    rootHandler(req, res)
  } else if (url === '/fac') {
    facHandler(req, res)
  } else if (url === '/dwyl') {
    dwylHandler(req, res)
  } else if (extname) {
    publicHandler(req, res,url,extname)
  } else if (url === '/api/repos/fac') {
    jsonHandler(req, res, repos.fac)
  } else if (url === '/api/repos/dwyl') {
    jsonHandler(req, res,repos.dwyl)
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('404 server error');
  }
}

module.exports = {
  router,
}
