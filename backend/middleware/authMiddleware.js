const jwt=require("jsonwebtoken")
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect=asyncHandler(async(req,res,next)=>{

    let token;

    if(req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
        )
{
    try {
        token=req.headers.authorization(" ")[1];

       const decode= jwt.verify(token,process.env.JWT_SECRET)

              req.user= await User.find(decode.id).select("-password")
              next();
    } catch (error) {
        res.send(401);
        throw new Error("use not authorized");
    }
}

if(!token){
      res.send(401);
      throw new Error("user have not token");
}


})

module.exports={protect};