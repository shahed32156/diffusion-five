import React from 'react'

import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Empower = () => {
  return (
    <>
    
    
    <div className='bg-[#06062f] mt-20 py-16'>
            <div className='text-white flex flex-col lg:flex-row gap-5 items-center justify-between mx-3 2xl:mx-36'>

                <h1 className='text-[26px] lg:w-[450px] font-bold'>Empowering Your Business with Innovative Web Solutions</h1>
                <p className='lg:w-[650px]'>At our web agency, we empower your business with cutting-edge web solutions tailored to your needs. From custom website design and development to strategic digital marketing, we provide everything you need to thrive online.</p>
            </div>

            <section className='text-white mt-10'>

            {/* Total start */}
            <div className='flex flex-col 2xl:flex-row items-center gap-5 justify-between mx-3 2xl:mx-36'>

            {/* 1st part start */}


            <div className='flex flex-col gap-5'>

                <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>

                    <div className='flex justify-between items-center w-full 2xl:w-[600px] bg-[#1b8d74] bg-opacity-80 h-[350px] pl-4 rounded-2xl'>

                            <div className='flex flex-col gap-3'>
                                <h3 className='font-semibold text-2xl'>Timely and Transparent Communication</h3>
                                <p className='w-[200px] sm:w-[300px] lg:w-[250px] text-gray-300 text-[15px]'>Experience timely and transparent communication with us, ensuring you are always informed and confident throughout every stage of your project.</p> 
                            </div>

                            <div>
                                <img className='h-[200px] md:h-[300px] 2xl:h-[250px] 2xl:w-[350px]' src="./Images/pc.png" alt="" />
                            </div>

                    </div>

                    <div className='flex justify-between items-center w-full 2xl:w-[350px] bg-[#434242] bg-opacity-80 h-[350px] pl-4 rounded-2xl'>

                            <div className='flex flex-col gap-3'>
                                <h3 className='font-semibold text-2xl'>Boost Traffic & Sales</h3>
                                <p className='w-[200px] text-gray-300 text-[15px]'>Drive more traffic and increase sales with our targeted strategies designed to maximize your online presence and conversion rates.</p> 
                            </div>

                            <div>
                                <img className='h-[250px] w-[450px]' src="./Images/rocket.png" alt="" />
                            </div>

                    </div>



                </div>

                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>

                    <div className='flex items-center justify-center w-full 2xl:w-[350px]  bg-[#d14c34] bg-opacity-80 h-[350px] px-4 rounded-2xl'>

                            <div className='flex flex-col items-center gap-3'>
                                <h1 className='text-5xl font-extrabold'>4.9+</h1>
                                <h3 className='font-semibold text-2xl'>Client Ratings</h3>
                                <div className='flex items-center justify-center gap-2 text-2xl text-[yellow]'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                                <p className='text-center text-gray-300 text-[15px]'>Client ratings highlight our dedication to quality and customer satisfaction.</p> 
                            </div>

                    </div>

                    <div className='flex justify-between items-center w-full 2xl:w-[600px] bg-[#156c78] bg-opacity-80 h-[350px] pl-4 rounded-2xl'>

                            <div className='flex flex-col gap-3'>
                                <h3 className='font-semibold text-2xl lg:w-[300px]'>Responsive and Scalable Solutions</h3>
                                <p className='w-[200px] text-gray-300 text-[15px]'>Responsive and scalable solutions designed to grow with your business needs.</p> 
                            </div>

                            <div>
                                <img className='h-[250px] w-[200px]' src="./Images/mobile-app.png" alt="" />
                            </div>

                    </div>



                </div>



            </div>


            {/* 1st part end */}

            {/* 2nd part start */}

            <div className='bg-gradient-to-b from-pink-600 to-pink-500 py-10 2xl:py-[208px] px-6 w-full 2xl:w-[300px] rounded-2xl'>


                    <div className='flex items-center justify-center'>

                            <div className='flex flex-col items-center gap-3'>
                                <div className='flex justify-center items-center py-4 px-4 h-[65px] w-[65px]  bg-black rounded-full'>
                                    <FaPhone className='text-4xl font-extrabold '/>
                                </div>
                                
                                <h3 className='font-semibold text-2xl'>Premium Support</h3>
                                <h3 className='font-semibold text-2xl'>+880174198566</h3>
                                
                                <p className='text-center text-[15px]'>Experience premium support with our dedicated team, ready to assist you at every step.</p> 
                                <button className=' mt-4 bg-black duration-500 hover:scale-105 h-[40px] w-[120px] rounded-lg'>
                                    Call Now
                                </button>
                            </div>

                    </div>


            </div>


            {/* 2nd part end */}




            </div>

            {/* Total end */}

            </section>
    </div>
    
    
    
    </>
  )
}

export default Empower
