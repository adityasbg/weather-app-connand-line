const request = require('request');

var getWeather = (latitude , longitude, callback ) => {
    request({
        url:    `https://api.darksky.net/forecast/api/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {

            callback(undefined,{currenttemp:body.currently.temperature,
                              apperentTemp:body.currently.apparentTemperature,
            }
          );
        } else {
            callback("unable to get weather");
        }

    })

};

module.exports.getWeather=getWeather;
