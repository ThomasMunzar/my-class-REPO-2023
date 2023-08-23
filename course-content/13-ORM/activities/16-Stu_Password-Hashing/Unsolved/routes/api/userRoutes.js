const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  try {
    // looks up a user by email
    const userData = await User.findOne({ where: { email: req.body.email } }); //key= email value = body
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // check password against bcrypt
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    //if NOT valid password then error message
    if (!validPassword) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // if VALID then you will be login in to that specific account
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
