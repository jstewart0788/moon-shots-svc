const mongoose = require("mongoose");

const schema = mongoose.Schema({
  telemetry_timestamp: {
    type: Date,
    require: true
  },
  satellite_id: {
    type: Number,
    require: true
  },
  barrels: [
      {
          batch_id: {
            type: Number,
            require: true
          },
          last_flavor_sensor_result: {
            type: String,
            require: true
          },
          status: {
            type: String,
            require: true
          },
          errors: []
      }
  ]
});

const model = mongoose.model("satellite", schema);

module.exports = model;
