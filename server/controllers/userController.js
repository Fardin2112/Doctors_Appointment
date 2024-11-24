import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { Mongoose } from 'mongoose'

// API to register user 
const registerUser = async (req,res) => {

    try {
        const {name, email, password} = req.body 

        // checking name email password missing
        if ( !name || !email || !password ){
            return res.json({success:false, message:"Missing details"})
        }
        // validating email
        if(!validator.isEmail(email)){
            return res.json({success:false, message:'Enter valid Email'})
        }
        // validating strong password
        if (password.length < 8){
            return res.json({success:false, message:"Enter minimum 8 digit password"})
        }

        // hasing password
        const salt = await bcrypt.genSalt(11)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password : hashedPassword
        }

        // saving new user details to database
        const newuser  = new userModel(userData)
        const user = await newuser.save()

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

// API for user login
const loginuser = async(req,res) => {
    try {
        const {email, password} = req.body
        if (!email, !password){
            return res.json({success:false, message:"Missing details"})
        }
        const user = userModel.find()
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}
export {registerUser,loginuser}