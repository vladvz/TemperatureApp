﻿var http = require("http");
var express = require("express");
//var moment = require("moment");
//var dt = require("./get_temperature");
//var sqls = require("./get_sql");
var app = express();
var controllers = require("./controllers");
//var sql = new sqls.getTemperatureSql();
//var format = "DD/MM/YYYY HH:mm:ss";

// Map to routes
controllers.init(app);

// View engine
//app.set("view engine", "vash");
//app.use(express.static(__dirname + "/public"));

//app.get("/", function (req, res) {
//    res.render("index", {title: "Vash"})
//});

var server = http.createServer(app);

server.listen(8080);

//app.get("/", function (req, res) {
//    var currentTemperature = dt.getTemperature(sql.currentTemperature);
//    var maxTemperature = dt.getTemperature(sql.maxTemperature);
//    var minTemperature = dt.getTemperature(sql.minTemperature);

//    Promise.all([currentTemperature, maxTemperature, minTemperature]).then(values => {
//        res.writeHead(200, { "Content-Type": "text/html", "Cache-Control": "no-cache" });
//        res.write("<style>body { font-family: verdana; font-size: 10px; }</style>");
//        res.write("<table cellpadding='5' border='1'>");
//        res.write("<tr><td><b>Temperature</b></td><td><b>C&deg;</b></td><td><b>Date/time</b></td></tr>");
//        res.write(formatRow("Current", values[0].Temperature, values[0].Time));
//        res.write(formatRow("Max", values[1].Temperature, values[1].Time));
//        res.write(formatRow("Min", values[2].Temperature, values[2].Time));
//        res.write("</table>");
//        res.write("</br>");
//        res.write("Last updated on " + moment(Date.now()).format(format));
//        res.end();
//    }, reason => {
//        res.writeHead(500, { "Content-Type": "text/html" });
//        res.write("Connection error");
//        res.end();
//    });
//});

//app.get("/api/getCurrentTemperature", function (req, res) {
//    var currentTemperature = dt.getTemperature(sql.currentTemperature);

//    currentTemperature.then(value => {
//        res.set("Content-Type", "application/json");
//        res.send({ Time: value.Time, Temperature: value.Temperature });
//    });
//});