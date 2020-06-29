const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()
const path = require('path')

// localhost:3000/auth/login
router.get('/login', (req, res) => {
    res.sendFile('login.html', {root: path.join(__dirname, '../public')}) 
})
router.post('/login', controller.login)

// localhost:3000/auth/register
router.get('/register', (req, res) => {
    res.sendFile('register.html', {root: path.join(__dirname, '../public')}) 
})
router.post('/register', controller.register)

// localhost:3000/auth/getUsers
router.get('/users', controller.getAllUsers)

// localhost:3000/auth/clearUsers
router.delete('/users/clear', controller.clearAllUser)

module.exports = router