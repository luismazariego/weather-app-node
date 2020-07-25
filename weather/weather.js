const axios = require('axios');

const getInfo = async (city) => {
    
    const encodedUrl = encodeURI(city);
    
    const config = {
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${ encodedUrl }&appid=3b9f21e396ce9e44d9a1dab814de8c02&units=metric`,
        headers: { }
      };
    
    const response = await axios(config);

    if (response.data.coord.length === 0) {
        throw new Error(`There are no results for ${ city }`);
    }   

    const data = response.data;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    const weather = data.weather;
    const temp = data.main.temp;

    // console.log(lat);
    // console.log(lng);
    // console.log(weather);
    // console.log(temp);
    
    return {
        city,
        lat,
        lng,
        weather,
        temp
    }
        
}

module.exports = {
    getInfo
}
