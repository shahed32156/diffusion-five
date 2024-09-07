import React from 'react'
import { NavLink } from 'react-router-dom'

const Carousel = () => {
  return (
    
    <>
    
      <section style={{backgroundImage:'url("./Images/spider-net.jpg")', backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className=' pt-28 pb-10 lg:pt-24 xl:pt-36 xl:pb-16 bg-opacity-5 px-3 lg:px-10 xl:px-20 2xl:px-36'>


            <div className='flex flex-col gap-8 lg:flex-row justify-between items-center'>


                <div className='text-white flex flex-col gap-5'>
                    <h1 className='text-3xl md:text-5xl lg:text-3xl xl:text-[40px] 2xl:text-5xl font-bold  lg:w-[600px] xl:w-[700px]'>Welcome to our cutting-edge <span className='text-gradient font-extrabold'>web platform</span> to take your business into new heights</h1>
                    <p className='lg:w-[450px]'>We specialize in propelling businesses into the future with cutting-edge website services designed to elevate your online presence. Our expert team combines creativity with technology to deliver modern web solutions that meet your unique needs.</p>
                   <NavLink to="/contact_us"> <button className='bg-gradient-to-r hover:bg-gradient-to-l duration-500 hover:scale-105 to-[#3b82f6] from-[#34d399] h-[45px] w-[125px] rounded font-semibold text-[18px] flex justify-center items-center'>Learn More</button></NavLink>
                </div>

                <div className=''>

                        <img className='mx-auto -mt-14 lg:-mt-0 md:mx-0 h-[350px] md:h-[400px] w-full lg:h-[450px] lg:w-[650px] rounded-3xl' src="./Images/carousel.svg" alt="" />

                </div>


            </div>



      </section>
    
    </>
  )
}

export default Carousel
