const express = require('express');
const apiRoutes = express.Router();
const outlets = require('./outlet');

apiRoutes.get('/', function (req, res) {
    res.json({ message: 'Welcome to the API root' });
});
apiRoutes.use('/outlets', outlets);
module.exports = apiRoutes;