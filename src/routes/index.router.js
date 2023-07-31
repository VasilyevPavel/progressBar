const router = require('express').Router();

module.exports = router.get('/logout', (req, res) => {
  res.redirect('/api/auth/logout');
});
