const { mapApiKey, mapApiUrl } = require('../../../config');
const rp = require('request-promise-native');
const getLatLong = async (address) => {
    var options = {
        uri: mapApiUrl,
        qs: {
            key: mapApiKey,
            q: address
        },
        json: true
    };
    const data = await rp(options);
    return data.results[0].geometry;
}
module.exports = {
    getLatLong
}