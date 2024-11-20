import axios from "axios";
import { createContext, useState } from "react";
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [allDoctors,setAllDoctors] = useState([]);

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

    const value = {
        aToken,setAToken,
        backendUrl,
        getAllDoctors,
        allDoctors,setAllDoctors,
        changeAvailability,
    }


    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider