const express = require('express');
const app = require('./app')
//error handling middleware
app.get(/./, (req, res) => {
    res.send(`
        ${req.url} - такого запроса не существует
        GET список бд: /list
        GET конкретный item по id из бд: /list/id
        POST элемент в бд: /list
        PUT имя элемента в бд по id: /list/id 
        DELETE элемент в бд по id: /list/id
    `);
})

let db = require('./db');

db.connect('mongodb://localhost:27017/', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('DB started');
        app.listen(3000, function () {
            console.log('API app started');
        })
})




//Версия английского чувака

// const express = require("express")
// const mongoose = require("mongoose");

// const Book = require('./models/Book');

// mongoose
//     .connect("mongodb://localhost:27017/acmedb", { 
//         useUnifiedTopology: true,
//         useNewUrlParser: true 
//     })
//     .then(() => {
//         const app = express();

//         app.get('/books', async (req, res) => {
//             const books = await Book.find();
//             res.send({data: books});
//         })

//         app.listen(3000, () => {
//             console.log('Server started');
//         })
//     })
//     .catch(() => {
//         console.log('DB not connect')
//     })