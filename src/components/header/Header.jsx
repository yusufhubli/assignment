import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { CiPickerHalf } from "react-icons/ci";
import Weather from '../Weather';
import Slider from '../Slider';
import Sidebar from '../Sidebar';

const Header = () => {
    const [tog,setTog] = useState(false)
    return (
        <div className='relative'>
           {tog && <Sidebar togMenu={setTog}/>}
            <section className=' bg-home h-[40rem] px-3 pb-28 font-poppins'>
                <div className=' flex justify-between items-center py-6 md:px-16 text-white'>
                    <Weather />
                    <AiOutlineMenu onClick={()=>setTog(true)} className=' text-end text-4xl' />
                </div>
                <h1 className=' font-poppins font-black uppercase text-[4.3rem] sm:text-[7rem] leading-none md:flex md:justify-center md:py-12'><span className=' text-white'>Grand</span> <span className='flex'>Mark<CiPickerHalf className=' text-4xl sm:text-5xl' /></span></h1>
                <h4 className='pt-9 font-semibold text-[1.2rem] sm:text-[2rem] text-gray-800 md:text-center'>Create a unique,professional logo for your business</h4>
                <p className='pt-5 font-thin sm:text-lg opacity-60 md:text-center'>Kickstart your brand with business card designs, social media graphics, app icons, letter heads and more</p>
                <div className=' flex justify-center pt-10'>
                    <button className=' rounded-full bg-gray-800 text-white px-8 py-3.5 font-bold'>Create my logo</button>
                </div>
            </section>
            <section className=' h-auto'>
                {/* <div className=' w-full h-80 bg-gradient-to-r from-white via-yellow-200 to-home'>
                </div> */}
                <Slider />
            </section>
        </div>
    )
}

export default Header
