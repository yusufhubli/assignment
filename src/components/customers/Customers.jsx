import React from 'react'

const Customers = () => {
  return (
    <div className='md:mt-44 grid grid-cols-2 sm:w-[32rem] sm:mx-auto sm:grid-cols-3 sd:w-[42rem] sd:grid-cols-4 md:w-[52rem] md:grid-cols-5 py-10'>
      <div className=' col-span-2 sm:col-span-3 sd:order-1 sd:col-span-2 row-span-2 md:col-span-3 px-10 text-center'>
        <h4 className='text-3xl font-bold pt-14'>Latest customer creations</h4>
        <div className=' w-full h-4 bg-pink-400 opacity-30 -mt-2 mb-5'></div>
        <p className='text-lg mb-12'>See why over 138,794 users have created a logo with Grandmark.com</p>
      </div>
      <div className=' h-[22rem] col-span-2 sm:col-span-3 row-span-2 sd:order-2 sd:col-span-2'><img src="/assets/p4.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[22rem] md:h-[33rem] col-span-2 row-span-2 md:col-span-3 md:row-span-3 sd:order-6 md:order-7'><img src="/assets/main.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[11rem] col-span-1 sd:order-3'><img src="/assets/p1.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[11rem] col-span-1 sd:order-4'><img src="/assets/p2.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[11rem] col-span-1 sd:order-9 md:order-5'><img src="/assets/p3.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[22rem] col-span-1 sm:col-span-2 sm:row-span-2 sd:order-5 md:order-6'><img src="/assets/p5.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[11rem] col-span-1 sd:order-8'><img src="/assets/p6.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[22rem] col-span-1 sd:order-7 sm:col-span-2 sm:row-span-2'><img src="/assets/p7.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[11rem] col-span-1 sd:order-10'><img src="/assets/p8.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[11rem] col-span-1 sd:order-11'><img src="/assets/p10.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[11rem] col-span-1 sd:order-12'><img src="/assets/p15.jpg" className=' w-full h-full object-cover' alt="" /></div>
      <div className=' h-[11rem] col-span-1 sd:hidden md:block md:order-last'><img src="/assets/p12.jpg" className=' w-full h-full object-cover' alt="" /></div>
    </div>
  )
}

export default Customers
