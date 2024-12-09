import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function Banner() {
    const navigate = useNavigate();
    const {token,userData} = useContext(AppContext)
  return (
    <div className='flex flex-col md:flex-row bg-primary px-6 md:px-14 lg:px-12 rounded-md my-10 md:mx-10'>
        {/* ------- left side------ */}
        <div className='flex-1 justify-center gap-5 w-full py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl  text-white font-semibold'>
            <p className=' '>Book Appointment</p>
             <p className='mt-4'>With 100+ Trusted Doctors</p>
             </div>
             { (token && userData) 
              ? <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-white px-8 py-3 mt-6 hover:scale-105 transition-all w-44 rounded-full text-gray-700 text-sm md:text-md md:font-semibold'>Explore doctors</button>
              : <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='bg-white px-8 py-3 mt-6 hover:scale-105 transition-all w-44 rounded-full text-gray-700 text-sm md:text-md md:font-semibold'>Create account</button>
               }
            
        </div>
        {/* ------- right side -------- */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full pt-5 absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner