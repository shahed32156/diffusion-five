import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    title: "Product Designer",
    imgSrc: "./Images/john-doe.jpg",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Specialist",
    imgSrc: "./Images/jane-smith.jpg",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  // Add more members as needed
];

const OurTeam = () => {
  const [activeMember, setActiveMember] = useState(teamMembers[0]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Circular Members */}
      <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`absolute w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full border-4 border-white overflow-hidden cursor-pointer
                        transform transition-transform duration-500
                        ${index === 0 ? 'top-0 left-1/2' : ''}
                        ${index === 1 ? 'top-1/4 left-5/6' : ''}
                        ${index === 2 ? 'top-1/2 left-full' : ''}
                        ${index === 3 ? 'bottom-1/4 left-5/6' : ''}
                        ${index === 4 ? 'bottom-0 left-1/2' : ''}`} // Add more positions as needed
            onMouseEnter={() => setActiveMember(member)}
          >
            <img
              src={member.imgSrc}
              alt={member.name}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Central Profile */}
      <div className="absolute flex flex-col items-center text-center text-white">
        <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden mb-4">
          <img
            src={activeMember.imgSrc}
            alt={activeMember.name}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-xl lg:text-2xl font-bold">{activeMember.name}</h3>
        <p className="text-sm lg:text-base">{activeMember.title}</p>
        <div className="flex space-x-4 mt-4">
          <a href={activeMember.social.facebook} target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href={activeMember.social.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn className="hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href={activeMember.social.twitter} target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href={activeMember.social.instagram} target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
