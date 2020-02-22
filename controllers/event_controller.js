const Event = require('../models/Event');
const User = require('../models/User');

module.exports.home = async function(req,res){
    try{

        let event = await Event.find({});
            res.render('event-list' , {
                event : event,
                title : 'Event List'
            });
    }catch(err){
        req.flash('success' , 'error in finding events');
        return console.log(err);
        
    }
}; 

module.exports.specificEvent = async function(req , res){

    try{
        let event = await Event.findOne({number : req.params.number});
            // console.log(event);
            
            if(!req.user){
                res.render('events' , {
                    title : event.name,
                    event : event
                });
            }else{
                let user = await User.findById(req.user._id)
                .populate('team')
                .populate({
                    path : 'team',
                    populate : {
                        path : 'user'
                    }
                });
                
                if(user.eventNumber.includes(req.params.number)){
                    for(team of user.team){
                        if(team.event = req.params.number){
                            // console.log(team);
                                
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
            }
    
    }catch(err){
        console.log(err);
        return;
    }
};