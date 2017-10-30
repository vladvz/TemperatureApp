exports.checkTemperature = function () {
    var mysql = require('mysql');
    var conn = require('./get_connection');

    return new Promise(function (resolve, reject) {
        var connection = conn.getConnection();

        connection.connect();
        console.log("Connected");

        var sql = "SELECT Temperature FROM Measure WHERE Id IN (SELECT MAX(Id) FROM Measure)";

        connection.query(sql, function (err, rows) {
            if (err) {
                console.log("ERROR: ", err);
                reject(err);
            }
            else {
                console.log("Result: ", rows[0].Temperature);
                resolve(rows[0].Temperature);
            }
        });

        connection.end();
        console.log("Disconnected");
    });
};