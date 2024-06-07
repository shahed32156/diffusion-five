
import React, { useState, useRef } from 'react'

import emailjs from '@emailjs/browser'
import Swal from'sweetalert2';


const Query = () => {  

    const form = useRef();

     const [name, setName] = useState();
     const [email, setEmail] = useState();
     const [query, setQuery] = useState();


    const handleName = (e) => {


        console.log(e.target.value);

    }

    const handleEmail = (e) => {


        console.log(e.target.value);

    }

    const handleQuery = (e) => {


        console.log(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setName(name);
        setEmail(email);
        setQuery(query);

        Swal.fire({
          title: "Send Your Query",
          text: "Successfully sent your query",
          icon: "success"
          });
  

        emailjs
        .sendForm('service_rtixv6y', 'template_qa4ablj', form.current, {
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

     document.getElementById("input").value="";
     document.getElementById("input2").value="";
     document.getElementById("query").value="";   
    }
    
  return (

    <>
    
    <div className='mt-20 text-center'>

            <h1 className='text-3xl font-serif font-extrabold pb-3'>Send your <span className='text-purple-700'>Query</span></h1>

   </div>
    
    <div className='mt-6 px-3'>

        <form ref={form} onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4'>
        
            <div>
                <input className='w-[350px] h-[50px] focus:outline-none border-2 border-purple-700 pl-2 rounded-lg md:w-[400px]' required type="text" 
                name="name" id="input" onChange={handleName} value={name} placeholder='Enter your name' />
            </div>

            <div>
                <input className='w-[350px] h-[50px] input focus:outline-none border-2 border-purple-700 pl-2 rounded-lg md:w-[400px]' required type="email" 
                name="email" id="input2" onChange={handleEmail}  value={email} placeholder='Enter your email' />
            </div>

            <div>
                <textarea  className='w-[350px] h-[100px] focus:outline-none border-2 border-purple-700 pl-2 rounded-lg md:w-[400px]' required 
                name="message" id="query" onChange={handleQuery} value={query} placeholder='Enter your query'></textarea>
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

