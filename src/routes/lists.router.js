const router = require('express').Router();
const {editCheckList } = require('../controllers/lists.controller');

module.exports = router.put('/:sid',editCheckList);
    
  
