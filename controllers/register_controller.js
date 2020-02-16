const User = require('../models/User');

module.exports.createTeam = function(req,res){
    console.log(req.user.eventNumber);
    
    if(req.user.eventNumber.includes(req.body.eventNumber)){
        res.redirect('/event-list');
        return;
    }
    
};

module.exports.joinTeam = function(req,res){

};