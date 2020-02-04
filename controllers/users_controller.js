const User = require('../models/User');

module.exports.create = function(req,res){
    
    User.findOne({ email : email } , function(err , user){
        if(req.body.password != req.body.re_password){
            res.redirect('back');
        }
        if(err){
            console.log('error in finding the user' , err);
            return;
        }
        if(!user){
            User.create(req.body , function(err , newUser){
                if(err){
                    console.log('error in creating user', err);
                    return;
                }
               res.redirect('/');
            });
        }
        else{
            res.redirect('users-sign-in');
        }
        
        
    });

}