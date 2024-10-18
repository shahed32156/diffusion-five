import React from 'react';

import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { MdDateRange } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white pt-12 pb-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Side Logo and Social */}
        <div>
        <div className="flex items-center">
                        <img className='h-[38px] w-[40px]' src="./Images/logo.png" alt="" />
                        <span className="text-white font-bold text-[17px]">DiffusionFive</span>
        </div>
          <p className="mb-4 mt-2">
          We are committed to providing the best service possible, ensuring the utmost quality and innovation in all our projects.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61560502701437&mibextid=ZbWKwL" target='_blank' className="p-2 rounded-full bg-gray-600 duration-500 shadow-lg hover:shadow-blue-600 hover:bg-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/8801741987566?text=Hello!" target='_blank' className="p-2 rounded-full bg-gray-600 duration-500 shadow-lg hover:shadow-red-500 hover:bg-red-500">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/company/diffusion-five/" target='_blank' className="p-2 rounded-full bg-gray-600 duration-500 shadow-lg hover:shadow-blue-500 hover:bg-blue-500">
              <FaLinkedinIn />
            </a>
            <a href="mailto:diffusionfive@gmail.com" target='_blank' className="p-2 rounded-full bg-gray-600 duration-500 shadow-lg hover:shadow-green-600 hover:bg-green-600">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='mx-0 md:mx-auto'>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><NavLink to="/home" className="hover:pl-1 duration-500 hover:text-blue-500">Home</NavLink></li>
            <li><NavLink to="/about_us" className="hover:pl-1 duration-500 hover:text-blue-500">About</NavLink></li>
            <li><NavLink to="/our_team" className="hover:pl-1 duration-500 hover:text-blue-500">Team</NavLink></li>
            <li><NavLink to="/pricing_range" className="hover:pl-1 duration-500 hover:text-blue-500">Pricing</NavLink></li>
            <li><NavLink to="/portfolio" className="hover:pl-1 duration-500 hover:text-blue-500">Portfolio</NavLink></li>
            <li><NavLink to="/frequently_asked_questions" className="hover:pl-1 duration-500 hover:text-blue-500">FAQ</NavLink></li>
          </ul>
        </div>

        {/* Services */}
        <div className='mx-0 md:mx-auto'>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
          <li><NavLink to="/web_design_and_development" className="hover:pl-1 duration-500 hover:text-blue-500">Web Development</NavLink></li>
          <li><NavLink to="/digital_marketing"className="hover:pl-1 duration-500 hover:text-blue-500">Digital Marketing</NavLink></li>
            <li><NavLink to="/graphix_design" className="hover:pl-1 duration-500 hover:text-blue-500">Graphix Design</NavLink></li>
            <li><NavLink to="/software_quality_assurance" className="hover:pl-1 duration-500 hover:text-blue-500">SQA</NavLink></li>
            <li><NavLink to="/search_engine_optimization" className="hover:pl-1 duration-500 hover:text-blue-500">SEO</NavLink></li>
            <li><NavLink to="/video_editing" className="hover:pl-1 duration-500 hover:text-blue-500">Video Editing</NavLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div className='mx-0 md:mx-auto'>
          <h3 className="text-lg font-bold mb-4">Have any Questions?</h3>
          <ul className="space-y-4">
            <li>
              <div className="flex items-center space-x-2">
                <MdDateRange className="text-xl" />
                <NavLink to="/appoinment" className="hover:underline">Appoinment</NavLink>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <HiLocationMarker className="text-[22px]" />
                <span>North Kafrul, Dhaka, Bangladesh-Asia/Dhaka</span>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <HiPhone className="text-xl" />
                <span>+8801741987566</span>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <HiMail className="text-xl" />
                <span>diffusionfive@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-600 mt-8 pt-4 text-sm text-gray-400">
        
        <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center'>
            <div>
                <p className="">©Copyright 2024. All Rights Reserved by DiffusionFive</p>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4 md:mt-0">
              <NavLink to="/terms_&_conditions" className="hover:underline">Terms & conditions</NavLink>
              <NavLink to="/privacy_policy" className="hover:underline">Privacy Policy</NavLink>
            </div>
            
          </div>
        </div>
    </footer>
  );
};

export default Footer;
