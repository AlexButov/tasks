const express = require('express')
const bodyParser = require('body-parser') // парсит реквест попадающий в боди

const listRouter = require('./routes/index')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/list', listRouter)


module.exports = app;