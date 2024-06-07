import React, { useEffect, useState } from 'react'

const About = () => {

    const [number, setNumber] = useState(0);
    const end = 10;
    const duration = 5000; // 5 seconds
    const increment = end / (duration / 100); // Increment per 100ms

    useEffect(() => {
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            setNumber(Math.floor(current));
        }, 100);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);


    const [number1, setNumber1] = useState(0);
    const end1 = 50;
    const duration1 = 5000; // 5 seconds
    const increment1 = end1 / (duration1 / 100); // Increment per 100ms

    useEffect(() => {
        let current = 0;
        const timer = setInterval(() => {
            current += increment1;
            if (current >= end1) {
                current = end1;
                clearInterval(timer);
            }
            setNumber1(Math.floor(current));
        }, 100);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    const [number2, setNumber2] = useState(0);
    const end2 = 80;
    const duration2 = 5000; // 5 seconds
    const increment2 = end2 / (duration2 / 100); // Increment per 100ms

    useEffect(() => {
        let current = 0;
        const timer = setInterval(() => {
            current += increment2;
            if (current >= end2) {
                current = end2;
                clearInterval(timer);
            }
            setNumber2(Math.floor(current));
        }, 100);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

  return (

    <>


        <div className='mt-20 text-center'>

             <h1 className='text-3xl font-serif font-semibold pb-3'><span className='text-purple-700'>About </span> Our Company</h1>

        </div>

      <div className='flex flex-col gap-3 md:flex-row mx-3 md:mx-28 justify-between items-center mt-10'>
        
           <div>

              <img className='mx-auto md:mx-0 w-[300px] border-[8px] border-purple-700 md:w-[400px] rounded-full' src="./Images/about1.png" alt="" /> 
              
            
           </div>

           <div className='flex flex-col gap-3 justify-center mx-3'>

                 <h1 className='w-full md:w-[600px] text-xl md:text-4xl font-bold'>We have been highly effective in website design, development, and digital marketing for the past 02 years.</h1> 
                 <p className='w-full md:w-[550px] text-justify'>For the past five years, we have excelled in website design, development, and digital marketing. Our expertise and company culture have consistently resulted in satisfied customers. Our objective is to craft personalized customer experiences tailored to individual needs and ideas. We are dedicated to long-term partnerships, responsive feedback, and providing high-quality services.</p>
                 <div>

                    <div className='mt-4 grid gap-6 grid-cols-2 md:grid-cols-3'>
                    
                        <div>
                            <h1 id='loading-number' className='elementor-element text-4xl text-purple-700 text-center font-bold'>{number}+</h1>
                            <p className='text-[20px] text-center font-medium'>Happy Clients</p>
                        </div>

                        <div>
                            <h1 id='loading-number' className='elementor-element text-4xl text-purple-700 text-center font-bold'>{number1}+</h1>
                            <p className='text-[20px] text-center font-medium'>Projects Completed</p>
                        </div>

                        <div>
                            <h1 id='loading-number' className='elementor-element text-4xl text-purple-700 text-center font-bold'>{number2}+</h1>
                            <p className='text-[20px] text-center font-medium'>All Website</p>
                        </div>
                    
                    </div> 

                    </div>  
           
           </div>  
          
      </div>   
    
      


    </>
  
 )
}

export default About
