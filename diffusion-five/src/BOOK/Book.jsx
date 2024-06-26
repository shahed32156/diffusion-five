
import React, { useState, useRef } from 'react'

import emailjs from '@emailjs/browser'
import Swal from'sweetalert2';



const Book = () => {  

     const form = useRef();

     const [project, setProject] = useState();
     const [name, setName] = useState();
     const [email, setEmail] = useState();


    const handleName = (e) => {

      const value = e.target.value;
      const regex = /^[a-zA-Z\s]*$/;
  
      if (regex.test(value)) {
        setName(value);
      } else {
        Swal.fire({
          title: "Error",
          text: "Invalid name",
          icon: "error"
        });
      }
  
      console.log(value);

    }

    const handleEmail = (e) => {

        setEmail(email);
        console.log(e.target.value);

    }

    const handleProject = (e) => {

            setProject(project);
            console.log(e.target.value);
        

    }

    const handleSubmit = (e) => {

      e.preventDefault();
      
      if (name.length <= 3) {
          Swal.fire({
              title: "Error",
              text: "Name must be more than 3 characters",
              icon: "error"
          });
          return;
      }

      Swal.fire({
          title: "Send Your Query",
          text: "Successfully sent your query",
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

    setName("");
    setEmail("");
      
    }
    
  return (

    <>
    
    <div className='mt-20 text-center'>

            <h1 className='text-3xl font-serif font-extrabold pb-3'><span className='text-purple-700'>Book </span>Now</h1>

   </div>
    
    <div className='mt-6 px-3'>

        <form ref={form} onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5'>
        
  
            <div className='relative flex items-center'>
                <select className='w-[350px] h-[50px] pr-2 focus:outline-none bg-purple-500 text-white border-2 border-purple-700 pl-2 rounded-lg md:w-[400px]' required type="text"  
                name="message" id="input1" onChange={handleProject}> 
                
                <option required value={project} className=' bg-white text-black'>Select your project</option>
                <option required value={project} className=' bg-white text-black'>Small</option>
                <option required value={project} className=' bg-white text-black'>Medium</option>
                <option value={project} className=' bg-white text-black'>Big</option>
                
                
                </select>

                

            </div>


            <div className='relative'>
                <input className='w-[350px] h-[50px] focus:outline-none border-2 border-purple-700 pl-4 rounded-lg md:w-[400px]' required type="text" 
                name="name" id="input2" onChange={handleName} value={name} />
                <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your name</div>
            </div>

            <div className='relative'>
                <input className='w-[350px] h-[50px] input focus:outline-none border-2 border-purple-700 pl-4 rounded-lg md:w-[400px]' required type="email" 
                name="email" id="input3" onChange={handleEmail}  value={email} />
                 <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your email</div>
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

