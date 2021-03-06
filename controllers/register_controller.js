const User = require('../models/User');
const Team = require('../models/Team');
const Event = require('../models/Event');

module.exports.createTeam = async function(req,res){

    try{

        if(req.user.eventNumber.includes(req.body.eventNumber)){
            req.flash('error' , 'You are already registered to this event');
            res.redirect('/event-list');
            return;
        }
    
        //creating the unique code
        var uniqueCode = await (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();

        //finding the user to put the team-id in it's array
        let user = await User.findById(req.user.id);

        //finding the details regarding this event
        let event = await Event.findOne({number : req.body.eventNumber});

        let teamName;

        if(event.category == 'solo'){
            teamName = user.name;
        }else{
            teamName = req.body.teamName;
        }

        //creating the new team
        let team = await Team.create({
            name : teamName,
            code : uniqueCode,
            event : req.body.eventNumber,
            user : req.user.id
        });
        console.log(team);
            //finding the user to put the team-id in it's array
            // let user = await User.findById(req.user.id);
    
            // let event = await Event.findOne({number : req.body.eventNumber});
            
            //pushing team id to event.team
            event.team.push(team.id);
            event.save();
                
            //pushing team id in user.team
            user.team.push(team.id);
            await user.save();

            // console.log(team);
            user.eventNumber.push(req.body.eventNumber);
            await user.save();

            req.flash('success' , 'Successfully made the team');

            return res.redirect(`/event-list/${req.body.eventNumber}`);
                 
    }catch(err){
        console.log(err);
        return res.redirect('/error');
    }
    
};

module.exports.joinTeam = async function(req,res){
    try{
        
    if(req.user.eventNumber.includes(req.body.eventNumber)){
        req.flash('error' , 'You are already registered to this event');
        res.redirect('/event-list');
        return;
    }

    let event = await Event.findOne({number : req.body.eventNumber});
        
    let team = await Team.findOne({code : req.body.teamCode})

    if(!team){
        req.flash('error' , 'You have typed wrong team Code');
        return res.redirect('back');
    }
    if(team.user.length >= event.maxPart){
        req.flash('error' , 'No more participants allowed in the team(Check the event rules)');
        return res.redirect('back');
    }
        if(event.team.includes(team.id)){

            team.user.push(req.user.id);
            await team.save();

            let user = await User.findById(req.user.id);

            // console.log(team);
            user.team.push(team.id);
            user.eventNumber.push(req.body.eventNumber);
            await user.save();
            
            req.flash('success' , 'You have successfully joined the team');
            return res.redirect(`/event-list/${req.body.eventNumber}`);
        }else{
            req.flash('error' , 'You have typed wrong team Code');
            res.redirect('back');
        }
        
    }catch(err){
        req.flash('error' , 'error in joining a team');
        return res.redirect('/error');
    }
    
};

module.exports.exitTeam = async function(req , res){
    try{
        if(!req.isAuthenticated()){
            req.flash('error' , 'Sign-In first');
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
        req.flash('success' , 'You have successfully exit the team');
        return res.redirect('back');
    }catch(err){
        // console.log(err);
        return res.redirect('/error');
    }
      
};