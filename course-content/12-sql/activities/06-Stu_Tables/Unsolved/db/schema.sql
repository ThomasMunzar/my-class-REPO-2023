DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;


-- Add biography table --
CREATE TABLE biography(
    id INT,
    name VARCHAR(64) 
);

SELECT biography;

SHOW DATABASES;