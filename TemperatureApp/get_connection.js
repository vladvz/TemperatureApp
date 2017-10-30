exports.getConnection = function () {
    var mysql = require('mysql');

    return mysql.createConnection({
        host: "raspberry_pi",
        user: "root",
        password: "",
        database: "Measures"
    });
};