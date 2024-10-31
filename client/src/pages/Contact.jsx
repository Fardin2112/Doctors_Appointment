import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className=''>
        <div className='text-center text-2xl pt-10 text-gray-500'>
            <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12 justify-center'>
          {/* --------- img -------- */}
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
          {/* ------------ about info -------  */}
          <div className='flex flex-col text-sm text-gray-500 gap-6 justify-center'>
            <p className='text-xl font-semibold text-gray-600'>OUR OFFICE</p>

            <div>
            <p>00000 Willms Station</p>
            <p>Suite 000, Washington, USA</p>
            </div>

            <div>
            <p>Tel: (000) 000-0000</p>
            <p>Email: greatstackdev@gmail.com</p>
            </div>

            <p className='text-xl font-semibold text-gray-600'>CAREERS AT PRESCRIPTO</p>

            <p>Learn more about our teams and job openings.</p>
            <button className='border w-40 py-4'>Explore Jobs</button>
          </div>
    </div>
    </div>
  )
}

export default Contact