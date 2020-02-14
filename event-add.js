const Event = require('./models/Event');

module.exports.add = function(req,res,next){

    Event.create({
        name : 'First Event',
        number : 1,
    } , function(err , event){
        if(err){
            console.log('error in creating event');
            return;
        }
    } );
    Event.create({
        name : 'Second Event',
        number : 2,
    } , function(err , event){
        if(err){
            console.log('error in creating event');
            return;
        }
    } );
    next();

}