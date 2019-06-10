
require('./connection');
const crewFunctions = require('../functions/CrewFunctions');
const Crew = require('./models/Crew');
const Movie = require('./models/Movie');
const Person = require('./models/Person');

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
				
				crewFunctions.seedCrew(moviesArray[i], i)
			}
		});
	});	
})