const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

// localhost:3000/auth/login
router.post('/login', controller.login)

// localhost:3000/auth/register
router.post('/register', controller.register)

// localhost:3000/auth/getUsers
router.get('/users', controller.getAllUsers)

// localhost:3000/auth/clearUsers
router.delete('/users/clear', controller.clearAllUser)

module.exports = router