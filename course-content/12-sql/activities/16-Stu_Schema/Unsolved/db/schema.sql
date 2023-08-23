-- Write your schema here --
DROP DATABASE IF EXISTS sqlpractice;
CREATE DATABASE sqlpractice;

USE sqlpractice;


CREATE TABLE products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    catergory_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    instock BOOLEAN NOT NULL
);


CREATE TABLE categories(
    id INT AUTO_INCREMENT PRIMARY KEY,
    catergory_name VARCHAR(30) NOT NULL
);
