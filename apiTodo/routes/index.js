const express = require('express');
const router = express.Router();
const controller = require('../controllers/Item')



router.get('/', controller.getAll)
router.post('/', controller.create)
router.get('/:id', controller.getById)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

// router.get(/./, controller.error) // если нет запроса

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