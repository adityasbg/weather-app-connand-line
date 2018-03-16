const request = require('request');

var geocode_address = (address, callback) => {
    var encoded_addr = encodeURIComponent(address);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encoded_addr}`,
        json: true
    }, (error, response, body) => {

        if (error){
            callback('unable to connect google server');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('invalid address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
            }) ;


        }

    });
}
module.exports.geocode_address = geocode_address;
