import axios from "axios";
import { createContext, useState } from "react";
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [allDoctors,setAllDoctors] = useState([]);
    const [appointments,setAppointments] = useState([]);
    const [dashData, setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL 

    
    // to get all doctor list
    const getAllDoctors= async() => {

    try {
      const response = await axios.get(`${backendUrl}/api/admin/all-doctors`,{
        headers : {
          aToken : aToken
        }
      });
      console.log(response.data.data)
      if (response.status === 200){
        setAllDoctors(response.data.data)
      }
    } catch (error) {
      console.log('error in fetching',error)
    }

  }
    // to change doctor availability
    const changeAvailability = async (docId) => {

        try {
            const {data} = await axios.post(backendUrl+'/api/admin/change-availability',{docId},{headers:{aToken}})
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    // get all appointments
    const getAllAppointments = async () => {
      try {
        const {data} = await axios.get(backendUrl + '/api/admin/appointments',{headers:{aToken}})
        if (data.success){
          setAppointments(data.appointments)
          console.log(data.appointments)
        } else {
          toast.error(data.message)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    // cancel appointment
    const cancelAppointment = async (appointmentId) => {

      try {
        
        const {data} = await axios.post(backendUrl +'/api/admin/cancel-appointment',{appointmentId},{headers:{aToken}})
              if (data.success) {
                toast.success(data.message)
                getAllAppointments()
              } else {
                toast.error(data.message)
              }
      } catch (error) {
          toast.error(error.message)
      }

    }

    const getDashData = async () => {
      try {
        const {data} = await axios.get(backendUrl+"/api/admin/dashboard",{headers:{aToken}})
        if (data.success) {
          setDashData(data.dashData)
          console.log(data.dashData)
        } else {
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
        console.log(error.message)
      }
    }

    const value = {
        aToken,setAToken,
        backendUrl,
        getAllDoctors,
        allDoctors,setAllDoctors,
        changeAvailability,
        appointments,setAppointments,
        getAllAppointments,
        cancelAppointment,
        dashData, getDashData,
    }


    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider