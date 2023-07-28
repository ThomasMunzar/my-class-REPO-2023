const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('name', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route
//
app.get('/api/terms/', (req, res) => {
  // TODO: Add a comment describing the req.query object
// two objets are put on the request
//req.query --will parse the query section of the URL and its parameters where a rec.parms is the path of the url parsed out.

//This is looking if req.query is above 0 there for it has atleast 1 query parameter.
  const hasQuery = Object.keys(req.query).length > 0;

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
    //sory helper can help sort data in decending order
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
    //sort helper can help sort data in ascending order
  }

  // If there is no query parameter, return terms// will just return all the data in the order we found it.
  return res.json(termData);
});

// TODO: Add a comment describing what this route will return
//:term is like a parameter
app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance
// :term can be any word , the function will iterate through its given array or info
//if array has that term it will show the info, if not it will show "No Term Found"
// req.params{ term: ? }
  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return

app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// TODO: Add a comment describing what this route will return
//
app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
