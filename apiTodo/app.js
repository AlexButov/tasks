const express = require('express')
const bodyParser = require('body-parser') // парсит реквест попадающий в боди
const passport = require('passport')
const cookieParser = require('cookie-parser')

const carRouter = require('./routes/car')
const authRouter = require('./routes/auth')
const todoRouter = require('./routes/todo')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(passport.initialize())
require('./middleware/passport')(passport)  // Возвращает функцию, которую сразу вызываем, и передаем ей модуль passport

app.use(express.static(__dirname + '/views/todo'))

app.use('/api', authRouter)
app.use('/cars', carRouter)
app.use('/', todoRouter)

module.exports = app;