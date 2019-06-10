
require('./connection');
const Movie = require('./models/Movie');

const fetch = require("node-fetch");
let baseURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c65da7dbfcff975db5e41f2ecd673d98&page=`
let maxCalls = 100

Movie.deleteMany({}).then(() => {
    console.log("All movies deleted!")
}).then(async () => {
	for(var p=1; p<=maxCalls; p++){
		var waitTime = 0;
		if(p % 40=== 0) {
			waitTime = 10000;
		}
		
		await new Promise(resolve => setTimeout(resolve, waitTime));
		readSeedMovies(p)
	}
})

function readSeedMovies(p){
	fetch(baseURL+p)
	.then(response => {
		return response.json()
	})
	.then(data => {
		var resultsLen = data.results.length;
		for(i=0; i<resultsLen; i++){
			let result = data.results[i];
			let movieInfo = {
				vote_count: result.vote_count,
				id: result.id,
				video: result.video,
				vote_average: result.vote_average,
				title: result.title,
				popularity: result.popularity,
				poster_path: result.poster_path,
				original_language: result.original_language,
				original_title: result.original_title,
				genre_ids: result.genre_ids,
				backdrop_path: result.backdrop_path,
				adult: result.adult,
				overview: result.overview,
				release_date: result.release_date 
			};
			Movie.create(movieInfo)
		}
	}).catch(err => {
		console.log(err);
	})
	.then(() => {
		console.log("Data from page " + p + " was added to collection movies.")
	});
}
