var http = require('http');
var moment = require('moment');
var dt = require('./get_temperature');
var sqls = require('./get_sql');

var format = 'DD/MM/YYYY HH:mm:ss';

http.createServer(function (req, res) {
    var sql = new sqls.getTemperatureSql();
    var currentTemperature = dt.getTemperature(sql.currentTemperature);
    var maxTemperature = dt.getTemperature(sql.maxTemperature);
    var minTemperature = dt.getTemperature(sql.minTemperature);

    Promise.all([currentTemperature, maxTemperature, minTemperature]).then(values => {
        res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-Control': 'no-cache' });
        res.write('<style>body { font-family: verdana; font-size: 10px; }</style>');
        res.write('<table cellpadding="5" border="1">');
        res.write('<tr><td><b>Temperature</b></td><td><b>C&deg;</b></td><td><b>Date/time</b></td></tr>');
        res.write(formatRow('Current', values[0].Temperature, values[0].Time));
        res.write(formatRow('Max', values[1].Temperature, values[1].Time));
        res.write(formatRow('Min', values[2].Temperature, values[2].Time));
        res.write('</table>');
        res.write('</br>');
        res.write('Last updated on ' + moment(Date.now()).format(format));
        res.end();
    }, reason => {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('Connection error');
        res.end();
    });
    
}).listen(8080);

function formatRow(title, temperature, datetime) {
    return '<tr><td><b>' + title + '</b></td><td>' + temperature + '</td><td>' + moment(datetime).format(format) + '</td></tr>';
}