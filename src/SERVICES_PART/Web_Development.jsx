import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const servicesList = [
  'Ecommerce Website',
  'Educational Website',
  'Business Website',
  'Real Estate Website',
  'Blog Website',
  'Portfolio Website',
  'Personal Website',
  'Travel Website',
  'News Website',
  'Landing page'
];

const Web_Development = () => {
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
                Boost your online presence with DiffusionFive’s expert web design and development services. We craft visually stunning, fully responsive websites that blend style with functionality. Whether you're looking to build a dynamic business site, an engaging e-commerce platform, or a tailor-made web solution, our team is committed to delivering results that align with your unique vision and propel your success in the digital landscape.
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
            <img className='lg:h-[500px] lg:w-[650px] rounded-2xl mx-auto lg:mx-0' src="./Images/web.png" alt="Web Development" />
          </div>
          {/* 2nd Part End */}
        </div>
      </section>
    </>
  );
}

export default Web_Development;
