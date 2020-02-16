const User = require('../models/User');
const Team = require('../models/Team');

module.exports.createTeam = function(req,res){
    console.log(req.body.eventNumber);
    
    if(req.user.eventNumber.includes(req.body.eventNumber)){
        res.redirect('/event-list');
        return;
    }
    var uniqueCode = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    Team.create({
        name : req.body.teamName,
        code : uniqueCode,
        event : req.body.eventNumber,
        //have to check this works or not
        user : req.user.id
    } , function(err , team){
        if(err){
            console.log('error in creating a team' , err);
            return;
        }
        User.findById(req.user.id , function(err , user){
            if(err){
                console.log('error in finding user' , err);
                return;
            }
            console.log(team);
            user.eventNumber.push(req.body.eventNumber);
            return res.redirect(`/event-list/${req.body.eventNumber}`);
        });
        
    });

 
};

module.exports.joinTeam = function(req,res){
    if(req.user.eventNumber.includes(req.body.eventNumber)){
        res.redirect('/event-list');
        return;
    }
    Team.findOne({code : req.body.teamCode} , function(err , team){
        if(err){
            return console.log('error in finding the team' , err);
        }
        team.user.push(req.user.id);
        team.save();
        return res.redirect(`/event-list/${req.body.eventNumber}`);
    });
};