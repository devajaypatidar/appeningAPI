require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const authorization = (req,res,next)=>{
    const token = req.header("Authorization").replace('Bearer ','');
    if(!token) return res.status(401).json({message:"Access Denied "});
    try{
        const user = jwt.verify(token,secret);
        console.log("Token verified");
        req.user = user;
        next();
    }catch(err){
        res.status(400).json({message:" Error occured while verifying token "});
    }
}

module.exports = authorization;