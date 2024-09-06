import React, { useState } from 'react';

import Swal from'sweetalert2';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Footer = () => {

 const [email, setEmail] = useState("");

 const handleEmail = (e) => {

      setEmail(e.target.value);

 } 

 const handleSubmit = (e) => {

      e.preventDefault();

      Swal.fire({
        title: "Success",
        text: "Successfully Subscribed",
        icon: "success"
    }); 

 } 

  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div className='flex flex-col gap-3'>
        <div className="flex items-center justify-center sm:justify-start">
                        <img className='h-[42px] w-[44px]' src="./Images/logo.png" alt="" />
                        <span className="text-white font-bold text-xl">DiffusionFive</span>
        </div>
          <p className="text-gray-400 text-center sm:text-start">
            We are committed to providing the best service possible, ensuring the utmost quality and innovation in all our projects.
          </p>
          <ul className="flex items-center justify-center sm:justify-start gap-3 text-white text-2xl">
          <a href="https://www.facebook.com/profile.php?id=61560502701437&mibextid=ZbWKwL" target='_blank'><FaFacebook className='text-white text-2xl cursor-pointer' /></a>
                <a href="https://wa.me/8801741987566?text=Hello!" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-white text-2xl cursor-pointer' /></a>
                <a href="https://www.linkedin.com/company/diffusion-five/" target='_blank'><FaLinkedin className='text-white text-2xl cursor-pointer' /></a>
                <a href="mailto:diffusionfive@gmail.com" target='_blank'><FaEnvelope className='text-white text-2xl cursor-pointer' /></a>
          </ul>
        </div>
        
        {/* Useful Links Section */}
        <div className='mx-auto'>
          <h2 className="text-2xl font-bold mb-4">Pages</h2>
          <ul className="space-y-2">
            <li><NavLink to="/home" className="hover:pl-2 hover:text-blue-500 duration-500">Home</NavLink></li>
            <li><NavLink to="/about_us" className="hover:pl-2 hover:text-blue-500 duration-500">About</NavLink></li>
            <li><NavLink to="/services" className="hover:pl-2 hover:text-blue-500 duration-500">Services</NavLink></li>
            <li><NavLink to="/our_team" className="hover:pl-2 hover:text-blue-500 duration-500">Team</NavLink></li>
            <li><NavLink to="/pricing_range" className="hover:pl-2 hover:text-blue-500 duration-500">Pricing</NavLink></li>
            <li><NavLink to="/portfolio" className="hover:pl-2 hover:text-blue-500 duration-500">Portfolio</NavLink></li>
            <li><NavLink to="/contact_us" className="hover:pl-2 hover:text-blue-500 duration-500">Contact</NavLink></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className='mx-auto sm:mx-0'>
          <h2 className="text-2xl font-bold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:pl-2 hover:text-blue-500 duration-500">Help Center</a></li>
            <li><NavLink to="/frequently_asked_questions" className="hover:pl-2 hover:text-blue-500 duration-500">FAQ</NavLink></li>
            <li><a href="#" className="hover:pl-2 hover:text-blue-500 duration-500">Premium Support</a></li>
            <li><a href="#" className="hover:pl-2 hover:text-blue-500 duration-500">Privacy</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className='mx-auto'>
          <h2 className="text-2xl font-bold mb-4 text-center">Subscribe</h2>
          <form action='#' onSubmit={handleSubmit}>
            <input
              type="email"
              name='email'
              required
              placeholder="Enter your email"
              onChange={handleEmail}
              value={email}
              className="w-full px-4 py-2 rounded focus:outline-none bg-gray-800 text-gray-300 mb-2"
            />
            <button className="w-full px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 px-3 text-center">
        <p className="text-gray-400 text-[16px]">Copyright &copy; 2024 DiffusionFive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
