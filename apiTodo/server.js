const app = require('./app')
const db = require('./db')

function serverStart(){
    app.listen(3000, () => {
        console.log('API app started');
    })
}
//db - асинхронная функция. 
// Асинхронная функция – это функция, после вызова которой JavaScript приложение продолжает работать, потому что функция сразу выполняет возврат. Результат работы асинхронной функции становится известным позже, и для того, чтобы оповестить наше приложении о полученных значениях, асинхронная функция вызывает другую функцию (callback), которую мы передаем в аргументах при запуске.

db().then(serverStart)


// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('DB started');
//     app.listen(3000, () => {
//         console.log('API app started');
//     })
// });





// const db = require('./db');

// db.connect('mongodb://localhost:27017/', (err) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('DB started');
//         app.listen(3000, function () {
//             console.log('API app started');
//         })
// })