const path = require('path');
//Obfuscated password initialization
const dotenv = require('dotenv').config({path: '.\\\\meaning.env'});

//express and cors initialization
const express = require('express');
const cors = require('cors');

const { response } = require('express');
const json = require('./mockAPI.js');
const app = express();

app.use(express.static('dist'));
app.use(cors());

console.log(process.env.API_KEY);
console.log(`Your API key is ${process.env.API_KEY}`);

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('./src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});

app.get('/test', function (req, res) {
    res.send('hi mom!!');
});
