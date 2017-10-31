var http = require('http');
var moment = require('moment');
var dt = require('./get_temperature');
var sqls = require('./get_sql');

var currentTemperature = dt.getTemperature(sqls.getCurrentTemperatureSql());
var maxTemperature = dt.getTemperature(sqls.getMaxTemperatureSql());
var minTemperature = dt.getTemperature(sqls.getMinTemperatureSql());

var format = 'DD/MM/YYYY HH:mm';

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    Promise.all([currentTemperature, maxTemperature, minTemperature]).then(values => {
        res.write('<table cellpadding="5">');
        res.write(formatRow('Current temperature', values[0].Temperature, values[0].Time));
        res.write(formatRow('Max temperature', values[1].Temperature, values[1].Time));
        res.write(formatRow('Min temperature', values[2].Temperature, values[2].Time));
        res.write('</table>');
        res.end();
    }, reason => {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('Connection error');
        res.end();
    });
    
}).listen(8080);

function formatRow(title, temperature, datetime) {
    return '<tr><td><b>' + title + ': </b></td><td>' + temperature + '</td><td>' + moment(datetime).format(format) + '</td></tr>';
}