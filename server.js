const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
require('dotenv/config');

// Connecting to the database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome." });
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);


// listen for requests
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});