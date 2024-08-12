import React from 'react'
import { TfiFile } from "react-icons/tfi";
import { TfiLayoutCtaRight } from "react-icons/tfi"
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { TfiBook } from "react-icons/tfi";
import { TfiLayout } from "react-icons/tfi"
import { TfiLayoutTabV } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa"
import { VscBrowser } from "react-icons/vsc";
import { BiMinusBack } from "react-icons/bi";
import { BiLogoProductHunt } from "react-icons/bi";
import { BsRSquareFill } from "react-icons/bs";
import { PiPlanetFill } from "react-icons/pi";
import { RiExternalLinkFill } from "react-icons/ri";




const Main = () => {
    return (
        <div className=''>
            <section className='py-16 md:flex text-gray-300'>
                <div className=' font-poppins pb-5 flex flex-wrap justify-center gap-[5%] sm:w-[80%] sm:mx-auto sm:gap-[5%] md:justify-end md:pb-0'>
                    <p className=' px-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'>RQ</p>
                    <p className=' px-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'>TVM</p>
                    <p className=' px-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'>Hexa</p>
                </div>
                <div className='pl-[2%] font-poppins flex flex-wrap justify-center sm:w-[60%] sm:gap-[5%] sm:mx-auto sm:justify-around md:justify-start md:mx-0 md:flex-nowrap '>
                    <p className=' px-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'>APLJH</p>
                    <p className=' px-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'>OPK</p>
                </div>
            </section>
            <div className=' lg:flex pb-10'>
                <div className=' w-96 sm:w-[30rem] mx-auto'>
                    <img src="/assets/desk.jpg" className='w-96 h-96 sm:w-[30rem] sm:h-[30rem] lg:w-[22rem] lg:h-[22rem] lg:ml-40' alt="" />
                    <div className='hidden bg-emerald-300 w-40 h-40 items-center justify-center md:flex md:float-end md:-mr-40 lg:float-none'>
                        <PiPlanetFill className=' text-8xl text-white' />
                    </div>
                    <button className='hidden lg:flex gap-2 items-center px-7 py-2 rounded-full bg-feature font-medium float-end -mt-14'><RiExternalLinkFill size={20} />See example asset</button>
                </div>
                <section className='mx-auto w-96 md:w-[30rem]'>
                    <div className='md:w-[22rem]'>
                        <h2 className=' text-3xl font-bold pt-14'>Build a beautiful brand on time and on budget</h2>
                        <div className=' w-full h-4 bg-blue-400 opacity-30 -mt-2 mb-5'></div>
                        <p className=' text-lg mb-12'>Kickstart your business with thousands of <span className=' font-bold'>ready-to-use</span> design assets.</p>
                    </div>
                    <ul className=' flex flex-wrap gap-3 md:w-[40rem] lg:w-[20rem]'>
                        <li className=' w-44 md:w-52 font-medium flex items-center gap-2 text-xs sm:text-sm'><TfiFile /> Logo design files</li>
                        <li className=' w-44 md:w-52 font-medium flex items-center gap-2 text-xs sm:text-sm'><TfiLayoutCtaRight />Business card designs</li>
                        <li className=' w-44 md:w-52 font-medium flex items-center gap-2 text-xs sm:text-sm'>< TfiLayoutTabV />Letterhead templates</li>
                        <li className=' w-44 md:w-52 font-medium flex items-center gap-2 text-xs sm:text-sm'><TfiLayoutMediaCenterAlt />Presentation templates</li>
                        <li className=' w-44 md:w-52 font-medium flex items-center gap-2 text-xs sm:text-sm'>< FaRegUserCircle />Social profile icons</li>
                        <li className=' w-44 md:w-52 font-medium flex items-center gap-2 text-xs sm:text-sm'><BiMinusBack />Animated designs</li>
                        <li className=' w-44 md:w-52 font-medium flex items-center gap-2 text-xs sm:text-sm'>< VscBrowser />Social media designs</li>
                        <li className=' w-44 md:w-52 font-medium flex items-center gap-2 text-xs sm:text-sm'>< TfiBook />Brand guide</li>
                    </ul>
                    <button className=' lg:hidden flex gap-2 items-center px-7 py-2 rounded-full bg-feature text-sm font-medium my-6'><RiExternalLinkFill size={20} />See example asset</button>
                </section>
            </div>

            <section className=' sm:w-[30rem] sm:mx-auto md:w-[85%] md:flex md:gap-8 md:py-14'>
                <div className=' text-center py-16 md:w-[45%]'>
                    <h3 className=' text-2xl font-bold'>The only logo maker with free customization</h3>
                    <div className=' w-full h-4 bg-green-400 opacity-30 -mt-2 mb-5'></div>
                    <p>We'll personally help you customize your logo with the purchase of any package</p>
                </div>
                <div className='px-5 pb-20 flex flex-col md:w-[60%] gap-4'>
                    <div className=' flex gap-6'>
                        <img src="/assets/men2.jpg" className=' w-14 h-14 rounded-full' alt="" />
                        <p className=' bg-blue-500 text-white p-4 rounded-lg'>Can you put the icon on a hexagonal container, change the text to green, and also remove the tagline</p>
                    </div>
                    <div className=' flex gap-6'>
                        <div className=' bg-white p-4 rounded-lg flex items-center'>
                            <img src="/assets/p14.jpg" className=' w-36 h-24' alt="" />
                            <p className=' px-4'>Sure thing, how does this look?</p>
                        </div>
                        <img src="/assets/men3.jpg" className=' w-14 h-14 rounded-full' alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
