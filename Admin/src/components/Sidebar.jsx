import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'

function Sidebar() {

    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)

  return (
    <div className='min-h-screen border-r bg-white pl-3 flex-shrink-0'>
        {
            aToken && <ul className='text-[#515151] mt-5'>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 mid:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/admin-dashboard'}>
                  <img className='w-6' src={assets.home_icon} alt="" />
                  <p className='hidden md:block pl-2'>Dashboard</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 mid:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/all-apointments'}>
                  <img className='w-6' src={assets.appointment_icon} alt="" />
                  <p className='hidden md:block pl-2'>Appointments</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 mid:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/add-doctor'}>
                  <img className='w-6' src={assets.add_icon} alt="" />
                  <p className='hidden md:blockpl-2'>Add Doctor</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 mid:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-list'}>
                  <img className='w-6' src={assets.people_icon} alt="" />
                  <p className='hidden md:block pl-2'>Doctors List</p>
                </NavLink>
            </ul>
        }
        {
            dToken && <ul className='text-[#515151] mt-5'>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 mid:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-dashboard'}>
                  <img className='w-6' src={assets.home_icon} alt="" />
                  <p className='hidden md:block pl-2'>Dashboard</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 mid:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-appointments'}>
                  <img className='w-6' src={assets.appointment_icon} alt="" />
                  <p className=' hidden md:block pl-2'>Appointments</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 mid:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-profile'}>
                  <img className='w-6' src={assets.people_icon} alt="" />
                  <p className='hidden md:block pl-2'>Profile</p>
                </NavLink>
            </ul>

        }
    </div>
  )
}

export default Sidebar