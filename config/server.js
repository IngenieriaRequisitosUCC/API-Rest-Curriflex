require('./database.js');
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config("../");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

module.exports = {
    PORT, 
    app
};