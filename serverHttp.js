const http = require('http');

//GET

http.createServer((request, response) => {
  console.log('server works');
  response.end('gooo');
}).listen(3000);