import User from "../models/userModel.js";
import  generateToken from "../utils/generateToken.js";
import asynchandeler from "express-async-handler";

const authUser= asynchandeler(async (req, res) => {
 const {email, password} = req.body

 const user = await User.findOne({email: email})

 if(user && (await user.matchPassword(password))){
     res.json({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmine: user.isAdmine,
         token: generateToken(user._id)
     })
 } else {
     res.status(401)
     throw new Error('Invalid email or password')
 }
});

export {authUser}