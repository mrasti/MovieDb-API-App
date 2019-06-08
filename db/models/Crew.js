
const mongoose = require('../connection')
const Schema = mongoose.Schema

const Crew = new Schema({
    crew_id: String,
    role: String,
    profile_path: String,
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    },
    person: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }
})

module.exports = mongoose.model('Crew', Crew)