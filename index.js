const express = require('express');
const port = 8000;
const app = express();
const keys = require('./keys');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passportLocalStrategy = require('./config/passport-local-strategy');
const middle = require('./event-add')

app.use(express.urlencoded());

app.use(session({
    secret : 'rhythm',
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : (1000 * 60 * 100)
    },
    store : new MongoStore({
        mongooseConnection : mongoose.connection,
        autoRemove : 'disabled'
    },
    function(err){
        if(err){
            console.log(err || 'connect mongo-store OK');
        }
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//setting the view engine
app.set('view engine' , 'ejs');

// for the views files(ejs)
app.set('views' , './views');

//middleware for adding the event once
// app.use(middle.add);

//handling the routes
app.use('/' , require('./routes'));

// const db = mongoose.connection;


mongoose.connect(keys.mongouri , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}, function(err){
    if(err){
        console.log(err);
        return;
    }
    
    console.log('database working');

    app.listen(port , function(ferr){
        if(err){
            console.log(err);
            
        }
        console.log('Port running fine on ' + port);
    });
    
});