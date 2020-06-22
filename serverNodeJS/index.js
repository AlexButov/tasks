"use strict";

// const http = require('http');
// const port = 3000;

// const requestHandler = (request, response, a) => {
//     console.log(request.url);

//     let requestNotSlash = request.url.substr(1);
//     response.end(requestNotSlash);
    
// }

// const server = http.createServer(requestHandler);

// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad', err);
//     }

//     console.log(`server is listening on ${port}`);
// })

const express = require('express');
const app = express();
const port = 3000;

app.get(/./, (request, response) => {
    if (request.url === '/' || request.url === '') {
        response.send('/');
    } else {
        response.send(request.url.substr(1));
    }
})

const todos = [];

app.get('/getTodos', (request, response) => {
    response.send(todos);
})


app.listen(port, (err) => {
    if (err) {
        return console.log('bad', err);
    }

console.log(`server is listening on ${port}`);
})