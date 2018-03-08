var rainAudio = new Audio("/static/audio/rainTeddy.m4a");
var snowAudio = new Audio("/static/audio/snowTeddy.m4a");
var fogAudio = new Audio("/static/audio/fogTeddy.m4a");
var hailAudio = new Audio("/static/audio/hailTeddy.m4a");
var cloudsAudio = new Audio("/static/audio/cloudsTeddy.m4a");
var mistAudio = new Audio("/static/audio/mistTeddy.m4a");
var hazeAudio = new Audio("/static/audio/hazeTeddy.m4a");
var clearAudio = new Audio("/static/audio/clearTeddy.m4a");

function callData() {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + $("#user-input").val() +"&appid=9a9c0c43d75325cf5f25b4cff4bb47cb",
		dataType: "json",
		success: function(data) {
			$("#countryWeather").html(data.weather[0].main + "<br> and the temperature in Celsius is: " + (data.main.temp - 273).toFixed(2));
			$("#name").html(data.name);
			console.log(data);
			if (data.weather[0].main == "Rain") {
				rainAudio.play();
			} else if (data.weather[0].main == "Snow") {
				snowAudio.play();
			} else if (data.weather[0].main == "Fog") {
				fogAudio.play();
			} else if (data.weather[0].main == "Hail") {
				hailAudio.play();
			} else if (data.weather[0].main == "Clouds") {
				cloudsAudio.play();
			} else if (data.weather[0].main == "Haze") {
				hazeAudio.play();
			} else if (data.weather[0].main == "Clear") {
				clearAudio.play();
			} else {
				mistAudio.play();
			}
		}
	});
}