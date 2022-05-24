var http = require('http')
var url = require('url')
var util = require('util')

http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text.html'})
  res.end(util.inspect(url.parse(req.url, true, null, true)))
}).listen(3000)
