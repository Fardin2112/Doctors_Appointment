import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
        {/* ------ left side ---- */}
        <div className="w-full">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {/* ----- center side ------- */}
        <div>
        <h2 className="text-xl font-semibold">COMPANY</h2>
        <ul className="flex flex-col pt-5 gap-2 text-gray-600">
            <li className="">Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
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
      <p className="text-sm py-5 text-center">Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
