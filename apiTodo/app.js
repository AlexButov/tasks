const express = require('express')
const bodyParser = require('body-parser') // парсит реквест попадающий в боди
// const passport = require('passport')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const todoRouter = require('./routes/todo')
const authRouter = require('./routes/auth')
const exampleRouter = require('./routes/example')

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())


//app.use(passport.initialize())
//require('./middleware/passport')(passport)  // Возвращает функцию, которую сразу вызываем, и передаем ей модуль passport

app.use(express.static(__dirname + '/views/todo'))
app.use(express.static(__dirname + '/views/example'))

app.use('/api', authRouter)
app.use('/api/todos', todoRouter)
app.use('/example', exampleRouter)

module.exports = app;