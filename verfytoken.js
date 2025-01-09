 
import Jwt from "jsonwebtoken"
 export const verfyToken=(req,res,next)=>{
    
    let {token}= req.headers
     
    if(!token)  return (res.status(400).json("error send token "))

     Jwt.verify(token,"asd asd" ,(err,data)=>{
        if(err){
         return (res.status(400).json("error in token verfy"))


        }
        req.user=data
        next()
        

    })

    
}