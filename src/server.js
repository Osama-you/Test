const http = require('http');
const {router} =require("./router")
const env = require('env2')('./.env');


const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 2000;

const server = http.createServer(router);

server.listen(port);

console.log('server running on: http://' + host + ':' + port);

module.exports = {
  server: server
}

