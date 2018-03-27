const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address) + '&key=AIzaSyBzN0qFID0fdLTF861Csj_z30oBIc_Hzlg',
      json: true
    }, (error, response, body) => {

      if (!error && body.status === 'OK') {
        resolve({
          Address: body.results[0].formatted_address,
          lng: body.results[0].geometry.location.lng,
          lat: body.results[0].geometry.location.lat
        });
      } else if (error) {
        reject('Cant connect to Google serves')
      } else {
        reject('Address not found');
      }
    });
  });
};

geocodeAddress('19146').then((res) => {
  console.log(JSON.stringify(res, undefined, 2));
}).catch((errorMessage) => {
  console.log('Error:', errorMessage);
})