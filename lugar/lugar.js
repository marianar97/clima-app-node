const axios = require('axios');



const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion)
    console.log("LUGAR:", encodeUrl);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBiwpEyBBCmycrAVh01RfRRm0j8ePaK3yo`)

    console.log("RESP", resp.data.status)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);

    }

    let location = resp.data.results[0].formatted_address;
    let coors = resp.data.results[0].geometry.location;
    let lt = coors.lat;
    let lng = coors.lng;

    console.log("LOCATION", location);

    return {
        direccion: location,
        long: lng,
        lat: lt
    }
}

module.exports = {
    getLugarLatLng
}