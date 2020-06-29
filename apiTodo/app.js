const express = require('express')
const bodyParser = require('body-parser') // парсит реквест попадающий в боди
const passport = require('passport')

const carRouter = require('./routes/car')
const authRouter = require('./routes/auth')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(passport.initialize())
require('./middleware/passport')(passport)  // Возвращает функцию, которую сразу вызываем, и передаем ей модуль passport

app.use('/auth', authRouter)
app.use('/cars', carRouter)

// app.use('/login', express.static(`${__dirname}/public`))

module.exports = app;