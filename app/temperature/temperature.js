const req = require('request-promise');

 const getTemperature = function() {

     return new Promise(function(fullfill, reject) {
        const options = {
            method: 'GET',
            uri: 'http://172.20.10.8:3000/temperature'
        }

        req(options)
        .then(function (response) {
            fullfill(response);
        })
        .catch(function (err) {
            reject('oups');
        });
     });

} 

module.exports = {
    getTemperature: getTemperature
}