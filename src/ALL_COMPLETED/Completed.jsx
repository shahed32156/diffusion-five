import React, { useState, useEffect } from 'react';

const CountUp = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500; // Duration of the animation
    const increment = targetValue / (duration / 20); // Increment value

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(timer);
      }
      setCount(current);
    }, 100);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <span>
      {Number.isInteger(targetValue) ? Math.floor(count) : count.toFixed(1)}+
    </span>
  );
};

const Completed = () => {
  return (
    <>
      <section className='text-white grid gap-5 grid-cols-2 md:grid-cols-3 mt-20 py-8 bg-gradient-to-l from-[#3b82f6] to-[#34d399]'>

        <div className='flex flex-col items-center gap-3 mx-auto'>
          <h1 className='text-5xl font-extrabold'>
            <CountUp targetValue={8} />
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-xl font-semibold'>Project Completed</p>
        </div>

        <div className='flex flex-col items-center gap-3 mx-auto'>
          <h1 className='text-5xl font-extrabold'>
            <CountUp targetValue={7} />
          </h1>
          <p className='text-xl font-semibold'>Happy Clients</p>
        </div>

        <div className='flex flex-col items-center gap-3 mx-auto'>
          <h1 className='text-5xl font-extrabold'>
            <CountUp targetValue={4.9} />
          </h1>
          <p className='text-xl font-semibold'>Clients Rating</p>
        </div>

      </section>
    </>
  );
};

export default Completed;
