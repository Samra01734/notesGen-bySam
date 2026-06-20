 import jwt from "jsonwebtoken"
 const isAuth=async(req,res , next)=>{
    try {
        let {token}=req.cookies
        if(!token){ 
            return res.status(400).json({messege:"Token is nit found"})
        }
        let verifyToken=jwt.verify(token,Process.env.JWT_SECRET)
        if(!verifyToken){
          return res.status(400).json({messege:"User does'nt have valid token"})
      
        }req.userId=verifyToken.userId
        next()
    } catch (error) {
        
    }
 }
 export default isAuth