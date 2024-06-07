
import React, { useState, useRef } from 'react'

import emailjs from '@emailjs/browser'
import Swal from'sweetalert2';



const Book = () => {  

     const form = useRef();

     const [project, setProject] = useState();
     const [name, setName] = useState();
     const [email, setEmail] = useState();


    const handleName = (e) => {


        console.log(e.target.value);

    }

    const handleEmail = (e) => {


        console.log(e.target.value);

    }

    const handleProject = (e) => {


            console.log(e.target.value);
        

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setProject(project);
        setName(name);
        setEmail(email);

        Swal.fire({
        title: "Book Now",
        text: "Successfully booked",
        icon: "success"
        });

        emailjs
        .sendForm('service_792fs4e', 'template_u6xr62t', form.current, {
          publicKey: 'wG2TB6JzfeU6u3ZPq',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      
        
    }

    const handleReset = () => {


     document.getElementById("input2").value="";
     document.getElementById("input3").value="";   
    }
    
  return (

    <>
    
    <div className='mt-20 text-center'>

            <h1 className='text-3xl font-serif font-extrabold pb-3'><span className='text-purple-700'>Book </span>Now</h1>

   </div>
    
    <div className='mt-6 px-3'>

        <form ref={form} onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4'>
        
  
            <div className='relative flex items-center'>
                <select className='w-[350px] h-[50px] pr-2 focus:outline-none bg-purple-500 text-white border-2 border-purple-700 pl-2 rounded-lg md:w-[400px]' required type="text"  
                name="message" id="input1" onChange={handleProject}> 
                
                <option required value={project} className=' bg-white text-black'>Select your project</option>
                <option required value={project} className=' bg-white text-black'>Small</option>
                <option required value={project} className=' bg-white text-black'>Medium</option>
                <option value={project} className=' bg-white text-black'>Big</option>
                
                
                </select>

                

            </div>


            <div>
                <input className='w-[350px] h-[50px] focus:outline-none border-2 border-purple-700 pl-2 rounded-lg md:w-[400px]' required type="text" 
                name="name" id="input2" onChange={handleName} value={name} placeholder='Enter your name' />
            </div>

            <div>
                <input className='w-[350px] h-[50px] input focus:outline-none border-2 border-purple-700 pl-2 rounded-lg md:w-[400px]' required type="email" 
                name="email" id="input3" onChange={handleEmail}  value={email} placeholder='Enter your email' />
            </div>




            <div className='flex gap-4 justify-center items-center'>
                
               <button className='bg-purple-500 py-2 text-[18px] rounded-md font-semibold w-[150px] text-white md:hover:bg-purple-300'>Book</button>
               
              <a className='bg-purple-500 cursor-pointer text-center py-2 text-[18px] rounded-md font-semibold w-[150px] text-white md:hover:bg-purple-300' onClick={handleReset}>Reset</a>
            </div>

            
        </form>
        {/* <ToastContainer /> */}
    </div>
 
    </>
  )
}

export default Book

