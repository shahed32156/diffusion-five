import React from 'react'

import { GoGoal } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";

const Mission_vision_value = () => {
  return (
    
    <>
    
      <section className='text-white mt-20'>


            <div className='flex flex-col xl:flex-row gap-5 lg:gap-10 justify-center mx-3'>
                    
                        <div className='relative'>

                                <img className='rounded-xl opacity-60 w-full h-[350px] sm:h-[550px]' src="./Images/value.jpg" alt="" />
                                
                                <div className='flex flex-col gap-4 absolute top-3 sm:top-1/4 left-3 sm:left-6 px-2'>
                                    <p className='text-gradient font-bold text-[18px] sm:text-xl'>Our Value</p>
                                    <h1 className='text-xl sm:text-2xl font-bold 2xl:w-[600px]'>Unwavering Dedication to Quality and Integrity in Our Projects</h1>
                                    <p className='md:w-[450px] 2xl:w-[550px]'>At the core of our approach is a steadfast commitment to integrity, innovation, and excellence. We strive to deliver superior web solutions and outstanding customer service, ensuring that your success remains our primary focus.</p>
                                </div>

                                <div className='absolute top-0 right-0 bg-red-800 rounded-full py-2 px-2 duration-500 hover:rotate-180'>
                                                <IoDiamondOutline className='text-4xl text-white'/>
                                </div>
                        </div>

                        <div className='flex flex-col 2xl:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-col gap-5'>
                                <div className='bg-blue-200 bg-opacity-40 py-10 px-6 sm:w-[400px] rounded-xl relative'>

                                        <div className='flex flex-col gap-4'>
                                            <p className='text-[tomato] font-bold text-xl'>Our Vision</p>
                                            <h1 className='text-2xl font-bold'>Revolutionizing Your Business with Digital Solutions</h1>
                                            <p className=''>We elevate your business with cutting-edge web design, development, and strategic solutions. Our focus is on strengthening your online presence and driving sustainable growth in the digital marketplace.</p>
                                        </div>
                                        <div className='absolute top-0 right-0 bg-blue-950 rounded-full py-2 px-2 duration-500 hover:rotate-180'>
                                                <GoGoal className='text-4xl text-white'/>
                                        </div>
                                </div>

                                <div className='bg-green-200 bg-opacity-40 py-10 px-6 sm:w-[400px] rounded-xl relative'>

                                        <div className='flex flex-col gap-4'>
                                            <p className='text-[tomato] font-bold text-xl'>Our Mission</p>
                                            <h1 className='text-2xl font-bold'>Providing Exceptional Web Solutions</h1>
                                            <p className=''>Our mission is to provide premier web design and marketing solutions that propel your business forward. We specialize in crafting compelling digital experiences that foster growth and achieve lasting success.</p>
                                        </div>

                                        <div className='absolute top-0 right-0 bg-blue-950 rounded-full py-2 px-2 duration-500 hover:rotate-180'>
                                                <GoGoal className='text-4xl text-white'/>
                                        </div>
                                </div>
                        </div>

            </div>


      </section>
    
    </>
  
)
}

export default Mission_vision_value
