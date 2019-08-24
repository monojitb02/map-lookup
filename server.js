const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiModules = require('./app/modules');

// =======================
// configuration =========
// =======================
const port = process.env.PORT || 8080; // used to create, sign, and verify tokens

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello! The APIs are at http://localhost:' + port + '/api');
});
app.use('/api', apiModules);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);