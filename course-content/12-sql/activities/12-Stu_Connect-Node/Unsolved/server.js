const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection( // this function CONNECTS to mysql
  {
    host: 'localhost',//localhot
    user: 'root',
    password: 'password',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);
// using query method to select * from students table and will console log them for us
//app.get('/students', () =>{
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
  //res.json(results)
});
//}) This is how we could send infro from mysql from a specific page
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
