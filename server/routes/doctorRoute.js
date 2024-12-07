import express from 'express'
import { appointmentCancel, appointmentComplete, appointmentsDoctor, doctorList, logingDoctor } from '../controllers/doctorController.js'
import authDoctor from '../middleware/authDoctor.js';

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList);
doctorRouter.post('/login',logingDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',authDoctor,appointmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)

export default doctorRouter