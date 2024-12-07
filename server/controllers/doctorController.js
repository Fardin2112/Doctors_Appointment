import doctorModel from '../models/doctorModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js'

const changeAvailablity = async(req,res) => {

    try {
        const {docId} = req.body

        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId,{available:!docData.available});
        res.json({success:true, message:'Available Changed'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const doctorList = async(req,res) => {

    try {
        const doctors = await doctorModel.find({}).select(['-password','-email']);

        res.json({success:true,doctors})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API for doctor Loging
const logingDoctor = async(req,res) => {

    try {
        const {email, password} = req.body
        const doctor = await doctorModel.findOne({email})

        if (!doctor) {
            return res.json({success:false, message:"invalid credentials"})
        }

        const isMatched = await bcrypt.compare(password, doctor.password)

        if (isMatched) {

            const token = jwt.sign({id:doctor._id},process.env.JWT_SECRET)
            res.json({success:true, token})  
        } else {
            res.json({success:false, message:"invalid Password"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}
// API to get doctor appointments for doctor panel
const appointmentsDoctor = async (req,res) => {
    try {
        const {docId} = req.body
        const appointments = await appointmentModel.find({docId})

        res.json({success:true, appointments})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
// API to mark appointment completed for doctor panel
const appointmentComplete = async (req,res) => {
    try {
        const {docId, appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            
            await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted : true})
            return res.json({success:true, message:'Appointment Completed'})
        } else {
            return res.json({success:false, message:'Mark Failed'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message}) 
    }
}

// API to cancel appointment completed for doctor panel
const appointmentCancel = async (req,res) => {
    try {
        const {docId, appointmentId} = req.body
        
        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            
            await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled : true})
            return res.json({success:true, message:'Appointment Cancelled'})
        } else {
            return res.json({success:false, message:'Cancellation Failed'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message}) 
    }
}
// 

export {changeAvailablity,doctorList, logingDoctor, appointmentsDoctor, appointmentComplete, appointmentCancel}