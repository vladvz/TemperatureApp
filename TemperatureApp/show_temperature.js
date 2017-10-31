var dt = require('./get_temperature');
var sqls = require('./get_sql');

var currentTemperature = dt.getTemperature(sqls.getCurrentTemperatureSql());
var maxTemperature = dt.getTemperature(sqls.getMaxTemperatureSql());
var minTemperature = dt.getTemperature(sqls.getMinTemperatureSql());

Promise.all([currentTemperature, maxTemperature, minTemperature]).then(values => {
    console.log("Current temperature: ", values[0].Temperature);
    console.log("Max temperature: ", values[1].Temperature);
    console.log("Min temperature: ", values[2].Temperature);
}, reason => { console.log("Connection error") });
