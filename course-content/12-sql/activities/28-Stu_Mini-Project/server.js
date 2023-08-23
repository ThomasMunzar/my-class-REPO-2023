const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
);
//GET all movies in db
app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movies', function (err, results) {
        console.log(results); res.json(results)
    })
});
// will show all movies and their reviews from db
app.get('/movie-reviews', (req, res) => {
    db.query('SELECT reviews.review AS review, movies.movie_name AS name FROM movies JOIN reviews ON reviews.movie_id = movies.id', function (err, results) {
        console.log(results); res.json(results)
    })
});

// let newMovie = "The Goonies"
// let newReview = "HEY YOU GUYS!"
app.post('/api/add-movie', (req,res) => {

    const {movie}= req.body
    db.query(`INSERT INTO movies(movie_name ) ${newMovie} VALUES`, function(err, results){
        console.log(results); res.json(results)
    });
    // db.query(`INSERT INTO reviews ${newReview}`, function(err, results){
    //     console.log(results); res.json(results)
    // });
});



app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));
//   db.query(`DELETE FROM favorite_books WHERE id = ${deletedRow}`, (err, result) => {})


//   SELECT favorite_books.book_name AS book_name, book_prices.price AS price
// FROM favorite_books
// JOIN book_prices ON favorite_books.book_price = book_prices.id;