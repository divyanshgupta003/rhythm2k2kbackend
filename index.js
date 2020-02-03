const express = require('express');
const port = 8000;
const app = express();

// for the views files(ejs)
app.use('views' , express.static('views'));

//setting the view engine
app.set('view engine' , 'ejs');

//handling the routes
app.use('/' , require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log(err);
        
    }
    console.log('Port running fine on ' + port);
});
