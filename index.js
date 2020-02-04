const express = require('express');
const port = 8000;
const app = express();
const keys = require('./keys');
const mongoose = require('mongoose');

app.use(express.urlencoded());

//setting the view engine
app.set('view engine' , 'ejs');

// for the views files(ejs)
app.set('views' , './views');

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