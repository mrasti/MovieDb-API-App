
const mongoose = require('mongoose');
mongoose.Promise = Promise;

let mongoURI = '';
if (process.env.NODE_ENV === "production") {
	mongoURI = process.env.DB_URL;
} else {
	mongoURI = "mongodb://localhost/project_2";
}

mongoose.connect(mongoURI, { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
});

module.exports = mongoose