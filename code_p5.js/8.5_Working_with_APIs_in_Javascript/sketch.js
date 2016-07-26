var weather;
function setup() {
	createCanvas(400, 200);
	//Better if you login to the openweather api site and get a personal ID
	loadJSON("http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=58a4aab73af181682150c580cb420255", gotData)
}

function gotData(data){
	//println(data)
	weather = data;
}


function draw() {
 	background(0);
 	if (weather) {
 		ellipse(100, 100, weather.list[0].main.temp, weather.list[0].main.temp);
 		ellipse(300, 100, weather.list[0].main.humidity, weather.list[0].main.humidity);
 	}

}