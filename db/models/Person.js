
const mongoose = require('../connection')
const Schema = mongoose.Schema

const Person = new Schema({
    id: Number,
    // name: String
    name: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('Person', Person)