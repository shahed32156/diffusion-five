import React from 'react'



const Team_data= (props) => {
   

    const {img, name, des} = props;

  return (

    <div>
      
      <div className='pt-14 pb-10 w-full md:w-[400px] px-6 border-[1px] rounded-lg shadow-xl mx-auto'>
                    
          
                   <div className='pb-3'>
                     <img className='mx-auto  h-[200px] w-[200px] rounded-full' src={img} alt="" />
                   </div>
                    <h2 className='text-center py-3 font-bold bg-purple-500 text-white text-[20px]'>{name}</h2>
                    <p className='text-center pt-2 font-semibold'>{des}</p>
                  

                

    </div>

    </div>

  )
}

export default Team_data
