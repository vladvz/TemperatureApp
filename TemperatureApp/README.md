# NodejsConsoleApp
#ALTER USER 'root'@'localhost' IDENTIFIED BY '';

UPDATE mysql.user
    SET authentication_string = PASSWORD(''), password_expired = 'N'
    WHERE User = 'root' AND Host = 'localhost';
FLUSH PRIVILEGES;

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
192.168.0.50        raspberry_pi
