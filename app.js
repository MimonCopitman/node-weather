const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


const argv = yargs
  .options({
    a: {
      alias: 'address',
      demand: true,
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(results.lat, results.lng, (errorMessage, Weatherresults) => {
      if(errorMessage){
        console.log(errorMessage)
      }else {
        console.log(`The temp in ${results.Address} is ${Weatherresults.currentTemp} but it feels like ${Weatherresults.apparentTemp}`);
      }
    });
  }
});


