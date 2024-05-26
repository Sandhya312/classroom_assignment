


require('dotenv').config();
const jwt = require('jsonwebtoken');



const authenticateToken = async(req,res,next)=>{
    try{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
    
        if(!token) return res.status(401).send("Token not found");
        
 
    
    
        jwt.verify(token,"123",(err,user)=>{
            if(err) return res.status(403).send("Invalid Token");
            req.user= user;
           
            next();
        } )
    }
    catch(err){
        console.log(err);
    }
}


module.exports = authenticateToken;

