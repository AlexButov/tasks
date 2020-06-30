const CarModel = require('../models/Car')

module.exports.getAll = ((req, res) => {
    CarModel.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log('DB uploaded')
        res.json({
            cars: docs
        });
    })
})

module.exports.create = (req, res) => {
    CarModel.create(
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
    CarModel.findById({_id: req.params.id}, (err, doc) =>{
        if(err) {
            console.log(err)
            return res.sendStatus(500);
        }
        console.log('Item from DB loaded')
        res.json({
            car: doc
        });
    })
})

module.exports.update = ((req, res) => {
    CarModel.updateOne({_id: req.params.id},
        {name: req.body.name},
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
    CarModel.deleteOne({_id: req.params.id}, (err, doc) => {
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
    CarModel.remove({}, (err, doc) => {
            if(err) {
                console.log(err)
                return res.sendStatus(500);
            }
            res.status(204).json({
                message: 'DB cars cleared'
            });
    })
})