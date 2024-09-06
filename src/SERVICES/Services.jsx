import React from 'react';

import { FaLaptopCode } from 'react-icons/fa';
import { IoMdVideocam } from "react-icons/io";
import { MdScreenSearchDesktop } from "react-icons/md";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const serviceItems = [
  {
    route:"/web_design_and_development",
    title: 'Web Design & Development',
    description: 'We offer cutting-edge web design services to create visually stunning and user-friendly websites.',
    icon: <FaLaptopCode className='text-[35px]' />
  },
  {
    route: "/digital_marketing",
    title: 'Digital Marketing',
    description: 'Our digital marketing strategies are tailored to your business to ensure maximum reach and engagement.',
    icon: <IoMegaphoneOutline className='text-[35px]' />
  },
  {
    route: "/graphix_design",
    title: 'Graphic Design',
    description: 'We provide creative graphic design services that make your brand stand out in the market.',
    icon: <FaPenToSquare className='text-[35px]' />
  },
  {
    route: "/software_quality_assurance",
    title: 'Software Quality Assurance',
    description: 'We ensure your software products are thoroughly tested for quality and reliability before release.',
    icon: <MdScreenSearchDesktop className='text-[35px]' />
  },
  {
    route: "/video_editing",
    title: 'Video Editing',
    description: 'Our professional video editing services bring your vision to life with creative and engaging content.',
    icon: <IoMdVideocam className='text-[35px]' />
  }
];

const Services = () => {
  return (
    <>
      <div className='text-white mt-20 text-center flex flex-col gap-3 items-center mx-3'>
        <h1 className='text-3xl sm:text-4xl font-bold'>
          Our All <span className='text-gradient'>Services</span>
        </h1>
        <p className='md:w-[400px]'>Explore our packages or reach out to us to find the service that suits your needs.</p>
      </div>

      <section className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 mx-3 xl:mx-10 2xl:mx-32'>
        {serviceItems.map((service, index) => (
          <div className='shadow-2xl hover:shadow-blue-300  duration-500 border-2 w-full xl:w-[380px] 2xl:w-[400px] mx-auto py-4 px-4 hover:border-blue-300 border-gray-600 rounded-xl'>

                <div
                  key={index}
                  className='bg-[#4b4b4b] rounded-lg px-8 py-10 md:h-[350px] lg:h-[330px] bg-opacity-40'
                >
                  <div className='flex flex-col gap-3'>
                    {service.icon}
                    <h3 className='text-xl font-semibold'>{service.title}</h3>
                    <p>{service.description}</p>
                  <NavLink to={service.route}>  <button className='mt-5 bg-gradient-to-r hover:bg-gradient-to-l duration-500 hover:scale-105 to-blue-500 from-pink-500 h-[40px] w-[120px] rounded-lg'>
                      See Details
                    </button></NavLink>
                  </div>
                </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Services;
