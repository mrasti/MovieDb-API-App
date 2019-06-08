
require('./connection');
const Crew = require('./models/Crew');
const Movie = require('./models/Movie');
const Person = require('./models/Person');

const fetch = require("node-fetch");
let baseURL1 = 'https://api.themoviedb.org/3/movie/'
let baseURL2 = '/credits?api_key=c65da7dbfcff975db5e41f2ecd673d98&'

Crew.deleteMany({}).then(()=>{
	Person.deleteMany({}).then(() => {
		console.log("All cast and crew deleted!");
	}).then(() => {
		Movie.find({}).then(async moviesArray => {
			for(var i=0; i<moviesArray.length; i++){
				var waitTime = 0;
				if((i+1) % 40 === 0) {
					waitTime = 10000;
				}
				
				await new Promise(resolve => setTimeout(resolve, waitTime));
				
				readSeedCrew(moviesArray[i], i)
			}
		});
	});	
})

function readSeedCrew(movie, index){
	fetch(baseURL1 + movie.id + baseURL2)
	.then(response => {
		return response.json()
	})
	.then(data => {
		insertThemAll(data, 0, movie, 'cast')
	})
	.then(() => {
		console.log(index + " Data from movie '" + movie.title + "' was added to collection Crew.")
	});
}

function insertThemAll(data, index, movie, arrToRead){
	var arr = data[arrToRead]
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
					if(arrToRead=='cast'){
						insertThemAll(data, 0, movie, 'crew')
					}
				}else{
					insertThemAll(data, index+1, movie, arrToRead)
				}
			})
		})
	})
}


