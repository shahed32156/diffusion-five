import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const servicesList = [
  'Functional Testing',
  'Performance Testing',
  'Security Testing',
  'Usability Testing',
  'Automation Testing',
  'Regression Testing',
  'Compatibility Testing',
  'Test Consulting'
];

const Sqa = () => {
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
              DiffusionFive offers top-tier Software Quality Assurance services that ensure your products meet the highest standards of functionality, reliability, and performance. Our expert team uses advanced testing methodologies to identify and address potential issues before they impact your users. We specialize in end-to-end testing, including functional, performance, security, and usability testing, tailored to your specific needs. By partnering with us, you gain a reliable QA process that enhances your software’s quality, accelerates time-to-market, and boosts customer satisfaction. Let DiffusionFive be your trusted partner in delivering flawless software solutions.
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
            <img className='lg:h-[500px] lg:w-[650px] rounded-2xl mx-auto lg:mx-0' src="./Images/sqa.png" alt="Web Development" />
          </div>
          {/* 2nd Part End */}
        </div>
      </section>
    </>
  );
}

export default Sqa;
