const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()
const path = require('path')


router.get('/login', (req, res) => {
    res.sendFile('login.html', {root: path.join(__dirname, '../views')}) 
})
router.post('/login', controller.login)

router.get('/auth/register', (req, res) => {
    res.sendFile('register.html', {root: path.join(__dirname, '../views')}) 
})
router.post('/register', controller.register)

router.get('/users', controller.getAllUsers)

router.delete('/users', controller.clearAllUser)

module.exports = router