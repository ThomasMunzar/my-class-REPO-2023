// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// this is a controller file connecting the front-end to back-end
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
//This is taking us to the homepage(landing page) of the webstie
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// Renders a view and sends the rendered HTML string to the client **
  res.render('all');
});

module.exports = router;
