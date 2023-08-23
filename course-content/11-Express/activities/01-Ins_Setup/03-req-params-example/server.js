// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;

// Data -- think of data as a API that contains info that we can create a route to.
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Master',
    age: 55,
    forcePoints: 1350,
  },
];

// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

// What does this route do?- this will display a json list of all the characters in the character variable
app.get('/api/characters/', (req, res) => {
  // /api/characters?t=moana
  console.log(req.query)
  var params = req.params;//{}
  res.json(characters);
});

// What does this route do? -- This route will take us to a SPECIFIC charcter in the array, if the chracter is not in array a "character not found" message will appear
app.get('/api/characters/:character', (req, res) => {
  // What does this code do?
  const chosen = req.params.character;//{ character: 'yoda'}
  console.log(chosen);

  // What does this code do? -- This for loop itterates through the character list, IF character is in array then it will return as JSON, if not, error message.
  for (let i = 0; i < characters.length; i++) {
    const currentChar = characters[i];
    if (chosen === currentChar.routeName) {
      return res.json(currentChar);
    }
  }

  // What does this code do?
  return res.send('No character found');
  // otherwise send back "false"
  // return res.json(false);
});

// Listener
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});



// // Example: 

// // Which One?

app.get("/r/awwww", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "awwww"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/politics", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "politics"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/lastimages", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "lastimages"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});

app.get("/r/kidsfallingover", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "kidsfallingover"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});

app.get("/r/movies", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "movies"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});

app.get("/r/worldnews", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "worldnews"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/ProgrammerHumor", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "ProgrammerHumor"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/SequelMemes", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "SequelMemes"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


app.get("/r/ChildrenFallingOver", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = "ChildrenFallingOver"
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});


// ******************************

// OR

app.get("/r/:subreddit", function(req, res) {
  // What does this code do?
  var SubRedditToQuery = req.params.subreddit;
  

  // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

  // What does this code do?
  return res.json(results);
});
