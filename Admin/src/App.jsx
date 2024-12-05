import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import AllApointment from './pages/Admin/AllApointment';
import AddDoctor from './pages/Admin/AddDoctor';
import Doctors from './pages/Admin/Doctors';
import { Route, Routes } from 'react-router-dom';
import { DoctorContext } from './context/DoctorContext';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorProfile from './pages/Doctor/DoctorProfile';


function App() {

  const {aToken} = useContext(AdminContext);
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
     <ToastContainer/>
     <Navbar/>
     <div className='flex items-start'>
      <Sidebar/>
      <Routes>
        {/* Admin Route */}
        <Route path='/' element={<></>} />
        <Route path='/admin-dashboard' element={<Dashboard/>} />
        <Route path='/all-apointments' element={<AllApointment/>} />
        <Route path='/add-doctor' element={<AddDoctor/>} />
        <Route path='/doctor-list' element={<Doctors/>} />

        {/* Doctor Route */}
        <Route path='/doctor-appointments' element={<DoctorAppointments/>} />
        <Route path='/doctor-dashboard' element={<DoctorDashboard/>} />
        <Route path='/doctor-profile' element={<DoctorProfile/>} />

      </Routes>
     </div>
    </div>
  ) : 
  (
    <div className=''>
    <Login/>
    <ToastContainer/>
   </div>
  )
}

export default App