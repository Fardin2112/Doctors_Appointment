import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='bg-primary flex flex-col md:flex-row flex-wrap rounded-lg h-[600px] mt-5 px-6 md:px-10 lg:px-20'>

        {/* ----- Left Side ---- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30] bg-green-600'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
            Book Appointment <br/>With Trusted Doctors
            </p>
            <div className='flex '>
                <img src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors,<br/>
                schedule your appointment hassle-free.</p>
            </div>
            <a href="">
                Book appointment <img src={assets.arrow_icon} alt="" />
            </a>
        </div>
        {/* ----  Right Side ---- */}
        <div className='w-1/2 flex justify-center items-end'>
            <img className='w-[500px]' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header