var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
};

var displayTemp = function(city, temperature) {
  $('.temperature1').text("The temp in " + city + " is " + temperature + "F");
};

var displayK = function(city, temperature) {
  $('.temperatureK').text("The temp in " + city + " is " + temperature + "K");
};

var displayC = function(city, temperature) {
  $('.temperatureC').text("The temp in " + city + " is " + temperature + "C");
};

// var toF = function(temp_max) {
//   output = Math.round(((9/5) * (temp_max - 273)) + 32);
//   return output;
// };

var toF = function(temp_max, convertTo ) {
  if (convertTo === 'F')
  {
    output = Math.round(((9/5) * (temp_max - 273)) + 32);
    return output;
  }
  else if (convertTo === 'C')
  {
    output = Math.round(temp_max - 273);
    return output;
  }
  else
  {
    return temp_max;
  }
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity, displayTemp, toF, displayK, displayC);
  });
});
