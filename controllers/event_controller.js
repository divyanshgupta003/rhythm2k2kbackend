const Event = require('../models/Event');

module.exports.home = function(req,res){

    Event.find({} , function(err , event){
        if(err){
            console.log('error in finding the event' , err);
            return;
        }
        console.log(event);
        
        res.render('event-list' , {
            event : event,
            title : 'Event List'
        });
    });

}; 

module.exports.specificEvent = function(req , res){
    
    Event.findOne({number : req.params.number} , function(err , event){
        if(err){
            console.log('error in finding the specific system' , err);
            return;
        }
        if(req.user.eventNumber.includes(req.params.number)){
            res.render('events' , {
                flag : true,
                title : event.name,
                event : event
            })
        }
        
        res.render('events' , {
            flag : true,
            title : event.name,
            event : event
        })
    });
};