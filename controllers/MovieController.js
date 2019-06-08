
const Movie = require('../db/models/Movie');
const Crew = require('../db/models/Crew');
const Person = require('../db/models/Person');

module.exports = {
    getAll: (req, res) => {
        Movie.find({}).limit(5).then(m => res.json(m));
    },
    sayHi: (req, res) => {
        res.send("Hiiiiiii.........");
    },
    getTitle: (req, res) => {
        Movie.find({title: req.params.title}).then(m => res.json(ath));
    }
}