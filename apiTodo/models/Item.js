const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        name: String
    }, 
    {versionKey: false}
);

const item = mongoose.model('item',itemSchema)

module.exports = item