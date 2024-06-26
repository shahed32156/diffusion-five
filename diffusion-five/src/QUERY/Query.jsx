
import React, { useState, useRef } from 'react'

import emailjs from '@emailjs/browser'
import Swal from'sweetalert2';


const Query = () => {  

  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

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
      setEmail(e.target.value);
      console.log(e.target.value);
  }

  const handleQuery = (e) => {
      setQuery(e.target.value);
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

      emailjs.sendForm('service_rtixv6y', 'template_qa4ablj', form.current, {
          publicKey: 'wG2TB6JzfeU6u3ZPq',
      })
      .then(
          () => {
              console.log('SUCCESS!');
          },
          (error) => {
              console.log('FAILED...', error.text);
          }
      );
  }

  const handleReset = () => {
      setName("");
      setEmail("");
      setQuery(""); 
  }

    
  return (

    <>
    
    <div className='mt-20 text-center'>

            <h1 className='text-3xl font-serif font-extrabold pb-3'>Send your <span className='text-purple-700'>Query</span></h1>

   </div>
    
    <div className='mt-6 px-3'>

        <form ref={form} onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5'>
        
            <div className='relative'>
                <input className='w-[350px] h-[50px] bg-transparent focus:outline-none border-2 border-purple-700 pl-4 rounded-lg md:w-[400px]' required type="text" 
                name="name" id="input" onChange={handleName} value={name} />
                <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your name</div>
            </div>

            <div className='relative'>
                <input className='w-[350px] h-[50px] focus:outline-none border-2 border-purple-700 pl-4 rounded-lg md:w-[400px]' required type="email" 
                name="email" id="input2" onChange={handleEmail} value={email} />
                <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your email</div>
            </div>

            <div className='relative'>
                <textarea  className='w-[350px] h-[100px] focus:outline-none border-2 border-purple-700 pl-4 rounded-lg md:w-[400px]' required 
                name="message" id="query" onChange={handleQuery} value={query} ></textarea>
                <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your query</div>
            </div>

            <div className='flex gap-4 justify-center items-center'>
                
               <button className='bg-purple-500 py-2 text-[18px] rounded-md font-semibold w-[150px] text-white md:hover:bg-purple-300'>Send</button>
               
              <a className='bg-purple-500 cursor-pointer text-center py-2 text-[18px] rounded-md font-semibold w-[150px] text-white md:hover:bg-purple-300' onClick={handleReset}>Reset</a>
            </div>

            
        </form>
        
    </div>

    </>
  )
}

export default Query

