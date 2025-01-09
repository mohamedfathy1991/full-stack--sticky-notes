import Usermodel from "./user.model.js";
import Jwt from "jsonwebtoken"

 
export const addUser=async(req,res,next)=>{
    const {email}= req.body 
    let checkUser= await Usermodel.findOne({ where: {email } });
    if(checkUser) return (res.status(409).json({message:"email is used"}))
    await Usermodel.create(req.body);
     res.status(201).json({message:"User created successfully"});
    
}
export const signIn=async(req,res,next)=>{
    try{
        const{email,password}= req.body
        
        let checkUser= await Usermodel.findOne({ where: {email } });
     if(!checkUser) return (res.status(401).json({message:"email not found"}))
        
        if(checkUser.password!=password)  return (res.status(401).json({message:"password incorect"}))
        console.log(checkUser);
        
            Jwt.sign({id:checkUser.id,name:checkUser.name},"asd asd",(err,token)=>{
                 
                  
                  
                  if(err) return (res.status(500).json({message:"error"}))
                        res .status(200).json({message:"success",token})
                          
             })
            
        
        

  }catch(err){
        console.log("err")
        console.log(err);
        
        res.status(500).json("error in server")

  }
 



}