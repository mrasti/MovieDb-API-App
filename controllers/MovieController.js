const Crew = require('../db/models/Crew');
const Movie = require('../db/models/Movie');
const Person = require('../db/models/Person');


module.exports = {
    getAll: (req, res) => {
        Movie.find({}).limit(20).then(m => res.json(m));
    }
}