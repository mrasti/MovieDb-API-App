
const mongoose = require('../connection')
const Schema = mongoose.Schema

const Crew = new Schema({
    id: Number,
    cast: Array,
    crew: Array,
    // cast_crew: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Movie'
    //   }
})

module.exports = mongoose.model('Crew', Crew)