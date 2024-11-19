import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios';

const Doctors = () => {

  const {backendUrl} = useContext(AdminContext);
  const [allDoctors,setAllDoctors] = useState([]);

  const getAllDoctors= async() => {

    try {
      const response = await axios.get(`${backendUrl}/api/admin/all-doctors`);
      console.log(response.data.data)
      if (response.status === 200){
        setAllDoctors(response.data.data)
        console.log("isok".response.data.data)
      }
    } catch (error) {
      console.log('error in fetching',error)
    }

  }

  useEffect(() => {
    getAllDoctors();
  }, []);

  

  return (
    <div>
      { allDoctors ?
        allDoctors.map((doc,index)=>(
          <div className='' key={index}>
            <p className='text-black'>{doc.name}</p>
          </div>
        ))
        : <p>Loading</p>
      }
    </div>
  )
}

export default Doctors