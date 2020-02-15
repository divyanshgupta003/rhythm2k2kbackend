const express = require('express');
const passport = require('passport');
const app = express.Router();
const userControllers = require('../controllers/users_controller');


app.get('/sign-up' , userControllers.signUp);
app.get('/sign-in' ,  userControllers.signIn);
app.post('/create' , userControllers.create);
app.get('/sign-out' , userControllers.signOut);
app.get('/dashboard' , passport.checkAuthentication, userControllers.dashboard);
app.get('/update' , passport.checkAuthentication , userControllers.update);
app.post('/update-profile' , passport.checkAuthentication , userControllers.updateProfile);


app.post('/create-session' , passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}) , userControllers.createSession);

module.exports = app;