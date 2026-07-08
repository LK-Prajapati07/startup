import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.js'
import messageRoutes from './src/routes/message.routes.js'
dotenv.config()
const app=express()
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is Runing",
        success:true,
    })
})
app.use("/api/v1/message",messageRoutes)
app.listen(9000,()=>{
    console.log(`Serve running in port number 9000`)
    connectDB()
})