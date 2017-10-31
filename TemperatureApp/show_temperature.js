var dt = require('./get_temperature');
var sqls = require('./get_sql');

var sql = new sqls.getTemperatureSql();
var currentTemperature = dt.getTemperature(sql.currentTemperature);
var maxTemperature = dt.getTemperature(sql.maxTemperature);
var minTemperature = dt.getTemperature(sql.minTemperature);

Promise.all([currentTemperature, maxTemperature, minTemperature]).then(values => {
    console.log("Current temperature: ", values[0].Temperature);
    console.log("Max temperature: ", values[1].Temperature);
    console.log("Min temperature: ", values[2].Temperature);
}, reason => { console.log("Connection error") });
