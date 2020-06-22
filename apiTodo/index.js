const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile('/home/user/tasks/apiTodo' + '/index.html');
})

app.post('/addTodo', (req, res) => {
    console.log(req.body);
})

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/apiDB', {
    useUnifiedTopology: true //Убрать предупреждение об ошибке
    }, (err, client) => {
    if (err) {
        console.error(err);
    }
    console.log('Connection on DB');
    const db = client.db('apiDB');
})

app.listen(3000, () => {
    console.log('listening on 3000');
})