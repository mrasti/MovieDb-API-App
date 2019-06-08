
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
		// Movie.find({}).then(movies => {
		// 	let movie = movies[0]
			getCrew(movie)
		// })
		Movie.find({}).then(async moviesArray => {
			for(var i=0; i<moviesArray.length; i++){
				var waitTime = 0;
				if((i+1) % 40 === 0) {
					waitTime = 10000;
				}
				await new Promise(resolve => setTimeout(resolve, waitTime));
				// console.log('here1111......');
				createPeople(moviesArray[i])

			}
		});
	});	
})

function createPeople(movie){
	fetch(baseURL1 + movie.id + baseURL2)
	.then(response => {
		return response.json()
	})
	.then(movieData => {
		createPersonForMovie(movieData)	
	})
}

function createPersonForMovie(movieData){
	if(!(movieData.cast) || movieData.cast === []) return
	console.log("**********************" + movieData.cast.length);
	for(i=0; i<movieData.cast.length; i++){
		movieData.cast.forEach(cast => {
			Person.create({
				id: movieData.cast[i].id,
				name: movieData.cast[i].name
			})
			// Crew.create({
			// 	crew_id: movieData.cast[i].cast_id,
			// 	role: "cast",
			// 	profile_path: movieData.cast[i].profile_path,
				// movie: {
				// 	type: Schema.Types.ObjectId,
				// 	ref: 'Movie'
				// },
				// person: {
				// 	type: Schema.Types.ObjectId,
				// 	ref: 'Person'
				// }
			})
		})
	}
}





// function createPersonForMovie(movieData){
// 	if(!(movieData.cast) || movieData.cast === []) return
// 	console.log("**********************" + movieData.cast.length);
// 	for(i=0; i<movieData.cast.length; i++){
// 		movieData.cast.forEach(cast => {
// 			let newPerson = {}
// 			newPerson.id = cast.id
// 			newPerson.name = cast.name
// 			Person.create(newPerson).then(person => console.log(`created a person: ${person.name}`))
// 		})
// 	}
// }




			// for (let i = 0, p = Promise.resolve(); i < 10; i++) {
			//     p = p.then(_ => new Promise(resolve =>
			//         setTimeout(function () {
			//             console.log(i);
			//             resolve();
			//         }, Math.random() * 1000)
			//     ));
			// }

// function createPerson(crewData){
// 	console.log(crewData);
// 	if(!(crewData.cast) || crewData.cast === []) return
// 	console.log("**********************" + crewData.cast.length);
// 	for(i=0; i<crewData.cast.length; i++){
// 		Person.findOneAndUpdate({id: crewData.cast[i].id}, { $set: {id: crewData.cast[i].id, name: crewData.cast[i].name}}, {upsert: true})
// 	}
// }



// crewData.forEach(crew => {
// 	let newPerson = {}
// 	newPerson.id = crew.id
// 	newPerson.name = crew.name
// 	Person.create(newPerson).then(person => console.log(`created a person: ${person.name}`))
// })


// function createPerson(movieData){
// 	if(!(movieData.cast) || movieData.cast === []) return
// 	console.log("**********************" + movieData.cast.length);
// 	for(i=0; i<movieData.cast.length; i++){
// 		Person.create({
// 			id: movieData.cast[i].id,
// 			name: movieData.cast[i].name,
// 		})
// 	}
// }


function createPersonForMovie(movieData){
	if(!(movieData.cast) || movieData.cast === []) return
	console.log("**********************" + movieData.cast.length);
	for(i=0; i<movieData.cast.length; i++){
		movieData.cast.forEach(cast => {
			let newPerson = {}
			newPerson.id = cast.id
			newPerson.name = cast.name
			Person.create(newPerson).then(person => console.log(`created a person: ${person.name}`))
		})
	}
}