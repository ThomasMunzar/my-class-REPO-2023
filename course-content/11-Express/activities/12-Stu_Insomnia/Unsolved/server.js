const express = require('express');
// TODO: Require the json file located in `/db`
const jsonFile = require('./db/repos.json')
// TODO: Create an `app` variable set to the value of `express()`
const app = express();
const PORT = 3001;
const path = require('path');

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// TODO: Create a GET route for `/api` that will return the content of our json file

app.get('/api/db/repos.json') //first attempt

app.get("/api", (req,res) => res.json(jsonFile)); //teacher solution

// TODO: Have the app listen on port 3001
app.listen(PORT, () =>
console.log(`Serving stat asset routes on port http://localhost:${PORT}`)
);