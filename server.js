var http = require('http');
const add =  require('./lib.js');

//create a server object:
http.createServer(function (req, res) {
  res.write(add(2,3)); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
