const axios = require('axios');


const getClima = async(lat, lng) => {
    let temp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6c68b10f96b49c67e7e92eb4ad6ee061`);
    return temp.data.main.temp;
}

module.exports = {
    getClima
}