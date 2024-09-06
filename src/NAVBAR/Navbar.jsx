import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { SiWindows } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import { RiShutDownLine } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-[#0a0a28dd] fixed w-full z-10 top-0 left-0">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 2xl:px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img className='h-[42px] w-[44px]' src="./Images/logo.png" alt="" />
                        <span className="text-white font-bold text-xl">DiffusionFive</span>
                    </div>
                    <div className="act-links hidden md:flex items-center gap-8 text-xl">
                        <NavLink to="/home" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Home</NavLink>
                        <NavLink to="/about_us" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">About</NavLink>
                        <NavLink to="/services" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Services</NavLink>
                        <NavLink to="/our_team" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Team</NavLink>
                        <NavLink to="/pricing_range" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Pricing</NavLink>
                        <NavLink to="/portfolio" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Portfolio</NavLink>
                        <NavLink to="/contact_us" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Contact</NavLink>
                        
                        
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-2/3 bg-[#0a0a28dd] h-full z-20 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="act-links flex flex-col space-y-4 p-4">
                        <h4 className='text-xl text-white pb-3 border-b-2 border-white'>DiffusionFive</h4>
                        <NavLink to="/home" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-[80px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Home</NavLink>
                        <NavLink to="/about_us" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-[80px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>About</NavLink>
                        <NavLink to="/services" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-[80px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Services</NavLink>
                        <NavLink to="/our_team" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-[80px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Team</NavLink>
                        <NavLink to="/pricing_range" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-[80px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Pricing</NavLink>
                        <NavLink to="/portfolio" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-[80px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Portfolio</NavLink>
                        <NavLink to="/contact_us" className="text-white text-sm font-medium relative hover:text-blue-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[3px] before:w-[80px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Contact</NavLink>
                </div>
            </div>
            {/* Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>}
        </nav>
    );
};

export default Navbar;
