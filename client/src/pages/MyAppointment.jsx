import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MyAppointment = () => {

  const navigate = useNavigate()

  const {backendUrl, token, getDoctorData} = useContext(AppContext)
  const [appointments, setAppointments] = useState()

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  const slotDateFormate = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0]+ " "+ months[Number(dateArray[1])-1] + " "+ dateArray[2]
  }

  const listAppointment = async() => {

    try {
      const {data} = await axios.get(backendUrl+'/api/user/appointments',{headers:{token}})
      if (data.success) {
        console.log(data.appointment)
        setAppointments(data.appointment.reverse())
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }
  // cancel appointment
  const cancelAppointmnet = async(appointmentId) => {
    
    try {
      const {data} = await axios.post(backendUrl+'/api/user/cancel-appointment',{appointmentId},{headers:{token}})
      if (data.success){
        toast.success(data.message)
        listAppointment()
        getDoctorData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  const initPay = (order) => {
    console.log("order",order)
    const options = {
      key : import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount : order.amount,
      currency : order.currency,
      name : 'Appointment Payment',
      description : 'Appointment Payemnt',
      order_id : order.id,
      receipt : order.receipt,
      handler : async(responce) => {
       // console.log(responce);
        try {
          const {data} = await axios.post(backendUrl+'/api/user/verifyRazorpay',responce,{headers:{token}})
          if (data.success){
            console.log("af order",order)
            listAppointment()
            navigate('/my-appointments ')
          } else {
            toast.error(data.message)
            console.log(data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message)
        }
      } 
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
   
  }

// razor pay logic
const appointmentRazorpay =async (appointmentId) => {
    try {
      const {data} = await axios.post(backendUrl + '/api/user/payment-razorpay',{appointmentId},{headers:{token}})

      if (data.success) {
        initPay(data.order)
      } else {
        toast.error(data.message)
        console.log(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
} 

  useEffect(()=>{
    listAppointment()
  },[token])
  return (
    <div className='mt-10 w-full'>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointment</p>
      <div className='flex flex-col gap-2 mt-2'>
        {
         appointments && appointments.map((item,index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
              <img className='w-32 bg-indigo-50' src={item.docData.image} alt="" />
              </div>
                {/* ---- doctor info ----- */}
                <div className='flex-1 text-sm text-zinc-600'>
                   <p className='text-neutral-800 font-medium mt-1'>{item.docData.name}</p>
                   <p>{item.docData.speciality}</p>
                   <p className='pt-2 text-sm text-neutral-700 font-medium'>Address</p>
                   <p className='text-sm'>{item.docData.address.line1}</p>
                   <p className='text-sm'>{item.docData.address.line2}</p>
                   <p>{item.docData.address.lin2}</p>
                   <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium' >Date & Time:</span>{slotDateFormate(item.slotDate)} | {item.slotTime}</p>
                </div>
                <div></div>
                {/* ---- button ---- */}
                <div className='flex flex-col justify-end gap-2'>
                  {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 rounded text-stone-500 bg-indigo-50'>Paid</button>}
                  {!item.cancelled && !item.payment && !item.isCompleted &&<button onClick={()=>appointmentRazorpay(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>pay online</button>}
                  {!item.cancelled && !item.isCompleted && <button onClick={()=>cancelAppointmnet(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded  hover:bg-red-600 hover:text-white transition-all duration-300'>cancel appointment</button>}
                  {item.cancelled && !item.isCompleted && <button className='text-sm text-white text-center sm:min-w-48 py-2 border rounded  bg-red-600'>Appointment Cancelled</button>}
                  {item.isCompleted && <button className='text-sm text-white text-center sm:min-w-48 py-2 border rounded  bg-green-500'>Completed</button>}
                </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment