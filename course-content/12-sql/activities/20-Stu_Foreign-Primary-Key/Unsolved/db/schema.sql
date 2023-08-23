-- Write your Schema Here -- 
DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE customers (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
     PRIMARY KEY (id)
);

CREATE TABLE customer_order (
    id INT NOT NULL,
    customer_id INT,
    order_details TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id)-- this is a reference to another table
    REFERENCES customers(id)--referencing id field from customers table
     ON DELETE SET NULL
);