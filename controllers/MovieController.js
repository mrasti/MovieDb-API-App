
const crewFunctions = require('../functions/CrewFunctions')
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
    getCrew: (req, res) => {
        Movie.find({id: req.params.id})
        .populate({ 
            path: 'cast_crew',
            select: "role profile_path",
            populate: { 
                path: 'person',
                select: "name"  
            }
        }).then(m => {
            res.json(addDetailsToArray(m))
        });
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
        .then(m => {
            crewFunctions.seedCrew(m, null);
            res.json({"_id": m._id, "created": m.id});
        });
    },
    putMovie: (req, res) => {
        Movie.findOne({id: req.params.id})
        .then(m => {
            if(!m) return m;
            m.vote_count = req.body.vote_count;
            m.video = req.body.video;
            m.vote_average = req.body.vote_average;
            m.title = req.body.title;
            m.popularity = req.body.popularity;
            m.poster_path = req.body.poster_path;
            m.original_language = req.body.original_language;
            m.original_title = req.body.original_title;
            m.genre_ids = req.body.genre_ids;
            m.backdrop_path = req.body.backdrop_path;
            m.adult = req.body.adult;
            m.overview = req.body.overview;
            m.release_date = req.body.release_date;
            m.save();
            return m;
        })
        .then(m => {
            if(m) res.json({"updated": m.id})
            else res.json({"error": "not found"})
        });
    },
    patchMovie: (req, res) => {
        Movie.findOne({id: req.params.id})
        .then(m => {
            if(!m) return m;

            if(req.body.vote_count) {
                m.vote_count = req.body.vote_count;
            }
            if(req.body.video) {
                m.video = req.body.video;
            }
            if(req.body.vote_average) {
                m.vote_average = req.body.vote_average;
            }
            if(req.body.title) {
                m.title = req.body.title;
            }
            if(req.body.popularity) {
                m.popularity = req.body.popularity;
            }
            if(req.body.poster_path) {
                m.poster_path = req.body.poster_path;
            }
            if(req.body.original_language) {
                m.original_language = req.body.original_language;
            }
            if(req.body.original_title) {
                m.original_title = req.body.original_title;
            }
            if(req.body.genre_ids) {
                m.genre_ids = req.body.genre_ids;
            }
            if(req.body.backdrop_path) {
                m.backdrop_path = req.body.backdrop_path;
            }
            if(req.body.adult) {
                m.adult = req.body.adult;
            }
            if(req.body.overview) {
                m.overview = req.body.overview;
            }
            if(req.body.release_date) {
                m.release_date = req.body.release_date;
            }
            m.save();
            return m;
        })
        .then(m => {
            if(m) res.json({"updated part of": m.id})
            else res.json({"error": "not found"})
        });
    },
    deleteMovie: (req, res) => {
        Movie.findOneAndDelete({id: req.params.id}).then(m => {
            if(m) res.json({"deleted": m.id})
            else res.json({"error": "not found"})
        });
    }
}

