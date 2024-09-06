import React, { useState, useEffect } from 'react';

const ProgressBar = ({ label, percentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    const increment = percentage / (duration / 20); // increment value

    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      if (start >= percentage) {
        start = percentage;
        clearInterval(timer);
      }
      setCurrentPercentage(Math.floor(start));
    }, 100);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-4'>
        <p>{label}</p>
        <p>{currentPercentage}%</p>
      </div>
      <div className='bg-gray-600 h-[14px] w-full md:w-[480px] rounded-full'>
        <div
          className='bg-gradient-to-l from-[#3b82f6] to-[#34d399] h-[14px] rounded-full'
          style={{ width: `${currentPercentage}%`, transition: 'width 0.5s' }}
        ></div>
      </div>
    </div>
  );
};

const Choose = () => {
  return (
    <>
      <section className='text-white mt-20'>

        <div className='bg-[#06062f] flex gap-6 flex-col xl:flex-row items-center justify-between xl:pl-10 2xl:pl-36'>
                <div className='flex flex-col gap-4 px-3'>
                <h3 className='text-2xl font-bold'>
                    Why <span className='text-gradient'>Choose Us</span>
                </h3>
                <p className='w-[90%] md:w-[500px]'>
                    Alongside our commitment to your satisfaction, we offer boundless revisions to guarantee that every detail of your project aligns with your requirements. Whether it involves refining your website's design, optimizing your digital marketing tactics, or perfecting your e-commerce setup, we're dedicated to working tirelessly until you're completely content with the outcome. But that's not all. With our ongoing lifetime support, you can trust that our proficient team will be by your side throughout your journey. We're prepared to provide lifetime assistance for any service you acquire from us.
                </p>
                <div className='flex flex-col gap-5 mt-4'>
                    <ProgressBar label="Client Satisfaction" percentage={97} />
                    <ProgressBar label="Project Completion Rate" percentage={95} />
                    <ProgressBar label="Innovation and Creativity" percentage={96} />
                    <ProgressBar label="On-Time Delivery" percentage={90} />
                </div>
                </div>

                <div className=''>
                    <img className='rounded-2xl  xl:h-[600px] 2xl:w-[700px]' src="./Images/choose.png" alt="" />
                </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
