const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {versionKey: false}
)

module.exports = mongoose.model('users', UserSchema)