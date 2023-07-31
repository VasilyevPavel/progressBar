const router = require('express').Router();
const { edit, del } = require('../controllers/users.controller');

module.exports = router.put('/:userId', edit).delete('/:userId', del);
