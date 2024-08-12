import React from 'react'
import { BiMessageAlt } from "react-icons/bi";
import { PiCopyright } from "react-icons/pi";
import { PiDatabase } from "react-icons/pi";
import { LiaInfinitySolid } from "react-icons/lia";
import { GoGitPullRequestClosed } from "react-icons/go";


const Widget = () => {
    return (
        <div className='mt-10 sm:w-[32rem] sd:w-[42rem] md:w-[52rem] sm:mx-auto'>
            <section className=' text-center  sm:text-start font-poppins'>
                <div className='flex flex-col sm:flex-row sm:gap-8 sm:h-32 md:h-40 sd:gap-20 items-center pb-10 sm:pb-0 text-pink-500'>
                    <div className=' sm:bg-pink-500 sm:text-white sm:w-32 sm:h-32 md:w-40 md:h-40 sm:flex sm:justify-center sm:items-center'>
                        <div className=' w-fit p-5 border-2 rounded-full border-pink-500 sm:border-white'>
                            <GoGitPullRequestClosed className=' text-4xl ' />
                        </div>
                    </div>
                    <div>
                        <h4 className=' text-xl md:text-2xl font-bold pt-4'>No more designer anxiety</h4>
                        <p className=' md:text-xl'>Get your logo instantly, not in weeks.</p>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:gap-8 sm:h-32 md:h-40 sd:gap-20 items-center pb-10 sm:pb-0 text-green-500'>
                    <div className='md:ml-40 sm:bg-green-500 sm:text-white sm:w-32 sm:h-32 md:w-40 md:h-40 sm:flex sm:justify-center sm:items-center'>
                        <div className=' w-fit p-5 border-2 rounded-full border-green-500  sm:border-white'>
                            <BiMessageAlt className=' text-4xl' />
                        </div>
                    </div>
                    <div>
                        <h4 className=' text-xl md:text-2xl font-bold pt-4'>Need a tweak to your design?</h4>
                        <p className=' md:text-xl'>We'll do it for you, absolutely free</p>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:gap-8 sm:h-32 md:h-40 sd:gap-20 items-center pb-10 sm:pb-0 text-feature'>
                    <div className=' sm:bg-feature sm:text-white sm:w-32 sm:h-32 md:w-40 md:h-40 sm:flex sm:justify-center sm:items-center'>
                        <div className=' w-fit p-5 border-2 rounded-full border-feature  sm:border-white'>
                            <PiDatabase className=' text-4xl' />
                        </div>
                    </div>
                    <div>
                        <h4 className=' text-xl md:text-2xl font-bold pt-4'>No monthly charges</h4>
                        <p className=' md:text-xl'>Pay once, get access to our branding tools forever.</p>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:gap-8 sm:h-32 md:h-40 sd:gap-20 items-center pb-10 sm:pb-0 text-home'>
                    <div className='md:ml-40 sm:bg-home sm:text-white sm:w-32 sm:h-32 md:w-40 md:h-40 sm:flex sm:justify-center sm:items-center'>
                        <div className=' w-fit p-5 border-2 rounded-full border-home  sm:border-white'>
                            <PiCopyright className=' text-4xl' />
                        </div>
                    </div>
                    <div>
                        <h4 className=' text-xl md:text-2xl font-bold pt-4'>Full copyright included</h4>
                        <p className=' md:text-xl'>For use in commercial and personal projects</p>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:gap-8 sm:h-32 md:h-40 sd:gap-20 items-center pb-10 sm:pb-0 text-black'>
                    <div className=' sm:bg-black sm:text-white sm:w-32 sm:h-32 md:w-40 md:h-40 sm:flex sm:justify-center sm:items-center'>
                        <div className=' w-fit p-5 border-2 rounded-full border-black sm:border-white'>
                            <LiaInfinitySolid className=' text-4xl' />
                        </div>
                    </div>
                    <div>
                        <h4 className=' text-xl md:text-2xl font-bold pt-4'>Unlimited revisions</h4>
                        <p className=' md:text-xl'>Modify your logo at any time, even after purchase</p>
                    </div>
                </div>

                <div className=' text-center py-10 my-10'>
                    <h5 className=' text-3xl font-bold'>Create your unique logo design</h5>
                    <p className=' text-xl py-3 text-gray-400'>generate unlimited logos for free</p>
                    <button className=' rounded-full bg-feature text-white px-14 py-4 text-xl font-bold mt-10'>Create my logo</button>
                </div>
            </section>

        </div>
    )
}

export default Widget
