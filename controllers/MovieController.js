
const Movie = require('../db/models/Movie');
const Crew = require('../db/models/Crew');
const Person = require('../db/models/Person');

function addDetailsToArray(data) {
    var response = {};
    response.count = data.length;
    response.results = data;
    return response;
}

module.exports = {
    getTopFive: (req, res) => {
        Movie.find({}).limit(5).then(m => res.json(addDetailsToArray(m)));
    },
    getById: (req, res) => {
        Movie.find({id: req.params.id}).then(m => res.json(addDetailsToArray(m)));
    },
    getByTitle: (req, res) => {
        Movie.find({title: req.params.title}).then(m => res.json(addDetailsToArray(m)));
    },
    createNew: (req, res) => {
        Movie.create({
            vote_count: req.body.vote_count,
            id: req.body.id,
            video: req.body.video,
            vote_average: req.body.vote_average,
            title: req.body.title,
            popularity: req.body.popularity,
            poster_path: req.body.poster_path,
            original_language: req.body.original_language,
            original_title: req.body.original_title,
            genre_ids: req.body.genre_ids,
            backdrop_path: req.body.backdrop_path,
            adult: req.body.adult,
            overview: req.body.overview,
            release_date: req.body.release_date 
        })
        .then(m => res.json(m));
    }
}

