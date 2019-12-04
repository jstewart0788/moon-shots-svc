const Satellite = require("../models/satellite");

module.exports = class SatelliteService {
    async fetchAllSatellites() {
        return Satellite.find({}).exec();
    }

    async insertOrUpdateSatellite(satellite) {
        return Satellite.update(satellite, {upsert: true}).exec();
    }
};