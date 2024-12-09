import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const AllApointment = () => {

  const {aToken,appointments,setAppointments,getAllAppointments,cancelAppointment} = useContext(AdminContext)
  const {calculateAge, slotDateFormate} = useContext(AppContext)

  useEffect(()=>{
    if (aToken){
      getAllAppointments()
    }
  },[aToken])

  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctors</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
        {
          appointments?.reverse().map((item,index)=>(
            <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-centertext-gray-500 py-3 px-6 border-b hover:bg-gray-50' key={index}>
              <p className='max-sm:hidden'>{index+1}</p>
              <div className='flex items-center gap-2 '>
                <img className='w-8 rounded-full' src={item.userData.image} alt="" /> <p>{item.userData.name}</p>
              </div>
              <p>{calculateAge(item.userData.dob)}</p>
              <p>{slotDateFormate(item.slotDate)}, {item.slotTime}</p>
              <div className='flex items-center gap-2 '>
                <img className='w-8 rounded-full' src={item.docData.image} alt="" /> <p>{item.userData.name}</p>
              </div>
              <p>{item.docData.fees}</p>
              { item.cancelled 
              ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
              :item.isCompleted
              ? <p className='text-green-500 text-xs font-medium'>Completed</p> 
              : <img onClick={()=> cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
              }
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default AllApointment