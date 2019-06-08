
const Movie = require('../db/models/Movie');
const Crew = require('../db/models/Crew');
const Person = require('../db/models/Person');

module.exports = {
    getAll: (req, res) => {
        Person.find({}).limit(5).then(p => res.json(m));
    }
}