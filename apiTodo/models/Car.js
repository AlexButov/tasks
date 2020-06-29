const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {versionKey: false}
)

const car = mongoose.model('car',itemSchema)

module.exports = car