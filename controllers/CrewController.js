
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
        Crew.find({}).limit(5).then(c => res.json(addDetailsToArray(c)));
    }
}