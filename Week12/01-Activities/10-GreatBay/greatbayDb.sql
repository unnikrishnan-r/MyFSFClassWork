-- Database for bid --
DROP DATABASE IF EXISTS bids_db;
CREATE DATABASE bids_db;
USE bids_db;
CREATE TABLE products (
    product_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    current_highest_bid DECIMAL(10,2),
    person_id VARCHAR(50),
    PRIMARY KEY (product_id)
);

INSERT INTO products (product_name)
VALUES ("Cup"), ("Shoes"),("Red Scarf");


