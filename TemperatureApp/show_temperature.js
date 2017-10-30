var dt = require('./get_temperature');

dt.checkTemperature().then(function (data) {
    console.log("Current temperature: ", data);
}, function (err) { console.log("Connection error") });
