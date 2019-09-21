CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirpy`.`chirps` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(45) NOT NULL,
  `chirp` VARCHAR(45) NULL,
  `created_time` DATETIME NULL,
  PRIMARY KEY (`id`));
;