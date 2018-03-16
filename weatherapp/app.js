const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const argv = yargs.option({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;



geocode.geocode_address(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log('printing', results.address);

    weather.getWeather(results.latitude, results.longitude, (errormessage, weatherResult) => {
      if (errormessage) {
        console.log(errormessage);
      }
      else {
        console.log(`The temperature is ${weatherResult.currenttemp}.. and its feel like ${weatherResult.apperentTemp}`);
      }


    });
  }
});
