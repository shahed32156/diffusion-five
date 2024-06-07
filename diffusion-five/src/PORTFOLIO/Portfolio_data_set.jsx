import React from 'react'

const Portfolio_data_set = (props) => {

const {img, title} = props;

  return (

    <a href="#">

            <div className='h-[470px] py-10 w-full md:w-[400px] px-6 border-[1px] rounded-lg shadow-xl md:hover:transition md:hover:duration-500 md:hover:scale-110 border-purple-700 mx-auto'>
                    
                    

                    <div className='pb-3 image-container'>
                        <img className='mx-auto h-[200px] w-[200px] rounded-md scroll-image' src={img} alt="" />
                    </div>
                    <h2 className='text-center pb-3 font-bold text-purple-700 text-[20px]'>{title}</h2>
                  

                

            </div>

    </a>

  )
}

export default Portfolio_data_set
