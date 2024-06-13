import React from 'react'

import Data from './data.json'
import Pricing_data_set from './Pricing_data_set';


const Pricing = () => {

    let items = [];

    items = Data.map((item,index) => <Pricing_data_set key={index} tag={item.tag} title={item.title} product={item.Product}
     price={item.price} desc={item.desc} s1={item.s1} s2={item.s2} s3={item.s3} s4={item.s4}
     s5={item.s5} s6={item.s6} s7={item.s7} />);
    
      return (
       <>
       
       <div className='mt-20 md:px-8 mx-3 sm:mx-3 md:mx-10'>
    
            <div className='text-center'>
    
                <h1 className='text-3xl font-serif font-semibold pb-3'>Our <span className='text-purple-700'>Pricing</span> Range</h1>
                <p className='text-center'>Check out the price range of our services. We create any type of website including e-commerce website at low cost</p>
            </div>
    
    
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
    
                
                    {items}
                
    
            </div>
    
    
       </div>
       
       </>
      )
}

export default Pricing
