import React from 'react';
import { FaArrowDown } from "react-icons/fa";

const Technology = () => {
  const frontend = [
    { name: 'HTML', logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
    { name: 'CSS', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
    { name: 'Bootstrap', logo: './Images/bootstrap.png' },
    { name: 'Tailwind', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
    { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
    { name: 'React.js', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    { name: 'Next.js', logo: './Images/nextjs.png' },
    { name: 'Redux', logo: './Images/redux.png' },
  ];
  const backend = [
    { name: 'Node.js', logo: './Images/nodejs.png' },
    { name: 'Express.js', logo: './Images/express_js.png' },
    { name: 'PHP', logo: './Images/php.png' },
    { name: 'Laravel', logo: './Images/laravel.png' },
    { name: 'Django', logo: './Images/django.png' },
    { name: 'MySQL', logo: './Images/mysql.png' },
    { name: 'MongoDB', logo: './Images/mongodb.png' },
  ];
  const testing = [
    { name: 'JUnit 5', logo: './Images/junit.png' },
    { name: 'JMeter', logo: './Images/jmeter.png' },
    { name: 'Postman', logo: './Images/postman.svg' },
    { name: 'Java', logo: './Images/java.png' },
  ];

  return (
    <>
      <div className='text-white mt-20 text-center flex flex-col gap-3 items-center mx-3'>
        <h1 className='text-3xl sm:text-4xl font-bold'>
          Our <span className='text-gradient'>Technology Stack</span>
        </h1>
        <p className='md:w-[400px]'>
          At DiffusionFive, we specialize in a wide range of technologies to bring your ideas to life.
          Below are the tools and technologies we work with:
        </p>

        {/* Frontend Development Section */}
        <div className='mt-5 flex flex-col gap-5 items-center'>
          <h3 className='text-xl font-bold'>Frontend Development</h3>
          
          {/* Arrow with animation */}
          <div className='relative z-10'>
            <p className="h-[200px] text-center border-dashed border-l-[2px] border-white bg-transparent"></p>
            {/* Animated Arrow */}
            <FaArrowDown className='text-2xl absolute bottom-16 right-[11px] z-10 bounce-horizontal' />
          </div>
        </div>

        {/* Frontend Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-12 lg:px-24">
          {frontend.map((tech, index) => (
            <div
              key={index}
              className="bg-[#4b4b4b] bg-opacity-40 mt-4 p-6 
              flex flex-col items-center justify-center 
              duration-500 hover:border-blue-300 border-gray-600 rounded-xl
              shadow-2xl hover:shadow-blue-300 border-2"
            >
              <img src={tech.logo} alt={tech.name} className="w-20 h-16 sm:h-20 mb-4" />
              <h2 className="text-xl font-semibold text-white">{tech.name}</h2>
            </div>
          ))}
        </div>

        {/* Backend Development Section */}
        <div className='mt-10 flex flex-col gap-5 items-center'>
          <h3 className='text-xl font-bold'>Backend Development</h3>
          
          {/* Arrow with animation */}
          <div className='relative z-10'>
            <p className="h-[200px] text-center border-dashed border-l-[2px] border-white bg-transparent"></p>
            {/* Animated Arrow */}
            <FaArrowDown className='text-2xl absolute bottom-16 right-[11px] z-10 bounce-horizontal' />
          </div>
        </div>

        {/* Backend Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-12 lg:px-24">
          {backend.map((tech, index) => (
            <div
              key={index}
              className="bg-[#4b4b4b] bg-opacity-40 mt-4 p-6 
              flex flex-col items-center justify-center
              duration-500 hover:border-blue-300 border-gray-600 rounded-xl
              shadow-2xl hover:shadow-blue-300 border-2"
            >
              <img src={tech.logo} alt={tech.name} className="w-20 h-16 sm:h-20 mb-4" />
              <h2 className="text-xl font-semibold text-white">{tech.name}</h2>
            </div>
          ))}
        </div>

        {/* testing Development Section */}
        <div className='mt-10 flex flex-col gap-5 items-center'>
          <h3 className='text-xl font-bold'>Web Testing</h3>
          
          {/* Arrow with animation */}
          <div className='relative z-10'>
            <p className="h-[200px] text-center border-dashed border-l-[2px] border-white bg-transparent"></p>
            {/* Animated Arrow */}
            <FaArrowDown className='text-2xl absolute bottom-16 right-[11px] z-10 bounce-horizontal' />
          </div>
        </div>
        {/* testing Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-12 lg:px-24">
          {testing.map((tech, index) => (
            <div
              key={index}
              className="bg-[#4b4b4b] bg-opacity-40 mt-4 p-6 
              flex flex-col items-center justify-center
              duration-500 hover:border-blue-300 border-gray-600 rounded-xl
              shadow-2xl hover:shadow-blue-300 border-2"
            >
              <img src={tech.logo} alt={tech.name} className="w-20 h-16 sm:h-20 mb-4" />
              <h2 className="text-xl font-semibold text-white">{tech.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Technology;
