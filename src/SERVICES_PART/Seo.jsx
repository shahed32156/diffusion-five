import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const servicesList = [
  'Comprehensive Keyword Research',
  'On-Page SEO Optimization',
  'Technical SEO Audits',
  'High-Quality Backlink Building',
  'Content Optimization & Strategy',
  'Local SEO Services',
  'Mobile-First SEO Implementation',
  'SEO Performance Analytics & Reporting'
];

const Seo = () => {
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
              At DiffusionFive, our SEO services are designed to enhance your brand's online visibility and drive organic traffic to your website. We specialize in comprehensive keyword research, on-page SEO optimization, technical SEO audits, high-quality backlink building, and content strategy. Our team ensures that every aspect of your SEO strategy is tailored to your business goals, helping you achieve higher search engine rankings and increased engagement. Whether you're aiming to improve local search results or need advanced SEO analytics, DiffusionFive's data-driven approach guarantees measurable results that elevate your brand's digital presence.
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
            <img className='lg:h-[500px] lg:w-[650px] rounded-2xl mx-auto lg:mx-0' src="./Images/seo.png" alt="seo" />
          </div>
          {/* 2nd Part End */}
        </div>
      </section>
    </>
  );
}

export default Seo;
