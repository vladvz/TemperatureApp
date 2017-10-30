var http = require('http');
var dt = require('./get_temperature');

http.createServer(function (req, res) {
    dt.checkTemperature().then(function (data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<b>Current temperature: </b>" + data);
        res.end();
    }, function (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write("Connection error");
        res.end();
    })
    
}).listen(8080);