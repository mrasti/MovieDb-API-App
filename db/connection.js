
const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/project_2', { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
});

module.exports = mongoose