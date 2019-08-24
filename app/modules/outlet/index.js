const express = require('express');
const apiRoutes = express.Router();
const outletController = require('./outlet.controller');

apiRoutes.get('/nearest', outletController.nearest);
module.exports = apiRoutes;