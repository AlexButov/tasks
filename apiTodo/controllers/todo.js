const Todo = require('../models/Todo')

module.exports.getAll = ((req, res) => {
    Todo.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log('DB uploaded')
        res.json({
            todos: docs
        });
    })
})

module.exports.create = (req, res) => {
    Todo.create(
        {name: req.body.name, description: req.body.description},
        (err, doc) => {
        if(err) {
             console.log(err)
             return res.sendStatus(500);
        }
        res.status(201).json({
            name: req.body.name,
            description: req.body.description
        })
    })
}

module.exports.getById = ((req, res) => {
    Todo.findById({_id: req.params.id}, (err, doc) =>{
        if(err) {
            console.log(err)
            return res.sendStatus(500);
        }
        console.log('Item from DB loaded')
        res.json({
            todo: doc
        });
    })
})

module.exports.update = ((req, res) => {
    Todo.updateOne({_id: req.params.id},
        {name: req.body.name, description: req.body.description},
        (err, doc) => {
            if(err) {
                console.log(err)
                return res.sendStatus(500);
            }
            res.status(200).json({
                message: 'Changed'
            });
    })
})

module.exports.remove = ((req, res) => {
    Todo.deleteOne({_id: req.params.id}, (err, doc) => {
            if(err) {
                console.log(err)
                return res.sendStatus(500);
            }
            res.status(204).json({
                message: 'Deleted'
            });
    })
})

module.exports.clearDb = ((req, res) => {
    Todo.remove({}, (err) => {
            if(err) {
                console.log(err)
                return res.sendStatus(500);
            }
            res.status(204).json({
                message: 'DB todos cleared'
            });
    })
})