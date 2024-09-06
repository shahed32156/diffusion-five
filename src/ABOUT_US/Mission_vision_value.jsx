import React from 'react'

import { GoGoal } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";

const Mission_vision_value = () => {
  return (
    
    <>
    
      <section className='text-white mt-20'>


            <div className='flex flex-col xl:flex-row justify-between gap-5 mx-3 lg:mx-8 xl:mx-16 2xl:mx-40'>
                    
                        <div className='relative'>

                                <img className='rounded-xl opacity-60 w-full h-[350px] sm:h-[550px]' src="./Images/value.jpg" alt="" />
                                
                                <div className='flex flex-col gap-4 absolute top-3 sm:top-1/4 left-3 sm:left-6 px-2'>
                                    <p className='text-gradient font-bold text-[18px] sm:text-xl'>Our Value</p>
                                    <h1 className='text-xl sm:text-2xl font-bold 2xl:w-[600px]'>Commitment to Excellence and Integrity in Every Aspect of Our Project</h1>
                                    <p className='md:w-[450px] 2xl:w-[550px]'>We are committed to integrity, creativity, and excellence in every project. Our values drive us to deliver high-quality web solutions and exceptional customer service, ensuring your success is our top priority.</p>
                                </div>

                                <div className='absolute top-0 right-0 bg-red-800 rounded-full py-2 px-2 duration-500 hover:rotate-180'>
                                                <IoDiamondOutline className='text-4xl text-white'/>
                                </div>
                        </div>

                        <div className='flex flex-col 2xl:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-col gap-5'>
                                <div className='bg-blue-200 bg-opacity-40 py-10 px-6 sm:w-[400px] rounded-xl relative'>

                                        <div className='flex flex-col gap-4'>
                                            <p className='text-[tomato] font-bold text-xl'>Our Vision</p>
                                            <h1 className='text-2xl font-bold'>Digitally transforming your business</h1>
                                            <p className=''>We digitally transform your business with innovative web design & develop and effective strategies. Our goal is to enhance your online presence and drive growth in the digital landscape.</p>
                                        </div>
                                        <div className='absolute top-0 right-0 bg-blue-950 rounded-full py-2 px-2 duration-500 hover:rotate-180'>
                                                <GoGoal className='text-4xl text-white'/>
                                        </div>
                                </div>

                                <div className='bg-green-200 bg-opacity-40 py-10 px-6 sm:w-[400px] rounded-xl relative'>

                                        <div className='flex flex-col gap-4'>
                                            <p className='text-[tomato] font-bold text-xl'>Our Mission</p>
                                            <h1 className='text-2xl font-bold'>Delivering Excellence in Web Design and Marketing</h1>
                                            <p className=''>Our mission is to deliver top-notch web design and marketing solutions that elevate your business. We focus on creating impactful digital experiences that drive growth and success.</p>
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
