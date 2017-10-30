var mysql = require('mysql');
var conn = require('./get_connection');

var connection = conn.getConnection();

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});