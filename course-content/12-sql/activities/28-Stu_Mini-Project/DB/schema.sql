DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    review TEXT,
    FOREIGN KEY(movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
    );

-- SELECT reviews.review AS review, movies.movie_name AS name 
-- FROM movies
-- JOIN reviews ON reviews.movie_id


