const Satellite = require("../models/satellite");

module.exports = class SatelliteService {
  async fetchAllSatellites() {
    return Satellite.find({}).exec();
  }

  async insertOrUpdateSatellite(satellite) {
    // rename errors to barrel errors to get around mongoose reserved word
    const satelliteData = {
      ...satellite,
      barrels: satellite.barrels.map(barrel => ({
        ...barrel,
        barrel_errors: barrel.errors
      }))
    };
    return Satellite.update(
      { satellite_id: satelliteData.satellite_id },
      satelliteData,
      { upsert: true }
    ).exec();
  }
};
