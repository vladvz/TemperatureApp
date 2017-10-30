﻿# NodejsConsoleApp
ALTER USER 'root'@'localhost' IDENTIFIED BY '';

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

