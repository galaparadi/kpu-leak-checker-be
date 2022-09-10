const express = require('express');
const router = express.Router();
const Citizen = require('../model/citizen');

router.get('/', (req, res) => {

})

router.get('/:kk', async (req, res) => {
    if (!req.params.kk.match(/^[0-9]*$/)) return res.json({ error: 1, message: "format salah : hanya boleh terdapat angka" });
    if (req.params.kk.length !== 16) return res.json({ error: 1, message: "format salah : panjang digit harus 16" });

    const kk = await Citizen.findOne({ kk: req.params.kk }).exec();
    const leaked = kk ? 1 : 0;
    const message = leaked ? "KK anda termasuk dalam sample data" : "KK anda tidak termasuk dalam sample data";
    res.json({ leaked, message });
})

module.exports = router;