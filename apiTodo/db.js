const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myApi', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Db connected')
  } catch (err) {
    console.log('error: ' + err)
  }
}

const db = connectDb;

module.exports = db;

// Подключение к mongoDB без mongoose
// const MongoClient = require('mongodb').MongoClient;

// let state = {
//     db: null   // Нужно, если подключение происходит в нескольких местах, и бд не дублировалась
// };

// exports.connect = function (url, done) {
//     if (state.db) {
//       return done();
//     }
  
//     MongoClient.connect(url, 
//       {
//         useUnifiedTopology: true
//       },
//       (err, db) => {
//       if (err) {
//         return done(err);
//       }
//       state.db = db.db('myApi');
//       done();
//     })
// }
  
// exports.get = function () {
//     return state.db;
// }