const express = require('express');
const bodyParser = require('body-parser');
const api = require('./src/api.js');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use('/api/v1',api);

//CONNECTING TO THE DB HERE
mongoose.connect(
    process.env.DB_CONNECTION,
    ()=>console.log(`CONNECTED TO THE DATABASE USING PORT ${port}`)
)

app.listen(port);
