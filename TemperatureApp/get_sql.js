exports.getCurrentTemperatureSql = function () {
    return "SELECT * FROM Measure WHERE Id IN (SELECT MAX(Id) FROM Measure)";
};

exports.getMaxTemperatureSql = function () {
    return "SELECT * FROM Measures.Measure WHERE Temperature IN (SELECT MAX(Temperature) FROM Measures.Measure) ORDER BY Id DESC LIMIT 1";
};

exports.getMinTemperatureSql = function () {
    return "SELECT * FROM Measures.Measure WHERE Temperature IN (SELECT MIN(Temperature) FROM Measures.Measure) ORDER BY Id DESC LIMIT 1";
};