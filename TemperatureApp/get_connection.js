exports.getConnection = function () {
    var mysql = require('mysql');

    return mysql.createConnection({
        host: "raspberrypi",
        user: "root",
        password: "",
        database: "Measures"
    });
};