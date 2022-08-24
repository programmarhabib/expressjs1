const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const path = require('path');
const pagerout = require('./routes/pageRoute');

// environment variable setup

const PORT = process.env.PORT || 4000;

const app = express();
app.use( express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// router connection with server.js

app.use(pagerout);


//server listen
app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`.bgGreen.black);
})

