require('dotenv').config();
const express = require('express');
const app = express();
const nik = require('./router/nik');
const kk = require('./router/kk');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

//TODO: implement CORS
app.get('/', (req,res) => {
    res.send('yo');
});

app.use('/nik', nik);
app.use('/kk', kk);

app.listen(3333, () => {
    console.log('listen on port 3333');
});
