const express = require('express');

const app = express.Router();
const registerController = require('../controllers/register_controller');

app.post('/createTeam' , registerController.createTeam);
app.post('/joinTeam' , registerController.joinTeam);

module.exports = app;