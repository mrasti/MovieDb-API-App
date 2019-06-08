
const Movie = require('../db/models/Movie');
const Crew = require('../db/models/Crew');
const Person = require('../db/models/Person');

module.exports = {
    getAll: (req, res) => {
        Crew.find({}).limit(5).then(c => res.json(m));
    }
}