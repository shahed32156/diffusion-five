import React, { useState } from 'react';

import Swal from'sweetalert2';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmt = (e) => {
    e.preventDefault();
    
    // You can add additional validation and subscription logic here
    Swal.fire({
        title: "Success",
        text: "Successfully subscribed",
        icon: "success"
    });
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-14 text-white mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6 font-semibold">
          Subscribe to our newsletter to get the latest updates and exclusive content.
        </p>
        <form onSubmit={handleSubmt} className="flex flex-col sm:flex-row justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            name='email'
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-[350px] md:w-[400px] text-black px-4 py-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black h-[50px] w-[120px] rounded-md hover:bg-[#282727] transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
