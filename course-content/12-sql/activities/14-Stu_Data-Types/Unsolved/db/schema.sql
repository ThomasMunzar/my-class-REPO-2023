DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;
-- // column level constraints
CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  value_card_member BOOLEAN NOT NULL
);
