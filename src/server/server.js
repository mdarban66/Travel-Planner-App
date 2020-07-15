var path = require('path')
const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('dist'));


const port = 8080;
app.listen(port, listening);

//Empty JS object as endpoint for all routes; initiated in the file server.js to act as the app API endpoint.
const weatherObj = {};

const projectData = [];

app.get('/', function(req, res) {
    res.sendfile('index.html');
    // res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
})

app.post('/add', postData);
app.get('/all', updateUI)

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
    console.log('req.body in server.js: ' + req.body);
    const newEntry = {
        city: req.body.city,
        country: req.body.country,
        zip: req.body.zipcode,
        date: req.body.date,
        returnDate: req.body.returnDate,
        temp: req.body.temp,
        futureTemp: req.body.futureTemp,
        daysToTrip: req.body.daysToTrip,
        details: req.body.details,
        length: req.body.tripLength

    };
    projectData.push(newEntry);
    console.log('#############' + newEntry.country);
    console.log(projectData[0].country);
    console.log(`@server.js -- posted: ${projectData}`);
}

//GET request
function updateUI(req, res) {
    console.log(`updated data at server side is: ${projectData}`);
    res.send(projectData);
}
module.exports = app