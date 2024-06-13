import React from 'react'


import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {


  
  return (
    <>
   

    <div className='mt-20 md:px-28'>

    <div className='text-center'>

    <h1 className='text-3xl font-serif font-semibold pb-3'><span className='text-purple-700'>Contact </span>with us</h1>
    
    </div>


   <div className='flex flex-col mx-3 md:flex-col lg:flex-row gap-4 justify-between items-center mt-10'>


        <div>

                <img className='mx-auto md:mx-0 w-[300px] border-[8px] border-purple-700 md:w-[400px] rounded-full' src="./Images/helpline.png" alt="" /> 

        </div>

        <div className='flex flex-col gap-3 text-xl md:text-3xl'>

        <div className='flex gap-2 items-center'>
                    
                    <p className='md:hover:text-purple-700'><GrLocation className='' /></p>
                    <p className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300'><p>Mirpur-10</p></p>

                  </div>

                  <div className='flex gap-2 items-center'>
                    
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfkBSBDDzPnqTWlMwmwWNFPvHDMBGkWkdgWtWwQRNJDzdRRnShzMbfRQxpfPvbVxFXXWM" target="_blank" rel="noopener noreferrer" className='md:hover:text-purple-700'><HiOutlineMail className='' /></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfkBSBDDzPnqTWlMwmwWNFPvHDMBGkWkdgWtWwQRNJDzdRRnShzMbfRQxpfPvbVxFXXWM" target="_blank" rel="noopener noreferrer" className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300'><p>diffusionfive@gmail.com</p></a>

                  </div>

                  <div className='flex gap-3 items-center'>
                    
                    <a href="#" className='md:hover:text-purple-700'><FaPhoneVolume className='' /></a>
                    <p className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300'><p>+8801741987566</p></p>

                  </div>

                  <div className='flex gap-2 items-center'>
                    
                    <a href="https://www.facebook.com/profile.php?id=61560502701437&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className='md:hover:text-purple-700'><FaFacebook className='' /></a>
                    <a href="https://www.facebook.com/profile.php?id=61560502701437&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300'><p>Facebook</p></a>

                  </div>

                  <div className='flex gap-2 items-center'>
                    
                    <a href="#" className='md:hover:text-purple-700'><RiWhatsappFill className='' /></a>
                    <a className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>WhatsApp</p></a>

                  </div>

                  <div className='flex gap-2 items-center'>
                    
                    <a href="https://www.linkedin.com/company/diffusion-five/" target='_blank' className='md:hover:text-purple-700'><FaLinkedin className='' /></a>
                    <a href="https://www.linkedin.com/company/diffusion-five/" target='_blank' className=' md:hover:text-purple-700 md:hover:scale-105 md:hover:transition-all md:hover:duration-300'><p>Linkedin</p></a>

                  </div>

        </div>


   </div>


   </div>
    
    </>
  )
}

export default Contact
