
const tj = require("@tmcw/togeojson");
const turf = require("@turf/turf");
const fs = require("fs");
const path = require("path");
const { getLatLong } = require('../../services/map');
// node doesn't have xml parsing or a dom. use xmldom
const DOMParser = require("xmldom").DOMParser;

const kml = new DOMParser().parseFromString(fs.readFileSync(
    path.resolve(__dirname, '../../../areas.kml'), 'utf8')
);
const converted = tj.kml(kml);
const getOutlateNameByLatLon = (lat, long) => {
    let outlateName = 'not found'
    const targetPoint = turf.points([[long, lat]]);
    converted.features.some(outlet => {
        if (outlet.geometry.type !== 'Polygon') {
            return false;
        }
        const points = turf.polygon(outlet.geometry.coordinates);
        if (turf.pointsWithinPolygon(targetPoint, points).features.length > 0) {
            outlateName = outlet.properties.name;
            return true;
        }
    });
    return outlateName;
}
const getByAddress = async (address) => {
    const { lat, lng } = await getLatLong(address);
    return getOutlateNameByLatLon(lat, lng);
}
module.exports = {
    getByAddress,
}