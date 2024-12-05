import express from 'express'
import { appointmentsDoctor, doctorList, logingDoctor } from '../controllers/doctorController.js'
import authDoctor from '../middleware/authDoctor.js';

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList);
doctorRouter.post('/login',logingDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)

export default doctorRouter