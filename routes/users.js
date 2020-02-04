const express = require('express');

const app = express.Router();
const userControllers = require('../controllers/users_controller');


app.get('/sign-up' , userControllers.signUp);
app.get('/sign-in' , userControllers.signIn);
app.post('/create' , userControllers.create);

module.exports = app;