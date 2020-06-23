'use strict';

const express = require('express');
const db = require('../db');
let router = express.Router();
const ObjectID = require('mongodb').ObjectID;

router
    .route('')
    .get((req, res) => {
        db.get().collection('list').find().toArray((err, docs) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(docs);
        })
    })
    .post((req, res) => {
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

router
    .route('/:id')
    .get((req, res) => {
        db.get().collection('list').findOne({ _id: ObjectID(req.params.id) }, function (err, doc) {
          if (err) {
            console.log(err);
            return res.sendStatus(500);
          }
          res.send(doc);
        })
    })
    .put((req, res) => {
        db.get().collection('list').updateOne(
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
    .delete((req, res) => {
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

module.exports = router;