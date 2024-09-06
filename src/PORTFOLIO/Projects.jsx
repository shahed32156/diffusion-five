import React, { useState } from 'react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const projects = [
    { id: 1, title: 'Travel Website', image: './Images/p1.png',  },
    { id: 2, title: 'Phone Shop Website', image: './Images/p2.png' },
    { id: 3, title: 'Flight Booking Website', image: './Images/p3.png' },
    { id: 4, title: 'E-commerce Website', image: './Images/p4.png' },
    { id: 5, title: 'Google Classroom Website', image: './Images/p5.png' },
    { id: 6, title: 'Food Delivery Website', image: './Images/p6.png' },
    { id: 7, title: 'Bongo Website', image: './Images/p7.png' },
    { id: 8, title: 'Nike Shoes Website', image: './Images/p8.png' },
    { id: 9, title: 'Music Website', image: './Images/p9.png' }
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="holder mt-20">
        <div className="container">
          <div className='text-center text-white flex flex-col gap-3 justify-center items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold'>
              Our Impressive <span className='text-gradient'>Portfolio</span>
             </h1>
             <p className='md:w-[400px]'>Discover a showcase of our work that highlights our creativity and expertise. </p>
          </div>

          <div className="pagination mt-10 flex justify-center gap-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handleClick(index + 1)}
                className={`py-2 px-4 border-2 border-[#e193e8ceh] font-bold rounded-full ${currentPage === index + 1 ? 'bg-[#e193e8ceh] text-white' : 'bg-white text-purple-700'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="scroll-list grid grid-cols-1 mt-10 gap-10 md:gap-20 sm:grid-cols-2 md:grid-cols-3">
            {selectedProjects.map((project) => (
              <div
                key={project.id}
                style={{ backgroundImage: `url(${project.image})` }}
                className="scroll-item"
              >
                <div className="icons opacity-85">
                  <button className='flex flex-col gap-3'>
                    <h1 className='text-[16px] font-extrabold cursor-default'>{project.title}</h1>
                    {/* <div>
                    <h1 className='text-[16px] text-white font-extrabold cursor-default'>{project.title}</h1>
                    </div> */}
                  </button>
                  <br />
                  
                  
                </div>
                
                
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Portfolio;
