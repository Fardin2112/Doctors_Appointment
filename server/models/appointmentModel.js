import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId : {type : String, required: true},
    docId : {type :String, required:true},
    slotData : {type :String, required:true},
    userTime : {type :String, required:true},
    docData : {type : Object, require:true},
    amount : {type:Number, required:true},
    date : {type:Number, require:true},
    cancelled: {type:Boolean, default:false},
    payment: {type:Boolean, default:false},
    isCompleted : {type:Boolean, default:false}
})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment',appointmentSchema)

export default appointmentModel