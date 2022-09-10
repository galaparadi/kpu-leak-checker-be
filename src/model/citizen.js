const mongoose = require('mongoose');
const nikSchema = new mongoose.Schema(
    {}, //no schema for you
    {
        strict: false,
        autoCreate: false,
        autoIndex: false,
    })

const Citizen = mongoose.model(process.env.DB_COLLECTION, nikSchema);

module.exports = Citizen;