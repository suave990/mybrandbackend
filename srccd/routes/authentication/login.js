import express from "express";
import route from "../api/blog_routes";
import jwt from "jsonwebtoken";
const routes = express.Router();
routes.post('/login',(req,res)=>{
const email =req.body.email
const password = req.body.password
const user ={email,password} 
const token =jwt.sign(user,process.env.TOKEN_SECRET)
res.json({accessToken:token})
//console.log(req.body)
})

export default routes