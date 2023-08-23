const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // line 19 is declaring us making a cookie and then we will give it attributes
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // Cookie will last 3600 miliseconds (36 seconds)
    maxAge: 3600,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    // Only client will have access to the cookies, this prevents any malicious data breaching
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    // This is a second security messure to prevent malicious data breaching
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    // This attribute if set to strict The cookies created on that site CANNOT be used anywhere else. This is a third layer of protections.
    // In web terms, sameSite=Strict helps cookies stay "strictly" within the website that made them, making it 
    // harder for attackers to trick your browser into doing things on different websites without your permission.
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
