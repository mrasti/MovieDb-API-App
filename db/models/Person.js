
const mongoose = require('../connection')
const Schema = mongoose.Schema

const Person = new Schema({
    id: Number,
    name: String
})

module.exports = mongoose.model('Person', Person)