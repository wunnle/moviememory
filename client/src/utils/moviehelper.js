fetch("https://movie-database-imdb-alternative.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "06e1525424msh84ba94dea49394bp108e99jsn68041784006f"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});