const User = require('../models/User');
const Team = require('../models/Team');
const Event = require('../models/Event');

module.exports.createTeam = function(req,res){
    // console.log(req.body.eventNumber);
    
    if(req.user.eventNumber.includes(req.body.eventNumber)){
        res.redirect('/event-list');
        return;
    }
    //creating the unique code
    var uniqueCode = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    //creating the new team
    Team.create({
        name : req.body.teamName,
        code : uniqueCode,
        event : req.body.eventNumber,
        user : req.user.id
    } , function(err , team){
        if(err){
            console.log('error in creating a team' , err);
            return;
        }
        //finding the user to put the team-id in it's array
        User.findById(req.user.id , function(err , user){
            if(err){
                console.log('error in finding user' , err);
                return;
            }

            Event.findOne({number : req.body.eventNumber} , function(err , event){
                if(err){
                    return console.log('error in finding the event');
                }
                event.team.push(team.id);
                event.save();
            });
            //pushing team id in user.team
            user.team.push(team.id);
            user.save();
            // console.log(team);
            user.eventNumber.push(req.body.eventNumber);
            user.save();
            return res.redirect(`/event-list/${req.body.eventNumber}`);
        });
        
    });

 
};

module.exports.joinTeam = function(req,res){
    if(req.user.eventNumber.includes(req.body.eventNumber)){
        res.redirect('/event-list');
        return;
    }
    Event.findOne({number : req.body.eventNumber} , function(err , event){
        if(err){
            return console.log('error in finding the event');
        }
            Team.findOne({code : req.body.teamCode} , function(err , team){
                if(err){
                    return console.log('error in finding the team' , err);
                }
                if(event.team.includes(team.id)){
                    team.user.push(req.user.id);
                    team.save();
                    User.findById(req.user.id , function(err , user){
                        if(err){
                            console.log('error in finding user' , err);
                            return;
                        }
                        // console.log(team);
                        user.team.push(team.id);
                        user.save();
                        user.eventNumber.push(req.body.eventNumber);
                        user.save();
                        return res.redirect(`/event-list/${req.body.eventNumber}`);
                    });
                }else{
                    res.redirect('back');
                }
            });
    });
    
};

module.exports.exitTeam = async function(req , res){
    try{
        if(!req.isAuthenticated()){
            return res.redirect('back');
        }
        let team = await Team.findById(req.query.teamId);
        // console.log('inside');
        
        // console.log(team.user.length);
        
        if(team.user.length == 1){
            let event = await Event.findOneAndUpdate({number : req.query.eventNumber} , { $pull : {team : req.query.teamId}});
            let user = await User.findByIdAndUpdate(req.user.id , {$pull : {team : req.query.teamId , eventNumber : req.query.eventNumber}});

            // console.log(event,user);
            team.remove();
        }else{
            let user = await User.findByIdAndUpdate(req.user.id , {$pull : {team : req.query.teamId , eventNumber : req.query.eventNumber}});
            let newTeam = await Team.findByIdAndUpdate(team.id , {$pull : {user : req.user.id} });
        }
        return res.redirect('back');
    }catch(err){
        console.log(err);
        return;
    }
      
};