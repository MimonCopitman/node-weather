const request = require('request');

var apiKey = "c59320fd3d5e303e6ae6903877fddf13";

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (error) {
      callback('error:', error);
    } else if (response.statusCode === 200 ) {
      callback(undefined, {
        currentTemp: body.currently.temperature,
        apparentTemp : body.currently.apparentTemperature
      });
    }else {
      callback('Cant find weather.');
    }
  });
}

module.exports.getWeather = getWeather;


