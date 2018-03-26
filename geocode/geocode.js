const request = require('request');

var geocodeAddress = (address, callback) => {

  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address) + '&key=AIzaSyBzN0qFID0fdLTF861Csj_z30oBIc_Hzlg',
    json: true
  }, (error, response, body) => {

    if (error) {
      callback('Cant connect to Google serves');
    } else if (body.status === 'OK') {
      callback(undefined, {
        Address: body.results[0].formatted_address,
        lng: body.results[0].geometry.location.lng,
        lat: body.results[0].geometry.location.lat
      });
    } else {
      callback('Address not found');
    }

  });

}

module.exports = {
  geocodeAddress
}