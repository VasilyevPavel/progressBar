const router = require('express').Router();
const { register, logIn, logOut } = require('../controllers/auth.controller');

module.exports = router
  .post('/register', register)
  .post('/login', logIn)
  .get('/logout', logOut);
