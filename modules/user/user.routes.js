import { Router } from "express";
import { addUser, signIn } from "./user.controller.js";
  
const userRoute=Router()

userRoute.post('/signup',addUser)
userRoute.post('/signin',signIn)




export default userRoute