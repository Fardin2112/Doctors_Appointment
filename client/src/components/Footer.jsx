import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
        {/* ------ left side ---- */}
        <div className="w-full">
          <img className="mb-5 w-52" src={assets.frame2} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">Healthcare is your trusted partner for managing doctor appointments seamlessly. We provide an easy-to-use platform to book consultations, access healthcare services, and ensure your well-being with just a few clicks.</p>
        </div>
        {/* ----- center side ------- */}
        <div>
        <h2 className="text-xl font-semibold">COMPANY</h2>
        <ul className="flex flex-col pt-5 gap-2 text-gray-600">
            <li onClick={()=>{navigate('/'); scrollTo(0,0)}} className="hover:cursor-pointer">Home</li>
            <li onClick={()=>{navigate('/about');scrollTo(0,0)}} className="hover:cursor-pointer">About us</li>
            <li onClick={()=>{navigate('/contact');scrollTo(0,0)}} className="hover:cursor-pointer">Contact us</li>
            <li onClick={()=> {navigate('/privacy-policy');scrollTo(0,0)}} className="hover:cursor-pointer">Privacy policy</li>
            <li onClick={()=> {navigate('/term-condition');scrollTo(0,0)}} className="hover:cursor-pointer">Term & Condition</li>
        </ul>
        </div>
        {/* -------- right side --------- */}
        <div>
            <h2 className="text-xl font-semibold">GET IN TOUCH</h2>
            <p className="pt-5 text-gray-600">+91 6204590299</p>
            <p className="pt-2 text-gray-600">fardinalam2112@gmail.com</p>
        </div>
      </div>
      
      <div className="mt-8">
      <hr className=""/>
      <p className="text-sm py-5 text-center">Copyright 2024 @ Healthcare - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
