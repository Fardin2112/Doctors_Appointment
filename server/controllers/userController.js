import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";

// API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking name email password missing
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing details" });
    }
    // validating email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter valid Email" });
    }
    // validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Enter minimum 8 digit password",
      });
    }

    // hasing password
    const salt = await bcrypt.genSalt(11);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    // saving new user details to database
    const newuser = new userModel(userData);
    const user = await newuser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API for user login
const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, message: "Missing details" });
    }
    const user = await userModel.findOne({ email });
    if (!user || !user.password) {
      return res.json({ success: false, message: "User does not exit" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
// API to get user profile data
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId).select("-password");

    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// API to update user
const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;
    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "Data Missing" });
    }
    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });
    if (imageFile){
        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
        const imageUrl =imageUpload.secure_url

        await userModel.findByIdAndUpdate(userId,{image:imageUrl})
    }
    res.json({success:true,message:'Profile updated'})
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// API to book appointment
const bookAppointment = async (req,res) => {
  try {
    const {userId, docId, slotDate, slotTime } = req.body

    const docData = await doctorModel.findById(docId).select('-password')
    console.log('ck2',docData)

    if (!docData.available) {
      return res.json({success:false, message:'Doctor not available'})
    }
    let slots_booked = docData.slots_booked

    //checking for slot availablity
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({success:false, message:'Slot not available'})
      } else {
        slots_booked[slotDate].push(slotTime)
      }
    } else {
      slots_booked[slotDate] = []
      slots_booked[slotDate].push(slotTime)
    }

    const userData = await userModel.findById(userId).select('-password')

    delete docData.slots_booked

    const appointmentData = {
      userId,
      docId,
      userData,
      docData,
      amount : docData.fees,
      slotTime,
      slotDate,
      date : Date.now()
    }
    const newApppointment = new appointmentModel(appointmentData)
    await newApppointment.save()

    // save new slot data in docData
    await doctorModel.findByIdAndUpdate(docId,{slots_booked})

    res.json({success:true, message:"Appointment Booked"})
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}

// APu to get user appointment for frontend my appointment page
const listAppointment = async(req,res) => {

  try {
    const {userId} = req.body
    const appointment = await appointmentModel.find({userId})

    res.json({success:true, appointment})
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
} 

// API to cancel Appointment

const cancelAppointment = async(req,res) => {

  try {
    const {userId, appointmentId} = req.body

    const appointmentData = await appointmentModel.findById(appointmentId)

    // verify appointment user
    if (appointmentData.userId != userId){
      return res.json({success:false, message:'Unauthorize action'})
    }

    await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})

    // releasing doctor slot

    const {docId, slotDate, slotTime} = appointmentData

    const doctorData = await doctorModel.findById(docId)

    let slots_booked = doctorData.slots_booked

    slots_booked[slotDate] = slots_booked[slotDate].filter(e =>  e !== slotTime)

    await doctorModel.findByIdAndUpdate(docId, {slots_booked})

    res.json({success:true, message:'Appointment Cancelled'})

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}

export { registerUser, loginuser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment };
