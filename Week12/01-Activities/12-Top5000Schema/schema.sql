CREATE TABLE `songsDb`.`artists` (
  `artist_id` INT NOT NULL AUTO_INCREMENT,
  `artist_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`artist_id`));

CREATE TABLE `songsDb`.`songs` (
  `songid` INT NOT NULL AUTO_INCREMENT,
  `song_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`songid`));


CREATE TABLE `songsDb`.`region` (
  `regionid`  NOT NULL,
  `regionname` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`regionid`));