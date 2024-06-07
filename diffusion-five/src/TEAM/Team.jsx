import React from 'react'

import Data from './data.json'
import Team_data from './Team_data';


const Team = () => {

    let items = [];

    items = Data.map((item,index) => <Team_data key={index} img={item.img} name={item.name} des={item.des} />);
    
      return (
       <>
       
       <div className='mt-20 md:px-12 mx-3 sm:mx-3 md:mx-24 lg:mx-24 xl:mx-24'>
    
            <div className='text-center'>
    
                <h1 className='text-3xl font-serif font-semibold pb-3'>Our Creative <span className='text-purple-700'>Team</span></h1>
                
            </div>
    
    
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
    
                
                   {items}
                   
                
    
            </div>
    
    
       </div>
       
       </>
      )
}

export default Team
