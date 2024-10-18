import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const servicesList = [
  'Custom AI Model Development',
  'Machine Learning Solutions',
  'Data Analysis & Visualization',
  'Natural Language Processing',
  'Predictive Analytics',
  'AI-Powered Automation',
  'AI Consulting & Strategy',
  'Computer Vision Applications'
];

const AI_solutions = () => {
  return (
    <>
      <section className='text-white mt-20 mx-3  xl:mx-16 2xl:mx-32'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
          {/* 1st Part */}
          <div>
            <div className='flex flex-col gap-3'>
              <h3 className='text-xl font-bold'>
                What We <span className='text-gradient'>Offer</span>
              </h3>
              <p className='text-gray-400 lg:w-[400px] xl:w-[450px] 2xl:w-[500px]'>
              "DiffusionFive offers exceptional AI solutions tailored to elevate your brand’s efficiency and innovation. Our team of skilled experts specializes in developing intelligent algorithms, automation systems, and data-driven insights that resonate with your business goals. We blend cutting-edge technology with strategic thinking to ensure every solution not only enhances operations but also drives meaningful outcomes. Whether you need a complete AI-driven transformation or custom automation for specific tasks, DiffusionFive is your go-to partner for all things AI. Trust us to bring your vision to life with precision and intelligence."
              </p>
            </div>

            <main className='grid grid-cols-2 gap-5 mt-10 py-6 border-gray-500 border-b-[1px] border-t-[1px] mx-4'>
              {servicesList.map((service, index) => (
                <div className='flex gap-4' key={index}>
                  <FaHandPointRight className='text-xl sm:text-2xl text-blue-500' />
                  <h2 className='text-[14px] sm:text-[16px] md:text-[18px] font-semibold'>{service}</h2>
                </div>
              ))}
            </main>
          </div>
          {/* 1st Part End */}

          {/* 2nd Part */}
          <div className='border-2 border-gray-600 py-4 px-4 rounded-2xl'>
            <img className='lg:h-[500px] lg:w-[650px] rounded-2xl mx-auto lg:mx-0' src="./Images/ai.png" alt="AI Solutions" />
          </div>
          {/* 2nd Part End */}
        </div>
      </section>
    </>
  );
}

export default AI_solutions;
