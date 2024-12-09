import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-lg mt-5 px-6 md:px-10 lg:px-20'>

        {/* ----- Left Side ---- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30]'>
            <p className='text-2xl md:text-4xl lg:text-5xl text-black font-semibold leading-tight md:leading-tight'>
            Health Made  <span className='text-[#007E85]'>Simple</span>, <span className='text-[#6EAB36]'>Care</span> Made  <span className='text-[#6EAB36]'>Personal</span> 
            </p>
            <div className='mt-3 flex flex-col md:flex-row items-center gap-3 text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p className='text-black'>Simply browse through our extensive list of trusted doctors,<br/>
                schedule your appointment hassle-free.</p>
            </div>
            <a href="#speciality" className='flex item-center gap-2 bg-primary px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >
                Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
        </div>
        {/* ----  Right Side ---- */}
        <div className='md:w-1/2 relative flex justify-center items-center'>
            <img className='w-full  md:absolute h-auto rounded-lg' src={assets.groupdoctor} alt="" />
        </div>
    </div>
  )
}

export default Header