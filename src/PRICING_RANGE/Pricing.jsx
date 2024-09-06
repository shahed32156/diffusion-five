import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

// Reusable Card Component
const PricingCard = ({ title, description, price, features, note }) => {
  return (
    <div className='flex flex-col gap-3 shadow-2xl hover:shadow-blue-300 duration-500 border-2 w-full xl:w-[380px] 2xl:w-[400px] mx-auto py-4 px-4 hover:border-blue-300 border-gray-600 rounded-xl'>
      <div className='flex flex-col gap-2 pb-2'>
        <h1 className='text-[26px] font-semibold'>{title}</h1>
        <p className='text-gray-300'>{description}</p>
      </div>
      <div className='border-b-2 border-b-gray-300 border-t-2 border-t-gray-300 py-6'>
        <h1 className='font-extrabold text-3xl text-gradient'>{price}</h1>
      </div>
      <div className='flex flex-col gap-4 mt-2'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-center gap-2'>
            {feature.included ? <FaCheckCircle className='text-[18px]' /> : <RxCrossCircled className='text-[18px]' />}
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-2'>
        <p className='italic text-[13px] text-gray-300'>{note}</p>
      </div>
      <div className='mt-4'>
       <NavLink to="/contact_us"> <button className='bg-gradient-to-r hover:bg-gradient-to-l duration-500 to-blue-500 from-pink-500 h-[40px] w-full rounded-xl'>Contact Now</button> </NavLink>
      </div>
    </div>
  );
};

const Pricing = () => {
  // Pricing data
  const pricingPlans = [
    {
      title: 'Silver Pack',
      description: 'This is for your medium business with 5-10 products',
      price: '$80/8K৳',
      features: [
        { text: '5 Time Revision', included: true },
        { text: '1 Year Support', included: true },
        { text: 'Mobile Responsive', included: true },
        { text: '5 -10 products upload (ecommerce)', included: true },
        { text: 'Speed Optimisation', included: false },
        { text: 'Premium Theme Plugin', included: false },
        { text: '1 year Free Domain & Hosting', included: false }
      ],
      note: 'If you want you can fix your budget according to your website'
    },
    {
      title: 'Gold Pack',
      description: 'This is for your medium business with 20-40 products',
      price: '$150/15K৳',
      features: [
        { text: '5 Time Revision', included: true },
        { text: '1 Year Support', included: true },
        { text: 'Mobile Responsive', included: true },
        { text: '5 -10 products upload (ecommerce)', included: true },
        { text: 'Speed Optimisation', included: true },
        { text: 'Premium Theme Plugin', included: true },
        { text: '1 year Free Domain & Hosting', included: false }
      ],
      note: 'If you want you can fix your budget according to your website'
    },
    {
      title: 'Diamond Pack',
      description: 'This is for your big business with unlimited products',
      price: '$220/22K৳',
      features: [
        { text: '5 Time Revision', included: true },
        { text: '1 Year Support', included: true },
        { text: 'Mobile Responsive', included: true },
        { text: '5 -10 products upload (ecommerce)', included: true },
        { text: 'Speed Optimisation', included: true },
        { text: 'Premium Theme Plugin', included: true },
        { text: '1 year Free Domain & Hosting', included: true }
      ],
      note: 'If you want you can fix your budget according to your website'
    }
  ];

  return (
    <>
      <div className='text-white mt-20 flex flex-col gap-4 items-center justify-center mx-3'>
        <h1 className='text-3xl sm:text-4xl font-bold'>
          Our <span className='text-gradient'>Pricing</span> Range
        </h1>
        <p className='md:w-[600px] text-center'>
          Our pricing plans are crafted to deliver outstanding value while catering to the specific requirements of your business. With a range of options customized for various services, you can find the perfect solutions that fit your needs without straining your budget.
        </p>
      </div>

      <section className='text-white mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-3 xl:mx-10 2xl:mx-32'>
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            note={plan.note}
          />
        ))}
      </section>
    </>
  );
};

export default Pricing;
