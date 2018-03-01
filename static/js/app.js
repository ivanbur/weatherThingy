function callData() {
	$.ajax({
		//url: "http://api.openweathermap.org/data/2.5/weather?id=6359304&appid=9a9c0c43d75325cf5f25b4cff4bb47cb",
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + $("#user-input").val() +"&appid=9a9c0c43d75325cf5f25b4cff4bb47cb",
		dataType: "json",
		success: function(data) {
			$("#countryWeather").html(data.weather[0].main + "<br> and the temperature in Celsius is: " + (data.main.temp - 273).toFixed(2));
			//$("#countryWeather").append(data.main);
			$("#name").html(data.name);
			console.log(data);
		}
	});
}

