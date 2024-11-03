import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {
  const {doctors} = useContext(AppContext)
  return (
    <div className='mt-10 w-full'>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointment</p>
      <div className='flex flex-col gap-2 mt-2'>
        {
          doctors.slice(0,2).map((item,index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
              <img className='w-32 bg-indigo-50' src={item.image} alt="" />
              </div>
                {/* ---- doctor info ----- */}
                <div className='flex-1 text-sm text-zinc-600'>
                   <p className='text-neutral-800 font-medium mt-1'>{item.name}</p>
                   <p>{item.speciality}</p>
                   <p className='text-sm'>{item.address.line1}</p>
                   <p className='text-sm'>{item.address.line2}</p>
                   <p>{item.address.lin2}</p>
                   <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium' >Date & Time:</span>25 july,2024 | 8:30 PM</p>
                </div>
                <div></div>
                {/* ---- button ---- */}
                <div className='flex flex-col justify-end gap-2'>
                    <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>pay online</button>
                    <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded  hover:bg-red-600 hover:text-white transition-all duration-300'>cancel appointment</button>
                </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment