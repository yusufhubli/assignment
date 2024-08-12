import React, { useState } from 'react'
import { RxCross2,RxCaretDown } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { MdOutlineLogin } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";

const Sidebar = ({togMenu}) => {
  
  return (
    <div className=' absolute right-0 transition ease-in-out w-64 h-screen bg-sidebar font-poppins text-white px-3'>
      <div className=' flex items-center justify-between bg-[#1A2334] py-3 px-3'>
        <h1 className=' text-2xl uppercase font-bold text-gray-100'><span className=' text-feature'>Grand</span>mark</h1>
        <RxCross2 onClick={()=>togMenu(false)} className=' text-gray-100 text-2xl'/>
      </div>
      <div className=' flex items-center justify-between py-4 px-3 text-feature'>
        <h1 className=' flex items-center gap-1 hover:text-white'>Menu <RxCaretDown/></h1>
        <div className=' bg-[#3B4C67] p-3 rounded-full'>
        <BsThreeDots className=' text-feature text-xl'/>
        </div>
      </div>
      <ul className='px-3 text-feature transi'>
        <li className=' hover:text-white flex items-center justify-between py-3.5'><p>pricing</p><div className=' bg-[#3B4C67] p-3 rounded-full'> <FiDollarSign className=' text-feature text-xl'/></div> </li>
        <li className=' hover:text-white flex items-center justify-between py-3.5'><p>Tools</p> <div className=' bg-[#3B4C67] p-3 rounded-full'><LuBox className=' text-feature text-xl'/></div> </li>
        <li className=' hover:text-white flex items-center justify-between py-3.5'><p>Support</p><div className=' bg-[#3B4C67] p-3 rounded-full'> <IoMailOutline className=' text-feature text-xl'/> </div></li>
        <li className=' hover:text-white flex items-center justify-between py-3.5'><p>Login</p><div className=' bg-[#3B4C67] p-3 rounded-full'> <MdOutlineLogin className=' text-feature text-xl'/></div> </li>
      </ul>
    </div>
  )
}

export default Sidebar
