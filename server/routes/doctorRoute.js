import express from 'express'
import { doctorList, logingDoctor } from '../controllers/doctorController.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList);
doctorRouter.post('/login',logingDoctor)

export default doctorRouter