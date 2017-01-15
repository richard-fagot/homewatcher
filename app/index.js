var temp = require('./temperature');

temp.getTemperature()
    .then(res => console.log(res));