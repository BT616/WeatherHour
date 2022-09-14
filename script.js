//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?lat=32.7174202&lon=-117.1627728&&units=imperial&appid=3ba1140067fb712eece541195bb90a76

var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");


function fetchWeather(lat,lon,city){
    var apiURL= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&units=imperial&appid=3ba1140067fb712eece541195bb90a76`
 console.log(apiURL)
    fetch(apiURL).then(function(response){
    return response.json()
}).then(function(data){

   

var currentCity = document.createElement("h1")
var currentWeather =document.getElementById("current-weather");
currentCity.textContent= city;
currentWeather.append(currentCity);

var tempF = data.main.temp;


var currentTemp = document.createElement("p");
var currentWeather= document.getElementById("current-weather");
currentTemp.textContent = `TEMP: ${tempF} F`;
currentWeather.appendChild(currentTemp);


var forecast= document.createElement("h1")
var currentForecastContainer=document.getElementById("current-forecast");
forecast.textContent="5 day Forecast";
currentForecastContainer.appendChild(forecast);

var dailyForecast = data.daily;

for(var i= 0; i <dailyForecast.length; i++){
    var currentForestTemp = document.createElement("p");
    currentForestTemp.textContent = `Temp: ${dailyForecast[i].temp.day}`
    currentForecastContainer.appendChild(currentForestTemp);

    var currentForecastWind=document.createElement("p");
    currentForecastContainer.appendChild(currentForecastWind);
}

 })
}



searchForm.addEventListener('submit',function(event){
    event.preventDefault();    
    
var search = searchInput.value.trim();

var apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=3ba1140067fb712eece541195bb90a76`

fetch(apiURL).then(function(response){
    return response.json();
}).then(function(data){
    if(data.length ==0){
        alert("location not found")
    } else{
        var lat = data[0].lat;
        var lon = data[0].lon;
        var city = data[0].name 
        fetchWeather(lat,lon,city);
    }

 })
searchInput.value="";

});