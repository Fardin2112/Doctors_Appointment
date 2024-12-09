import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className=''>
        <div className='text-center text-2xl pt-10 text-gray-500'>
            <p>Contact <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12 justify-center'>
          {/* --------- img -------- */}
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
          {/* ------------ about info -------  */}
          <div className='flex flex-col text-sm text-gray-500 gap-6 justify-center'>
            <p className='text-xl font-semibold text-gray-600'>OUR OFFICE</p>
            <p>Greater Noida<br/>beta-2, Gautam budh nagar, india</p>
            <p>Tel: (+91) 6204590299<br/>Email: healthcare4@gmail.com</p>
            <p className='text-xl font-semibold text-gray-600'>CAREERS AT HEALTHCARE</p>
            <p>Learn more about our teams and job openings.</p>
            <button className='border border-black w-40 px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
    </div>
    </div>
  )
}

export default Contact