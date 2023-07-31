const router = require('express').Router();
const { isAuth } = require('../middlewares/isAuth');
const { isAdmin } = require('../middlewares/isAdmin');

const {
  renderMain,
  renderCheckList,
} = require('../controllers/view.controller');

const {
  renderAllCheckLists,
  renderMyCheckLists,
} = require('../controllers/listsView.controller');

const {
  renderLogin,
  renderUsersList,
  renderCreateUser,
  renderUpdateUser,
} = require('../controllers/usersView.controller');

module.exports = router
  .get('/', renderMain)
  .get('/login', renderLogin)
  .get('/admin/users', isAdmin, renderUsersList)
  .get('/admin/users/create-form', isAdmin, renderCreateUser)
  .get('/admin/users/update-form/:userid', isAdmin, renderUpdateUser)
  .get('/admin/lists/', isAuth, renderAllCheckLists)
  .get('/admin/lists/:userId', isAuth, renderMyCheckLists)
  .get('/lists/:sid', renderCheckList);
