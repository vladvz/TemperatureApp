﻿# NodejsConsoleApp
​
Nullify root password
-----------------------
sudo mysql -u root -p
use mysql;
update user set authentication_string=password(''), plugin='mysql_native_password' where user='root';
quit;
sudo service mysql restart

CREATE SCHEMA `Measures`;

CREATE TABLE `Measure` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Time` datetime NOT NULL,
  `Temperature` double DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5678 DEFAULT CHARSET=utf8mb4;

INSERT INTO `Measures`.`Measure` (`Time`, `Temperature`) VALUES ('2017-10-24 20:41:00', '26.2');
INSERT INTO `Measures`.`Measure` (`Time`, `Temperature`) VALUES ('2017-10-24 20:42:00', '27.2');
INSERT INTO `Measures`.`Measure` (`Time`, `Temperature`) VALUES ('2017-10-24 20:43:00', '29.2');

# Add this string to Windows hosts
192.168.0.50        raspberrypi

SELECT * FROM Measure WHERE Id IN (SELECT MAX(Id) FROM Measure); // Current Temp.
SELECT * FROM Measures.Measure WHERE Temperature IN (SELECT MAX(Temperature) FROM Measures.Measure) ORDER BY Id DESC LIMIT 1;  // MAX Temp.
SELECT * FROM Measures.Measure WHERE Temperature IN (SELECT MIN(Temperature) FROM Measures.Measure) ORDER BY Id DESC LIMIT 1;  // MIN Temp.
