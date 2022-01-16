const jwt = require('jsonwebtoken');

 async function isAuthenticated(req,res,next){
    
    if(!req.headers['authorization']){
        res.json({msg:'Unauthorized'});
    }
    const token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token,'secret',(err,user)=>{
        if(err){
           res.json({msg:err.message})
        }
        else {
             req.user = user;
             next();
        }
    })
}

module.exports = isAuthenticated;