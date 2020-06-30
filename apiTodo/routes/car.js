const express = require('express');
const router = express.Router();
const controller = require('../controllers/Car')
const passport = require('passport')

// session:false - значит, что passport.authenticate необходим для каждого запроса
router.get('/', passport.authenticate('jwt', {session:false}), controller.getAll)
router.post('/', passport.authenticate('jwt', {session:false}), controller.create)
router.get('/:id', passport.authenticate('jwt', {session:false}), controller.getById)
router.put('/:id', passport.authenticate('jwt', {session:false}), controller.update)
router.delete('/:id', passport.authenticate('jwt', {session:false}), controller.remove)
router.delete('/cars', passport.authenticate('jwt', {session:false}), controller.clearDb)

module.exports = router