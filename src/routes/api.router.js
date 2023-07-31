const router = require('express').Router();
const adminRouter = require('./admin.router');
const authRouter = require('./auth.router');
const listsRouter = require('./lists.router');
const usersRouter = require('./users.router');

module.exports = router.use('/auth', authRouter);

module.exports = router.use('/users', usersRouter);
module.exports = router.use('/admin', adminRouter);
module.exports = router.use('/lists', listsRouter);
