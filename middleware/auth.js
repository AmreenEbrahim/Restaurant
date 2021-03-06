const jwt  = require('jsonwebtoken')
const config = require('config')

module.exports= function(req,res,next){
    //get token from header
   
    const token = req.header('x-auth-token')
   
    //check token exist
    if(!token){
       return res.status(401).json({msg:"No Token, Authorozation Denied"})
    }

    //verify token
    try {
        const decode =jwt.verify(token,config.get('jwtSecret'))
        req.user = decode.user
        next();
        
    } catch (error) {
        res.status(401).json({msg:"Token is Invalid"})
        
    }
}