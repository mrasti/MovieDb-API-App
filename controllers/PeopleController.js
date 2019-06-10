
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
        Person.find({}).limit(5).then(p => res.json(addDetailsToArray(p)));
    },
    getByName: (req, res) => {
        var result = {};
        Person.findOne({name: req.params.name})
        .then(p => {
            result.person = p;
            Crew.find({person: p._id})
            .populate({
                path: 'movie',
                select: 'title release_date poster_path'
            })
            .then(c => {
                result.filmography = c;
                res.json(result)
            })
        })
    }
}