import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoGoal } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";

const Deals = () => {
  const steps = [
    {
      icon: <GoGoal className='text-[26px]' />,
      title: 'Requirements Gathering',
      description: 'Start by understanding the client’s goals, expectations, and the scope of their project. Conduct a detailed consultation to gather all necessary information and define the objectives clearly.',
      link: '/contact_us',
    },
    {
      icon: <FaHandshake className='text-[26px]' />,
      title: 'Proposal and Agreement',
      description: 'After gathering requirements, create a detailed proposal outlining the deliverables, timelines, and pricing. Ensure both parties sign an agreement covering project scope and terms.',
      link: '/contact_us',
    },
    {
      icon: <GiProgression className='text-[26px]' />,
      title: 'Design and Implementation',
      description: 'Begin executing the project, providing regular updates and drafts, while maintaining constant communication with the client to ensure alignment with their vision.',
      link: '/contact_us',
    },
    {
      icon: <FaSearch className='text-[26px]' />,
      title: 'Testing and Feedback',
      description: 'Conduct thorough testing or reviews for quality assurance and gather feedback from the client. Allow room for revisions and improvements as necessary.',
      link: '/contact_us',
    },
    {
      icon: <GrDeliver className='text-[26px]' />,
      title: 'Final Delivery',
      description: 'Once the project is complete, deliver the final product and provide post-project support to ensure client satisfaction and foster long-term relationships.',
      link: '/contact_us',
    }
  ];

  return (
    <>
        <div className='text-white mt-20 text-center flex flex-col gap-3 items-center mx-3'>
            <h1 className='text-3xl sm:text-4xl font-bold'>
            How to <span className='text-gradient'>Deals</span> With Our Clients 
            </h1>
            <p className='md:w-[400px]'>The five major steps we follow from start to finish when dealing and working with a client to develop what he actually want.</p>
        </div>
       

      <section className='text-white mt-10 mx-3 md:mx-6 lg:mx-20 xl:mx-20 2xl:mx-[235px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 '>
          {steps.map((step, index) => (
            <div className='mx-auto bg-gray-600 bg-opacity-40 rounded-2xl hover:shadow-blue-300  duration-500 border-2 hover:border-blue-300 border-gray-600 w-full px-4 py-6' key={index}>
              <div className='flex flex-col justify-center items-center gap-3'>
                <div className='h-[50px] w-[50px] flex items-center justify-center bg-blue-500 rounded-full'>
                  {step.icon}
                </div>
                <h1 className='font-semibold text-xl'>{step.title}</h1>
                <p className='px-4 text-center'>{step.description}</p>
                <NavLink to={step.link}>
                  <button className='bg-gradient-to-r hover:bg-gradient-to-l duration-500 to-blue-500 from-pink-500 h-[40px] w-[120px] rounded-xl mt-2'>Learn More</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Deals;
