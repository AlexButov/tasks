const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

let db;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/list', (req, res) => {
    db.collection('list').find().toArray((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.get('/list/:id', function (req, res) {
    db.collection('list').findOne({ _id: ObjectID(req.params.id) }, function (err, doc) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(doc);
    })
})

app.post('/list', function (req, res) {
    let listItem = {
      name: req.body.name
    };
  
    db.collection('list').insert(listItem, function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(listItem);
    })
})

app.put('/list/:id', (req, res) => {
    db.collection('list').updateOne(
      { _id: ObjectID(req.params.id) },
      { $set: {name: req.body.name} },
      (err, result) => {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        res.sendStatus(200);
      }
    )
  })

app.delete('/list/:id', (req, res) => {
    db.collection('list').deleteOne(
        { _id: ObjectID(req.params.id) },
        (err, result) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
})
//error handling middleware
app.get(/./, (req, res) => {
    res.send(`
        ${req.url} - такого запроса не существует
        Получить список бд: /getList
        Получить конкретный item по id из бд: /getItem/id
        Добавить элемент в бд: /postItem
        Изменить имя элемента в бд по id: /putItem/id 
        Удалить элемент в бд по id: /deleteItem/id
    `);
})

MongoClient.connect('mongodb://localhost:27017/',
    {useUnifiedTopology: true //Убрать предупреждение об ошибке
    },
    (err, client) => {
    if (err) {
        return console.log(err);
    }
    db = client.db('myApi');
    app.listen(3000, function () {
        console.log('API app started');
    })
})