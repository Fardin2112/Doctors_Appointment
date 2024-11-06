import mongoose from 'mongoose'
import { _default } from 'validator'

const doctorSchema = new mongoose.Schema({
    name :{type:String, required:true},
    email:{type:String, require:true, unique:true},
    password: {type:String, require:true},
    image:{type:String, require:true},
    speciality:{type:String, require:true},
    degree:{type:String, require:true},
    experiance:{type:String, require:true},
    about:{type:String, require:true}, 
    available:{type:Boolean, require:true},    
    fees:{type:Number, require:true},  
    address:{type:Object, require:true},
    date:{type:Number, require:true},
    degree:{type:String, require:true},
    slots_Booked:{type:Object, default:{}},
},{minimize:false}) // minimize:false used because we used slots_Booked default empty , if make empty schema then we have to used 

const doctorModel = mongoose.models.doctor || mongoose.model('doctor',doctorSchema)

export default doctorModel

