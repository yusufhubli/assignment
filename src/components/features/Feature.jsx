import React from 'react'

const Feature = () => {
    return (
        <div>
            <div className=' bg-feature text-white font-poppins pt-10 pb-10 md:pb-28 lg:h-[30rem]'>

                <section className='pt-8 font-poppins flex flex-col items-center md:grid md:grid-cols-4 md:px-2 md:w-[80%] md:gap-x-8 md:mx-auto lg:w-[85%] text-center text-[1.1rem]'>
                    <div className=' text-center w-64 mx-auto md:col-span-3 lg:col-span-4 md:w-full'>
                        <h2 className=' text-2xl font-bold pb-3 '>Instantly customize and export</h2>
                        <p>Right in your browser, no designer or software needed</p>
                    </div>
                    <img src="/assets/edit.jpg" className='w-full pt-8 h-80 sm:w-96 sm:h-96 md:w-full md:h-[25rem] md:pt-5 md:col-span-3 md:row-span-3 lg:col-span-2 lg:order-3' alt="" />
                    <div className='pt-8 md:text-start lg:col-span-1 lg:order-2'>
                        <h3 className=' uppercase font-bold px-3 md:px-0'>Export to all major formats</h3>
                        <p className=' text-black text-[0.9rem]'>Including SVG, EPS, PNG and PDF</p>
                    </div>
                    <div className='pt-8 md:text-start col-span-1 lg:order-3'>
                        <h3 className=' uppercase font-bold px-3 md:px-0'>Adjust text and image size</h3>
                        <p className=' text-black text-[0.9rem]'>Perfecly sized for web and print</p>
                    </div>
                    <div className='pt-8 md:text-start lg:col-span-1 lg:order-4'>
                        <h3 className=' uppercase font-bold px-3 md:px-0'>Easily edit and customize</h3>
                        <p className=' text-black text-[0.9rem]'>Double click to edit text</p>
                    </div>
                    <div className='hidden lg:block lg:col-span-1 lg:order-5'></div>
                    <div className='hidden lg:block lg:col-span-1 lg:order-6'></div>
                    <div className=' w-40 h-40 hidden lg:block bg-red-300 lg:col-span-4 ml-[74.2%] lg:order-8'><img src="/assets/p11.jpg" className=' w-full h-full object-cover' alt="" /></div>
                    <div className=' w-40 h-40 ml-32 -mb-1.5 hidden lg:block bg-home lg:col-span-1 lg:order-7'></div>
                </section>
            </div>
        </div>
    )
}

export default Feature
