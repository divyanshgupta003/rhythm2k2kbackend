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
        if(req.user){
            if(req.user.eventNumber.includes(req.params.number)){
                return res.render('events' , {
                    flag : true,
                    title : event.name,
                    event : event,
                    userPresent : true
                })
            }
            return res.render('events' , {
                flag : false,
                title : event.name,
                event : event,
                userPresent : true
            })
       }else{
        return res.render('events' , {
            flag : false,
            title : event.name,
            event : event,
            userPresent : false
        })
       }
    });
};