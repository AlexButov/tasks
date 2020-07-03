const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo')
// const passport = require('passport')

// session:false - значит, что passport.authenticate необходим для каждого запроса
router.get('/',  controller.getAll)
router.post('/',  controller.create)
router.get('/:id',  controller.getById)
router.put('/:id',  controller.update)
router.delete('/:id',  controller.remove)
router.delete('/todos',  controller.clearDb)

module.exports = router

// passport.authenticate('jwt', {session:false}),