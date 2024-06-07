import React from 'react'

import { FaHandshakeAngle } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";

const Choose_us = () => {

  return (

    <>
    

    <div className='mt-20 text-center md:text-start md:mx-32'>

             <h1 className='text-[20px] text-purple-700 font-mono font-extrabold pb-3'>Why you choose us?</h1>

        </div>

      <div className='flex flex-col gap-3 md:flex-row mx-3 md:mx-28 justify-between items-center mt-4'>
 

           <div className='flex flex-col gap-3 justify-center mx-3'>

                 <h1 className='w-full md:w-[600px] text-xl md:text-4xl font-bold'>We assure you complete satisfaction with our services, offering unlimited revisions and lifelong free support.</h1> 
                 <p className='w-full md:w-[520px] text-justify'>Alongside our commitment to your satisfaction, we offer boundless revisions to guarantee that every detail of your project aligns with your requirements. Whether it involves refining your website's design, optimizing your digital marketing tactics, or perfecting your e-commerce setup, we're dedicated to working tirelessly until you're completely content with the outcome.

                    But that's not all. With our ongoing lifetime support, you can trust that our proficient team will be by your side throughout your journey. We're prepared to provide lifetime assistance for any service you acquire from us.</p>
                 <div>

                    <div className='mt-4 grid gap-6 grid-cols-2 md:grid-cols-3'>
                    
                        <div className='flex gap-2 flex-col justify-center items-center'>
                            <FaHandshakeAngle className='text-5xl text-purple-700' />
                            <p className='text-[20px] text-center font-medium'>100% Satisfaction</p>
                        </div>

                        <div className='flex gap-2 flex-col justify-center items-center'>
                            <FaNotesMedical className='text-5xl text-purple-700' />
                            <p className='text-[20px] text-center font-medium'>Unlimited Revision</p>
                        </div>

                        <div className='flex gap-2 flex-col justify-center items-center'>
                            <ImHeadphones className='text-5xl text-purple-700' />
                            <p className='text-[20px] text-center font-medium'>Lifetime Support</p>
                        </div>
                    
                    </div> 

                    </div>  
           
           </div>

                  
           <div>

              <img className='mx-auto md:mx-0 w-[300px] border-[8px] border-purple-700 md:w-[400px] rounded-full' src="./Images/about2.png" alt="" /> 
              
            
           </div>  
          
      </div>   
    
    
    
    </>

  )
}

export default Choose_us
