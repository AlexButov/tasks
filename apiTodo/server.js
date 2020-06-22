const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

let db;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

let list = [
    {
        id: 1,
        classItem: 'red'
    },
    {
        id: 2,
        classItem: 'pink'
    },
    {
        id: 3,
        classItem: 'violet'
    }
];

app.get('/list', (req, res) => {
    res.send(list);
});

app.get('/list/:id', function (req, res) {
    var listItem = list.find(function (listItem) {
      return listItem.id === Number(req.params.id);
    })
    console.log(listItem);
    res.send(listItem);
});




app.get(/./, (req, res) => {
    if (req.url === '/' || req.url === '') {
        res.send('/');
    } else {
        res.send(req.url.substr(1));
    }
})

MongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
  if (err) {
    return console.log(err);
  }
  db = database;
  app.listen(3000, function () {
    console.log('API app started');
  })
})