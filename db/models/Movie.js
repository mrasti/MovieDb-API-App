
const mongoose = require('../connection')
const Schema = mongoose.Schema

const Movie = new Schema({
    vote_count: Number,
    id: Number,
    video: Boolean,
    vote_average: Number,
    title: String,
    popularity: Number,
    poster_path: String,
    original_language: String,
    original_title: String,
    genre_ids: Array,
    backdrop_path: String,
    adult: Boolean,
    overview: String,
    release_date: Date
    // cast_crew: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Crew'
    //   }
})

module.exports = mongoose.model('Movie', Movie)