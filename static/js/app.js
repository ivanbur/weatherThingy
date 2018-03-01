$.ajax({
	url: "http://api.openweathermap.org/data/2.5/weather?id=5339766&appid=9a9c0c43d75325cf5f25b4cff4bb47cb",
	dataType: "json",
	success: function(data) {
		console.log(data.weather[0].main);
	}
});