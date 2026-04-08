const jwt = require("jsonwebtoken");

const veryifyToken = async(req,res,next)=>{
    let token = req.headers["authorization"];
    if(token){
        token = token.split(" ")[1]
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if(err){
                res.status(400).json({message:"Invalid Token"})            
            }else{
                console.log(decoded);   
                req.user = decoded;
            }
        })
        next();
    }else{
        res.status(400).json({message:"Token Not Found"})
    }
}

module.exports = veryifyToken;