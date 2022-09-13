//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");


function fetchWeather(lat,lon,city){
    var apiURL= `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`

    fetch(apiURL).then(function(response){
        return response.json()
    }).then(function(data){

   

var currentCity = document.createElement("h1")
var currentWeather =document.getElementById("current-weather");
currentCity.textContent= city;
currentWeather.append(currentCity);

var tempF = data.current.temp;
var wind = data.current.wind_speed;
var humidity = data.current.humidity;
var uvi = data.current.uvi;

var currentTemp = createElement("p");
var currentWeather= document.getElementById("current-weather");
currentTemp.textContent = `temp: ${tempF} F`;
currentWeather.append(currentTemp);



 })
}



searchForm.addEventListener('submit',function(event){
    event.preventDefault();    
    
var search = searchInput.value.trim();

var apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${API_KEY}`
fetch(apiURL).then(function(response){
    return response.json();
}).then(function(data){
    if(data.length ==0){
        alert("location not found")
    } else{
        var lat=data[0].lat;
        var lon=data[0].lon;
        var city=data[0].name;
        fetchWeather(lat,lon,city);
    }

 })
searchInput.value="";

});