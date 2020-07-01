const path = require('path')

module.exports.getTodos = ((req, res) => {
    res.sendFile('todo.html', {root: path.join(__dirname, '../views/todo')})
})

// module.exports.create = ((req, res) => {
    
// })