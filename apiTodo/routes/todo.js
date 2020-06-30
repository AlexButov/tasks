const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo')
const passport = require('passport')

// session:false - значит, что passport.authenticate необходим для каждого запроса
router.get('/', passport.authenticate('jwt', {session:false}), controller.getTodos)
module.exports = router