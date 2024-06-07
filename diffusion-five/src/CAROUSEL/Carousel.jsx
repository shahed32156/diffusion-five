import React from 'react'

import { Link } from 'react-scroll';


const Carousel = () => {
  return (
    <>
    
    <div className='mt-20'>

        <img className='w-full h-[650px] opacity-65 mx-auto md:mx-0 background' src="./Images/cover.jpg" alt="" />
        
    </div>


    <div className='relative'>

    <div className='absolute bottom-[85px] px-3 md:px-10'>

<div className=' flex flex-col md:flex-row gap-10 justify-between items-center'>

    <div className=' flex flex-col gap-3'>

          <h1 className='text-2xl sm:text-3xl md:text-5xl md:w-[700px] md:leading-[60px] font-bold font-Oswald'>Welcome to our cutting-edge <span className='text-purple-700'>web platform</span> to take your business into new heights </h1>
          <p className='w-full md:w-[600px] font-medium text-justify'>We specialize in propelling businesses into the future with cutting-edge website services designed to elevate your online presence. Our expert team combines creativity with technology to deliver modern web solutions that meet your unique needs.
          <br /> From dynamic web design and seamless user experiences to robust web platforms and advanced SEO strategies, we ensure your digital footprint stands out in the crowded online landscape. We prioritize client collaboration, ensuring every project is infused with your vision and goals. Utilizing the latest industry trends and technologies, we create responsive, high-performance, high security, reliable and user friendly websites that drive engagement, conversion, and growth. 

          </p> 
          <div className='mt-3'>
          <a className='bg-purple-700 cursor-pointer md:hover:bg-purple-400 md:hover:transition md:hover:duration-[400ms] text-white text-[18px] py-3 px-10 rounded-md font-semibold'><Link to="query" smooth={true} duration={500}>Send your Query</Link></a>      
          </div>
    </div>

   

  </div>
      
  

</div>


    </div>
    
    </>
  )
}

export default Carousel
