const router = require('express').Router();
const {
  newList,
  editList,
  delList,
} = require('../controllers/admin.controller');

module.exports = router
  .post('/lists/:userId', newList)
  .put('/lists/:listId', editList)
  .delete('/lists/:listId', delList);
