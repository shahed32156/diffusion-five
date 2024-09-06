import React from 'react';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Abdullah Shahed',
    role: 'Full Stack Developer',
    image: './Images/shahed.jpg',
    socials: [
      { icon: <FaFacebook />, link: 'https://www.facebook.com/profile.php?id=100094014247740&mibextid=ZbWKwL' },
      { icon: <FaWhatsapp />, link: 'https://wa.me/8801741987566?text=Hello!' },
      { icon: <FaLinkedin />, link: 'https://linkedin.com/in/abdullahshahed24/' },
      { icon: <FaEnvelope />, link: 'mailto:shahed32156@gmail.com' },
    ],
  },
  {
    name: 'Raknat Jahan Aliz',
    role: 'Graphix Designer',
    image: './Images/aliz.jpg',
    socials: [
      { icon: <FaFacebook />, link: 'https://facebook.com' },
      { icon: <FaWhatsapp />, link: 'https://whatsapp.com' },
      { icon: <FaLinkedin />, link: 'https://linkedin.com' },
      { icon: <FaEnvelope />, link: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Mostakim Jihad',
    role: 'AI Engineer',
    image: './Images/jihad.jpg',
    socials: [
      { icon: <FaFacebook />, link: 'https://facebook.com' },
      { icon: <FaWhatsapp />, link: 'https://whatsapp.com' },
      { icon: <FaLinkedin />, link: 'https://linkedin.com' },
      { icon: <FaEnvelope />, link: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Mahedi Hasan Razu',
    role: 'Digital Marketer',
    image: './Images/razu.jpg',
    socials: [
      { icon: <FaFacebook />, link: 'https://facebook.com' },
      { icon: <FaWhatsapp />, link: 'https://whatsapp.com' },
      { icon: <FaLinkedin />, link: 'https://linkedin.com' },
      { icon: <FaEnvelope />, link: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Md. Ratul Hasan',
    role: 'SQA Engineer',
    image: './Images/ratul.jpg',
    socials: [
      { icon: <FaFacebook />, link: 'https://facebook.com' },
      { icon: <FaWhatsapp />, link: 'https://whatsapp.com' },
      { icon: <FaLinkedin />, link: 'https://linkedin.com' },
      { icon: <FaEnvelope />, link: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Muktadir Rahman',
    role: 'Frontend Developer',
    image: './Images/muktadir.jpg',
    socials: [
      { icon: <FaFacebook />, link: 'https://facebook.com' },
      { icon: <FaWhatsapp />, link: 'https://whatsapp.com' },
      { icon: <FaLinkedin />, link: 'https://linkedin.com' },
      { icon: <FaEnvelope />, link: 'https://linkedin.com' },
    ],
  },
];

const Team = () => {
  return (
    <>
      <div className='text-white mt-20 text-center flex flex-col items-center gap-3 mx-3'>
        <h1 className='text-3xl sm:text-4xl font-bold'>
          Our Creative <span className='text-gradient'>Team</span>
          
        </h1>
        <p className='md:w-[600px]'>Meet the brilliant minds behind our success! Our creative team combines innovation, expertise, and passion to bring your ideas to life.</p>
      </div>

      <section className='mt-10 text-white grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-3 md:mx-10 lg:mx-[38px] xl:mx-48 2xl:mx-72'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='border-2 py-4 border-gray-600 bg-[#4b4b4b] bg-opacity-40 shadow-2xl hover:shadow-blue-300 hover:border-blue-300 duration-500 w-[300px] sm:w-full md:w-full lg:w-[300px] rounded-2xl mx-auto'
          >
            <div className='flex flex-col items-center gap-4'>
              <img
                className='h-[250px] w-[250px] rounded-full mx-auto'
                src={member.image}
                alt={member.name}
              />
              <div className='flex flex-col gap-1 items-center'>
                <h1 className='text-gradient text-2xl font-bold'>{member.name}</h1>
                <p className='font-medium'>{member.role}</p>
              </div>
              <div className='flex items-center justify-center gap-3 text-[26px]'>
                {member.socials.map((social, socialIndex) => (
                  <a
                    key={socialIndex}
                    href={social.link}
                    className='cursor-pointer animate-fade-in'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Team;
