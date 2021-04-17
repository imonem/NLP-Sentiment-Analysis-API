//server endpoints to save Meaning Cloud Data Response and Client requests
let clientRequests = {};
let projectData = {};

const path = require('path');
//Obfuscated password initialization, rename to whatever is the .env file name
const dotenv = require('dotenv').config({
    path: '.\\\\.env'
});

//express and cors initialization
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const axios = require('axios');
const { error } = require('console');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static('dist'));

console.log(`Your API key is ${process.env.API_KEY}`); //comment out this line before using code for production

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Meaning Cloud Server listening on port 8081!');
});

//meaning cloud route
app.post('/meaning', (req, res) => {
    let newEntry = req.body;
    clientRequests.article = newEntry.input;
    console.log(`The req.body is ${req} and newEntry.txt is ${newEntry.input}`);
    console.log(clientRequests);

    const analysisData = () => {axios("https://api.meaningcloud.com/sentiment-2.1", {
        method: 'POST',
        headers: {
            "Content-Type": "application/JSON"
        },
        params: {
            key: process.env.API_KEY,
            url: clientRequests.article,
            lang: 'en'
        },
        redirect: 'follow'
    })
    .then(data => ({
        status: data.status,
        body: data
    }))
    .then(({ status, body }) => {
        // console.log(status, body);
        projectData.model = body.data.model;
        projectData.score_tag = body.data.score_tag;
        projectData.agreement = body.data.agreement;
        projectData.subjectivity = body.data.subjectivity;
        projectData.confidence = body.data.confidence;
        projectData.irony = body.data.irony;
        res.send(projectData);
    })
    .catch(error => console.log('error', error));
    // .then(res.send(projectData));
};
analysisData();
});