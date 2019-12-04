const express = require('express');
const Satellite = require('../services/satellite');

const router = express.Router();
const satellite = new Satellite();

router.get('/', async (req, res) => {
    try {
        const satellites = await satellite.fetchAllSatellites()
        res.json({ satellites });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

router.post('/', async ({ body }, res) => {
    try {
        const response = await satellite.insertOrUpdateSatellite(body)
        res.json({ msg: "Satellite Updated!", response });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})



module.exports = router;
