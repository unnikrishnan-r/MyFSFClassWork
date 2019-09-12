DROP DATABASE IF EXISTS bigbangtheory;

CREATE DATABASE bigbangtheory;

USE  bigbangtheory;
CREATE TABLE `bbt_characters` (
  `char_id` int(11) NOT NULL AUTO_INCREMENT,
  `char_name` varchar(45) NOT NULL,
  `coolness_points` int(11) DEFAULT NULL,
  `attitude` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`char_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

