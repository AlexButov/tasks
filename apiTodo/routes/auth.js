const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()
const path = require('path')

// localhost:3000/auth/login
router.get('/auth/login', (req, res) => {
    res.sendFile('login.html', {root: path.join(__dirname, '../views')}) 
})
router.post('/auth/login', controller.login)

// localhost:3000/auth/register
router.get('/auth/register', (req, res) => {
    res.sendFile('register.html', {root: path.join(__dirname, '../views')}) 
})
router.post('/auth/register', controller.register)

// localhost:3000/auth/getUsers
router.get('/auth/users', controller.getAllUsers)

// localhost:3000/auth/clearUsers
router.delete('/auth/users', controller.clearAllUser)

module.exports = router