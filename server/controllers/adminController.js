import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from "../models/doctorModel.js";
import jwt from 'jsonwebtoken'
import { response } from 'express';
import appointmentModel from '../models/appointmentModel.js';

// API for adding doctors
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        console.log({ name, email, password, speciality, degree, experience, about, fees, address }, imageFile);

        // checking for all data to add doctors
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile) {
            return res.json({ success: false, message: "Missing details for adding doctor" });
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        
        // validating strong password
        if (!validator.isStrongPassword(password)) {
            return res.json({ success: false, message: "Please enter a stronger password" });
        }

        // hashing doctor password
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(salt, hashedPassword);

        // image upload to cloudinary
        let imageUrl;
        try {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            imageUrl = imageUpload.secure_url;
        } catch (uploadError) {
            console.error(uploadError);
            return res.status(500).json({ success: false, message: "Image upload failed" });
        }

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date: Date.now()
        };
        
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.status(200).json({ success: true, message:"Doctor added successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:error.message});
    }
};

// API for admin loging
const loginAdmin = async(req,res) => {
    try {
        const {email,password} = req.body

        if ( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true,token})
            console.log(token)

        } else {
            res.json({success:false,message:"Invalid creadentials"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:error.message});
    }
}

// API to get all doctors list for admin panel
const allDoctors = async(req,res) => {
    try {
        const alldoc = await doctorModel.find({}).select('-password');

         // If there are no doctors in the database
        if (!alldoc && alldoc.length === 0){
           return res.status(404).json({success:false,message:'No doctors found'})
        }

        // Return the doctor data in the response
        res.status(200).json({ success: true, data: alldoc });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:error.message});
    }
}

// API to get all appointment list 
const appointmentsAdmin = async(req,res) => {
    try {
        const appointments = await appointmentModel.find({})
        res.json({success:true,appointments})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:error.message});
    }
}

export { addDoctor,loginAdmin, allDoctors,appointmentsAdmin };
