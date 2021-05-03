const http = require('http')
const add = require('./lib.js')

http.createServer(function (req, res) {
  res.write(String(add(2, 3)))
  res.end()
}).listen(8000)
