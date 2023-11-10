import express from "express";
import mongoose from 'mongoose';
//import dotenv from 'dotenv';
//dotenv.config();
//process.env.MONGO
//MONGO = "mongodb+srv://harshsangrulkar:1234@cluster0.8ptiwxj.mongodb.net/?retryWrites=true&w=majority"
import userRouter from './routes/user.route.js';


mongoose.connect("mongodb+srv://harshsangrulkar:1234@cluster0.8ptiwxj.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(4000,()=>{
    console.log("Server running on port 4000");
})

app.use('/server/user', userRouter);