import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const servicesList = [
  'Expertise in Digital Solutions',
  'Innovative Design Approach',
  'Strategic Digital Marketing',
  'Data-Driven Decisions',
  'Holistic Security Measures',
  'Tailored Digital Strategy',
  'Responsive & Scalable',
  'Proven Track Record'
];

const Digital_marketing = () => {
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
              At DiffusionFive, our digital marketing services are designed to elevate your brand through innovative strategies and data-driven solutions. We specialize in SEO, social media management, content creation, and targeted advertising campaigns that drive engagement and conversions. Our team of experts works closely with you to understand your goals, ensuring that every effort is tailored to your unique needs. By leveraging the latest technologies and trends, DiffusionFive maximizes your online presence, delivering measurable results
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
            <img className='lg:h-[500px] lg:w-[650px] rounded-2xl mx-auto lg:mx-0' src="./Images/marketing.png" alt="Web Development" />
          </div>
          {/* 2nd Part End */}
        </div>
      </section>
    </>
  );
}

export default Digital_marketing;
