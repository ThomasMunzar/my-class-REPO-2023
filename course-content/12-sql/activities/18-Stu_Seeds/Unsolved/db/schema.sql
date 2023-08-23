DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;



CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

CREATE TABLE snacks(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  snack_name VARCHAR(30) NOT NULL,
  snack_flavor VARCHAR(20) NOT NULL
);

-- ALTER TABLE snacks ...