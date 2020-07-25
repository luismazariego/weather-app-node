const weather = require('./weather/weather');

const argv = require('yargs').options({
    city: {
        alias: 'c',
        desc: 'City to look up weather',
        demand: true
    }
}).argv;


weather.getInfo(argv.city)
    .then(result => console.log(`${ result.city } weather is ${ result.temp } ºC`))
    .catch(err => console.log(`${ argv.city } weather could not be obtained`));
