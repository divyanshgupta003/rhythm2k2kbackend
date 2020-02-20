const Event = require('../models/Event');
const User = require('../models/User');

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

    try{
        Event.findOne({number : req.params.number} , function(err ,event){
            if(err){
                return console.log(err);
                
            }
            console.log(event);
            
            if(!req.user){
                res.render('events' , {
                    title : event.name,
                    event : event
                });
            }else{
                User.findById(req.user._id)
                .populate('team')
                .populate({
                    path : 'team',
                    populate : {
                        path : 'user'
                    }
                })
                .exec(function(err ,user){
                    if(err){
                        return console.log('error in finding the user');
                    }
                    if(user.eventNumber.includes(req.params.number)){
                        for(team of user.team){
                            if(team.event = req.params.number){
                                console.log(team);
                                
                                return res.render('events' , {
                                    title : event.name,
                                    event : event,
                                    found : true,
                                    team : team
                                })
                            }
                        }
                    }
                    else{
                        return res.render('events' , {
                            title : event.name,
                            event : event,
                            found : false
                        })
                    }
                    
                });
            }
            
        });
    
    }catch(err){
        console.log(err);
        return;
    }
};