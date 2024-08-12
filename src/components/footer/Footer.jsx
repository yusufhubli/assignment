import React from 'react'

const Footer = () => {
    return (
        <footer className=' w-full  bg-footer'>
            <div className=' grid grid-cols-1 md:grid-cols-2 md:w-[70%] md:gap-x-10 md:mx-auto lg:w-[80%] lg:grid-cols-3 sm:w-fit sm:mx-auto sm:justify-center font-poppins relative text-white py-5 px-2'>
                <div className=' col-span-1 '>
                    <div className=' w-fit pt-12'>
                        <h1 className=" px-2 text-home">Create your logo </h1>
                        <div className='w-full h-3.5 bg-yellow-400 -mt-2 opacity-20'></div>
                    </div>
                    < p className='px-2 py-1 py text-[1rem] text-gray-500'>Try Grandmark for free,no account needed</p>
                </div>
                <div className=' col-span-1 md:order-3 lg:order-2 '>
                    <div className=' w-fit pt-12'>
                        <h1 className=" px-2 text-pink-500">Support</h1>
                        <div className='w-full h-3.5 bg-pink-500 -mt-2 opacity-20'></div>
                    </div>
                    <p className='px-2 py-1 py text-[1rem] text-gray-500'>Have question or need help? start here</p>
                </div>

                <div className=' col-span-1 md:order-5 lg:order-3'>
                    <div className=' w-fit pt-12'>
                        <h1 className=" px-2 text-green-400">Tools</h1>
                        <div className='w-full h-3.5 bg-green-400 -mt-2 opacity-20'></div>
                    </div>
                    <p className='px-2 py-1 py text-[1rem] text-gray-500'>Check out our free tools for color,font and logo design</p>
                </div>


               <div className=' md:hidden pt-12 flex gap-10 text-[1rem] font-bold text-gray-500'>
                  <span>Terms for service</span>
                  <span>privacy Policy</span>
                </div>

                    <span className='hidden md:block pt-12 text-[1rem] font-bold text-gray-500 md:col-span-1 md:order-2 lg:order-4'>Terms pf service</span>
                    <span  className=' hidden md:block pt-12 text-[1rem] font-bold text-gray-500 md:col-span-1 md:order-4 lg:order-5'>Privacy policy</span>
                     <div className=' col-span-1 md:order-6 lg:order-6'></div>
                <div className=' col-span-1 lg:col-span-3 md:order-7 pt-20 w-full flex flex-col justify-start'>
                    <div className=' bg-home w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14    ml-8 sm:ml-10 md:ml-12 lg:ml-14'></div>
                    <div className=' bg-pink-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14  ' ></div>
                </div>
                <div className=' col-span-1 lg:col-span-3 md:order-8 w-full flex flex-col items-end'>
                    <div className=' bg-green-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14    mr-8 sm:mr-10 md:mr-12 lg:mr-14'></div>
                    <div className=' bg-feature w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14  ' ></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
