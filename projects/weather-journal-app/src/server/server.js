var path = require('path')
const express = require('express');
// const mockAPIResponse = require('./mockAPI.js')
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));
// console.log(JSON.stringify(mockAPIResponse))

const port = 8000;
app.listen(port, listening);

//Empty JS object as endpoint for all routes; initiated in the file server.js to act as the app API endpoint.
const weatherObj = {};

const projectData = [];
app.get('/retrieve', getData);
app.post('/add', postData);
app.get('/all', updateData)

/** ------------------------Defining Functions------------------------*/
function listening() {
    console.log(`The server is running on localhost ${port}`);
}

//GET route to return the JS object created at the top of server code
function getData(req, res) {
    res.send(weatherObj);
}

//POST route adds new entry to the server
function postData(req, res) {
    const newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        user_response: req.body.user_response
    };
    projectData.push(newEntry);
    console.log(`posted: ${projectData}`);
}

//GET request
function updateData(req, res) {
    console.log(`updated data at server side is: ${projectData}`);
    res.send(projectData);
}
/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
// Setup empty JS object to act as endpoint for all routes
// projectData = {};

// // Require Express to run server and routes

// // Start up an instance of app

// /* Middleware*/
// //Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Cors for cross origin allowance

// // Initialize the main project folder
// app.use(express.static('website'));


// Setup Server