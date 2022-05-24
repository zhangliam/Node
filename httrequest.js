var http = require('http')
var querystring = require('querystring')

var contents = querystring.stringify({
  name: 'galengzhang',
  email: 'galens.zhang.com',
  address: 'tongshan',
})

var options = {
  host: 'http//www.galens.com',
  path: 'application/user/add',
  method: 'POST', 
  headers: {
    'Content-Type':  'application/x-www-form-urlencoded',
    'Content-Length': contents.length,
  }
}

var req = http.request(options, res => {
  res.setEncoding('utf8')
  res.on('data', data => {
    console.log(data)
  })
})

req.write(contents)
req.end()