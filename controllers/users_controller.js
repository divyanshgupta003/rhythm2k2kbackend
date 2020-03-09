const User = require('../models/User');

module.exports.signUp = function(req , res){
    try{
        if(req.isAuthenticated()){
            req.flash('error' , 'You are already a user');
            return res.redirect('/');
        }
        
        res.render('users-sign-up' , {
            title : 'Sign-Up'
        });
    }
    catch(error){
        return res.redirect('/error');
    }
    

}

module.exports.signIn = function(req , res){
    try{
        if(req.isAuthenticated()){
            req.flash('error' , 'You are already a user');
           return res.redirect('/');
        }
        return res.render('users-sign-in' , {
            title : 'Sign In'
        });
    }
    catch(error){
        return res.redirect('/error');
    }
    
}

module.exports.create = async function(req , res){
    try{
        let user = await User.findOne({ email : req.body.email })
        if(req.body.password != req.body.re_password){
            req.flash('error' , 'password and confirm password does not match');
            return res.redirect('back');
        }
        if(!user){
            let newUser = await User.create(req.body)
            req.flash('success' , 'Sign In for further view');
            return res.redirect('/users/sign-in');
        }
        else{
            req.flash('error' , 'User with this email Id already exists');
            return res.redirect('back');
        }
    }catch(err){
        console.log(err);
        return res.redirect('/error');
    }
}
module.exports.createSession = function(req,res){
    try{
        req.flash('success' , 'You are signed In now');
        return res.redirect('/');
    }
    catch(err){
        return res.redirect('/error');
        
    }
    
}

module.exports.signOut = function(req , res){
    try{
        req.logOut();
        req.flash('success' , 'You are Logged Out');
        return res.redirect('/');
    }
    catch(error){
        return res.redirect('/error');
       
    }
    
}

module.exports.dashboard = async function(req , res){
    try{

    if(!req.isAuthenticated()){
        req.flash('error' , 'You need to Sign-In first for accessing this');
        return res.redirect('sign-in');
    }

    const id = req.user.id;

    let user = await User.findById(id).populate({
        path : 'team'
    });
        // User.findById(id ,function(err , user){
        // console.log(user.team[0]);
        return res.render('users-dashboard' , {
            title : 'Dashboard',
            user : user,
        });
    }catch(err){
        return res.redirect('/error');
        
    }
}

module.exports.update = async function(req,res){
    try{
        if(!req.isAuthenticated()){
            return res.redirect('users-sign-in');
        }
    
        const id = req.user.id;
    
        let user = await User.findById(id)
        return res.render('users-update' , {
            title : 'Update',
            user : user,
        });
    }catch(err){
        return res.redirect('/error');
        
    }
}

module.exports.updateProfile = async function(req, res){
    try{
        if(!req.isAuthenticated()){
            return res.redirect('users-sign-in');
        }
    
        const id = req.user.id;
    
        let user = await User.findById(id);
            user.name = req.body.name;
            user.save();
            return res.redirect('/users/dashboard');
        
    }catch(err){
        return res.redirect('/error');
        
    }
}