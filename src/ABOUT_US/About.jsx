import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    
    <>
    
    
    <section className='text-white mt-20'>

            <div className='flex flex-col lg:flex-row items-center gap-4 justify-between mx-3 lg:mx-10 xl:mx-28 2xl:mx-56'> 

                        <div className='border-2 border-gray-600 py-4 px-4 rounded-2xl lg:w-[480px]'>

                                <img className='lg:h-[350px] lg:w-[450px] rounded-2xl mx-auto lg:mx-0' src="./Images/about.png" alt="" />

                        </div>

                        <div className='flex flex-col gap-4'>

                                <h3 className='text-xl text-center lg:text-start font-bold'>About Our <span className='text-gradient'>Company</span></h3>
                                <h1 className='text-3xl text-center lg:text-start md:text-4xl w-full lg:w-[500px] xl:w-[550px] font-semibold'>We have been highly effective in website design, development, and digital marketing as a startup company.</h1>
                                <p className='lg:w-[400px] text-center lg:text-start xl:w-[450px]'>As a startup company, we have excelled in website design, development, and digital marketing. Our expertise and company culture have consistently resulted in satisfied customers. Our objective is to craft personalized customer experiences tailored to individual needs and ideas. We are dedicated to long-term partnerships, responsive feedback, and providing high-quality services.</p>
                               <NavLink to="/about_us"> <button className='mt-3 mx-auto lg:mx-0 bg-gradient-to-r hover:bg-gradient-to-l duration-500 hover:scale-105 to-blue-500 from-pink-500 h-[45px] w-[150px] rounded-lg'>
                                 Discover More
                                </button></NavLink>
                        </div>
            </div>

    </section>

    </>
  )
}

export default About
