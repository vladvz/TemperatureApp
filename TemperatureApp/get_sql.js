exports.getTemperatureSql = function () {
    this.currentTemperature = "SELECT * FROM Measure WHERE Id IN (SELECT MAX(Id) FROM Measure)";
    this.maxTemperature = "SELECT * FROM Measures.Measure WHERE Temperature IN (SELECT MAX(Temperature) FROM Measures.Measure) ORDER BY Id DESC LIMIT 1";
    this.minTemperature = "SELECT * FROM Measures.Measure WHERE Temperature IN (SELECT MIN(Temperature) FROM Measures.Measure) ORDER BY Id DESC LIMIT 1";
};