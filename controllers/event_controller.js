const Event = require('../models/Event');
const User = require('../models/User');

module.exports.home = async function(req,res){
    try{

        let event = await Event.find({});
            return res.render('event-list' , {
                event : event,
                title : 'Event List'
            });
    }catch(err){
        req.flash('error' , 'error in finding events');
        return res.redirect('/error');
    }
}; 

module.exports.specificEvent = async function(req , res){

    try{
        let event = await Event.findOne({number : req.params.number});
            // console.log(event);
            var rules = event.rules.split('<br>');
            
            if(!req.user){
                // console.log(rules);
                var arr
                res.render('events' , {
                    title : event.name,
                    event : event,
                    rules : rules
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
                        if(team.event == req.params.number){
                            // console.log(team);
                                
                            return res.render('events' , {
                                title : event.name,
                                event : event,
                                found : true,
                                team : team,
                                rules : rules
                            })
                        }
                    }
                }
                else{
                    return res.render('events' , {
                        title : event.name,
                        event : event,
                        found : false,
                        rules : rules
                    })
                }
            }
    
    }catch(err){
        // console.log(err);
        req.flash('error' , 'error in finding events');
        return res.redirect('/error');
    }
};