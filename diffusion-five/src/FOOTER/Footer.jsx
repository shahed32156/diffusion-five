
import React from 'react'

import Data from './data.json'
import Footer_set_data from './Footer_set_data';
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {

  let items = [];

items = Data.map((item, index) => <Footer_set_data key={index} title={item.title} 

num1={item.num1} num2={item.num2} num3={item.num3} num4={item.num4} num5={item.num5} /> )
    

  return (

    <div className=' bg-black py-10 mt-20 text-white px-8 md:px-20'>

              <div className='flex items-center text-justify flex-col gap-3 md:pl-20'>
                    
                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                    <img className='h-[60px] w-[60px]' src="./Images/logo.jpg" alt="" />
                    <h4 className='uppercase font-[Infographic] text-white text-[22px] font-bold'><span className=' text-purple-700'>diffusion</span>five</h4>
                    </div>
                    <h2 className='md:text-[18px] md:w-[400px]'>Thank you so much for visiting our website.
                    Trust “Diffusion Five” to transform your digital presence and take your business and profile to new heights.
                    </h2>
                 </div>


         <div className='mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20'>


                 {items}

                 <div className='flex flex-col gap-3 md:mx-auto'>
                 <h4 className='text-[20px] font-bold md:border-none border-b-4 border-white rounded-lg pb-2'>Connect Us</h4>
               
                <div className='flex flex-col gap-3'>

                  <div className='flex gap-2 items-center'>
                    
                    <a href="https://www.facebook.com/profile.php?id=61560502701437&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className='md:hover:text-purple-700'><FaFacebook className='text-[25px]' /></a>
                    <a href="https://www.facebook.com/profile.php?id=61560502701437&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300'><p>Facebook</p></a>

                  </div>

                  <div className='flex gap-2 items-center'>
                    
                    <a href="#" className='md:hover:text-purple-700'><RiWhatsappFill className='text-[25px]' /></a>
                    <a className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>WhatsApp</p></a>

                  </div>

                  <div className='flex gap-2 items-center'>
                    
                    <a href="https://www.linkedin.com/company/diffusion-five/" target='_blank' className='md:hover:text-purple-700'><FaLinkedin className='text-[25px]' /></a>
                    <a href="https://www.linkedin.com/company/diffusion-five/" target='_blank' className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300'><p>Linkedin</p></a>

                  </div>
                
                </div>
                 </div>

                 <div className='flex flex-col gap-3 md:mx-auto'>
                 <h4 className='text-[20px] font-bold md:border-none border-b-4 border-white rounded-lg pb-2'>Contact Us</h4>
               
                <div className='flex flex-col gap-3'>

                  <div className='flex gap-2 items-center'>
                    
                    <p className='md:hover:text-purple-700'><GrLocation className='text-[25px]' /></p>
                    <p className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300'><p>Mirpur-10</p></p>

                  </div>

                  <div className='flex gap-2 items-center'>
                    
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfkBSBDDzPnqTWlMwmwWNFPvHDMBGkWkdgWtWwQRNJDzdRRnShzMbfRQxpfPvbVxFXXWM" target="_blank" rel="noopener noreferrer" className='md:hover:text-purple-700'><HiOutlineMail className='text-[25px]' /></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfkBSBDDzPnqTWlMwmwWNFPvHDMBGkWkdgWtWwQRNJDzdRRnShzMbfRQxpfPvbVxFXXWM" target="_blank" rel="noopener noreferrer" className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300 text-[10px] md:text-[16px]'><p>diffusionfive@gmail.com</p></a>

                  </div>

                  <div className='flex gap-3 items-center'>
                    
                    <a href="#" className='md:hover:text-purple-700'><FaPhoneVolume className='text-[22px]' /></a>
                    <p className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300 text-[14px] md:text-[16px]'><p>+8801741987566</p></p>

                  </div>
                
                </div>
                 </div>

          </div>

          <div className='mt-16 text-center font-semibold'>
          <p className='border-t-[1px] border-t-white pt-4'>Copyright © 2024 <span className='uppercase font-[Infographic] text-white font-bold'><span className=' text-purple-700'>diffusion</span>five</span> All rights reserved</p>  
          </div>      

    </div>
  )
}

export default Footer
