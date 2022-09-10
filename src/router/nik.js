const express = require('express');
const router = express.Router();
const Citizen = require('../model/citizen');

router.get('/', (req, res) => {

})

router.get('/:nik', async (req, res) => {
    if (!req.params.nik.match(/^[0-9]*$/)) return res.json({ error: 1, message: "format salah : hanya boleh terdapat angka" });
    if (req.params.nik.length !== 16) return res.json({ error: 1, message: "format salah : panjang digit harus 16" });

    const nik = await Citizen.findOne({ nik: req.params.nik }).exec();
    const leaked = nik ? 1 : 0;
    const message = leaked ? "NIK anda termasuk dalam sample data" : "NIK anda tidak termasuk dalam sample data";
    res.json({ leaked, message });
})

module.exports = router;