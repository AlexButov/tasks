const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

module.exports.getAll = ((req, res) => {
    db.get().collection('list').find().toArray((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log('DB loaded')
        res.send(docs);
    })
})

module.exports.create = ((req, res) => {
    let listItem = {
      name: req.body.name
    };
  
    db.get().collection('list').insert(listItem, function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.status(201).send(listItem);
    })
})

module.exports.getById = ((req, res) => {
    db.get().collection('list').findOne(
    { _id: ObjectID(req.params.id) },  
    (err, doc) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      console.log('Item from DB loaded')
      res.send(doc);
    })
})

module.exports.update = ((req, res) => {
    db.get().collection('list').updateOne(
    { _id: ObjectID(req.params.id) },
    { $set: {name: req.body.name} },
    (err, result) => {
        if (err) {
        console.log(err);
        return res.sendStatus(500);
        }
        res.status(200).send('Changed');
    }
    )
})

module.exports.remove = ((req, res) => {
    db.get().collection('list').deleteOne(
        { _id: ObjectID(req.params.id) },
        (err, result) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.status(204).send('Deleted');
        }
    )
})

module.exports.error = ((req, res) => {
    res.send(`
        ${req.url} - такого запроса не существует
        GET список бд: /list
        GET конкретный item по id из бд: /list/id
        POST элемент в бд: /list
        PUT имя элемента в бд по id: /list/id 
        DELETE элемент в бд по id: /list/id
    `);
})