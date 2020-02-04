const User = require('../models/User');

module.exports.signUp = function(req , res){
    

    res.render('users-sign-up' , {
        title : 'Sign-Up'
    });

    
}

module.exports.signIn = function(req , res){
    
}
module.exports.create = function(req , res){

User.findOne({ email : req.body.email } , function(err , user){
        if(req.body.password != req.body.re_password){
            return res.redirect('back');
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
               return res.redirect('/');
            });
        }
        else{
            return res.redirect('users-sign-in');
        }
        
        
    });
}