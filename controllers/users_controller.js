const User = require('../models/User');

module.exports.signUp = function(req , res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    
    res.render('users-sign-up' , {
        title : 'Sign-Up'
    });

}

module.exports.signIn = function(req , res){
    if(req.isAuthenticated()){
       return res.redirect('/');
    }
    return res.render('users-sign-in');
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
                console.log('user created');
                
               return res.redirect('/users/sign-in');
            });
        }
        else{
            console.log('user already exists');
            
            return res.redirect('back');
        }
    });
}
module.exports.createSession = function(req,res){
    console.log('user signed-in');
    
    return res.redirect('/');
}

module.exports.signOut = function(req , res){
    req.logOut();
    res.redirect('/');
}

module.exports.dashboard = function(req , res){
    if(!req.isAuthenticated()){
        console.log('we are here');
        return res.redirect('sign-in');
    }

    const id = req.user.id;

    User.findById(id).populate({
        path : 'team'
    }
    ).exec(function(err , user){
        // User.findById(id ,function(err , user){
        if(err){
            console.log('error in finding user' , err);
            return;
        }
        // console.log(user.team[0]);
        res.render('users-dashboard' , {
            user : user,
        });
    });
}

module.exports.update = function(req,res){
    if(!req.isAuthenticated()){
        return res.redirect('users-sign-in');
    }

    const id = req.user.id;

    User.findById(id , function(err , user){
        if(err){
            console.log('error in finding user' , err);
            return;
        }
        res.render('users-update' , {
            user : user,
        });
    });

}

module.exports.updateProfile = function(req, res){
    if(!req.isAuthenticated()){
        return res.redirect('users-sign-in');
    }

    const id = req.user.id;

    User.findById(id , function(err , user){
        if(err){
            console.log('error in finding and updating user' , err);
            return;
        }
        
        user.name = req.body.name;
        user.save();
        res.redirect('/users/dashboard');
    });

}