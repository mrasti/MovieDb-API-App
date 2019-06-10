
require('../db/connection');
const Crew = require('../db/models/Crew');
const Movie = require('../db/models/Movie');
const Person = require('../db/models/Person');

const fetch = require("node-fetch");
let baseURL1 = 'https://api.themoviedb.org/3/movie/'
let baseURL2 = '/credits?api_key=c65da7dbfcff975db5e41f2ecd673d98&'


function readSeedCrew(movie, index){
	fetch(baseURL1 + movie.id + baseURL2)
	.then(response => {
		return response.json()
	})
	.then(data => {
		insertThemAll(data, 0, movie, true)
	})
	.then(() => {
		console.log(index + " Data from movie '" + movie.title + "' was added to collection Crew.")
	});
}

function insertThemAll(data, index, movie, isCast){
	var arr = isCast ? data.cast : data.crew
	if(!arr || !arr[index]) return
	Person.findOneAndUpdate({id: arr[index].id}, { $set: {id: arr[index].id, name: arr[index].name}}, {upsert: true})
	.then(pers => {
		Crew.create({
			crew_id: arr[index].cast_id,
			role: arr[index].job ? arr[index].job : 'Actor',
			profile_path: arr[index].profile_path,
			movie: movie,
			person: pers 
		}).then(crew => {
			movie.cast_crew.push(crew)
			movie.save().then(() => {
				if(index === arr.length-1){
					if(isCast){
						insertThemAll(data, 0, movie, false)
					}
				}else{
					insertThemAll(data, index+1, movie, isCast)
				}
			})
		})
	})
}

module.exports = {
    seedCrew: readSeedCrew
}
