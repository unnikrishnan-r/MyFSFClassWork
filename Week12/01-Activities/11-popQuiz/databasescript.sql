DROP DATABASE IF EXISTS bootcamp_db;
CREATE DATABASE bootcamp_db;

USE DATABASE bootcamp_db;

CREATE TABLE mylearning (
    tech_id INT NOT NULL AUTO_INCREMENT,
    technology_name VARCHAR (50) NOT NULL ,
    currently_learning BOOLEAN NOT NULL ,
    expertise INT,
    PRIMARY KEY (tech_id)
);

INSERT INTO `bootcamp_db`.`mylearning`
(`technology_name`,
`currently_learning`,
`expertise`)
VALUES("HTML",false,70) , ("CSS" , false, 40), ("JAVASCRIPT", true, 75);

INSERT INTO mylearning (`technology_name`,
`currently_learning`,
`expertise`) VALUES ("node", 1, 70);
