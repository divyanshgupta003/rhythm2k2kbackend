module.exports.home = function(req,res){
    try{
        res.render('home' , {
            title : 'Home Page'
        });
    }
    catch(error){
        return res.redirect('/error');
    }
    
}
module.exports.errorPage = function(req,res){
    try{
        res.render('404', 
        {
            title : 'Oops!!', 
            layout: false
        });
    }
    catch(error){
        return res.redirect('/error');
    }
    
}