import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const servicesList = [
  'Corporate Video Editing',
  'Social Media Content Editing',
  'Post-Production Services',
  'Motion Graphics',
  'Color Grading',
  'Sound Design',
  'Video Compression & Optimization',
  'Custom Video Solutions'
];

const Video_editing = () => {
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
              At DiffusionFive, we offer top-tier video editing services tailored to bring your vision to life. Our skilled team specializes in crafting dynamic visuals, seamless transitions, and compelling storytelling to enhance your content. Whether you need professional edits for corporate videos, social media, or personal projects, we ensure high-quality results with a quick turnaround. We utilize the latest editing software and techniques to create polished, engaging videos that resonate with your audience. Trust DiffusionFive to elevate your video content with creativity and precision.
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
            <img className='lg:h-[500px] lg:w-[650px] rounded-2xl mx-auto lg:mx-0' src="./Images/video.jpg" alt="Web Development" />
          </div>
          {/* 2nd Part End */}
        </div>
      </section>
    </>
  );
}

export default Video_editing;
