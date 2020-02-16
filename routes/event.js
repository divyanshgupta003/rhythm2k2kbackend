const express = require('express');

const app = express.Router();

const eventController = require('../controllers/event_controller');

app.get('/' , eventController.home);
app.get('/:number' , eventController.specificEvent);


module.exports = app;