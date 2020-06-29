const express = require('express');
const router = express.Router();
const controller = require('../controllers/Car')
const passport = require('passport')


// session:false - значит, что passport.authenticate необходим для каждого запроса
router.get('/', passport.authenticate('jwt', {session:false}), controller.getAll)
router.post('/', passport.authenticate('jwt', {session:false}), controller.create)
router.get('/:id', passport.authenticate('jwt', {session:false}), controller.getById)
router.put('/:id', passport.authenticate('jwt', {session:false}), controller.update)
router.delete('/:id', passport.authenticate('jwt', {session:false}), controller.remove)
router.delete('/clear', passport.authenticate('jwt', {session:false}), controller.clearDb)
module.exports = router

// router
//     .route('')
//     .get((req, res) => {
//         db.get().collection('list').find().toArray((err, docs) => {
//             if (err) {
//                 console.log(err);
//                 return res.sendStatus(500);
//             }
//             console.log('DB loaded')
//             res.send(docs);
//         })
//     })
//     .post((req, res) => {
//         let listItem = {
//           name: req.body.name
//         };
      
//         db.get().collection('list').insert(listItem, function (err, result) {
//           if (err) {
//             console.log(err);
//             return res.sendStatus(500);
//           }
//           res.status(201).send(listItem);
//         })
//     })

// router
//     .route('/:id')
//     .get((req, res) => {
//         db.get().collection('list').findOne(
//         { _id: ObjectID(req.params.id) },  
//         (err, doc) => {
//           if (err) {
//             console.log(err);
//             return res.sendStatus(500);
//           }
//           console.log('Item from DB loaded')
//           res.send(doc);
//         })
//     })
//     .put((req, res) => {
//         db.get().collection('list').updateOne(
//         { _id: ObjectID(req.params.id) },
//         { $set: {name: req.body.name} },
//         (err, result) => {
//             if (err) {
//             console.log(err);
//             return res.sendStatus(500);
//             }
//             res.status(200).send('Changed');
//         }
//         )
//     })
//     .delete((req, res) => {
//         db.get().collection('list').deleteOne(
//             { _id: ObjectID(req.params.id) },
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                     return res.sendStatus(500);
//                 }
//                 res.status(204).send('Deleted');
//             }
//         )
//     })