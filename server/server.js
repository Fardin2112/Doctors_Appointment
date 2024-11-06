import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'


// app config
const app = express();
const port = process.env.PORT || 4000
connectDB()  // connecting mongodb
connectCloudinary() // connecting cloudinary


// middleware
app.use(express.json())
app.use(cors())

// api endpoint


app.get(('/'), (req,res)=> {
    res.send('API WORKING')
})

app.listen(port,()=>{
    console.log("Server is runnning at port",port)
})