
const mongoose = require('../connection')
const Schema = mongoose.Schema

const Genre = new Schema({
    id: Number,
    name: String
})

module.exports = mongoose.model('Genre', Genre)