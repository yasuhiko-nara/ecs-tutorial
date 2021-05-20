const http = require('http');

var app = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Good Morning!\n');
};

http.createServer(app).listen(3000);
