var apiKey = require('./../.env').apiKey;

function Weather(){

}


Weather.prototype.getWeather = function(city, displayHumidity, displayTemp, toF, displayK, displayC){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
    displayTemp(city, toF(response.main.temp_max, 'F'));
    displayK(city, response.main.temp_max);
    displayC(city, toF(response.main.temp_max, 'C'));
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};




exports.weatherModule = Weather;
