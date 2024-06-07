// import React from 'react'

// import Data from './data.json'
// import Portfolio_data_set from './Portfolio_data_set';


// const Portfolio = () => {

// let items = [];

// items = Data.map((item,index) => <Portfolio_data_set key={index} img={item.img} title={item.title} />);

//   return (
//    <>
   
//    <div className='mt-20 mx-3 md:mx-0'>

//         <div className='text-center'>

//             <h1 className='text-3xl font-serif font-semibold'>Our Some Work <span className='text-purple-700'> Portolio</span></h1>

//         </div>


//         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>

            
//                 {items}
            

//         </div>


//    </div>
   
//    </>
//   )
// }

// export default Portfolio

import React from 'react'

const Portfolio = () => {
  return (
    <>
    
    <div className = "holder mt-20">
        <div className = "container">
            

                <div className='text-center'>

                    <h1 className='text-3xl font-serif font-semibold'>Some Work <span className='text-purple-700'> Portolio</span></h1>

                 </div>


            <div className = "scroll-list grid grid-cols-1 mt-10 gap-10 md:gap-20 sm:grid-cols-2 md:grid-cols-3">

                <div style={{ "backgroundImage": "url('./Images/p1.png')"}} className = "scroll-item">
                    <div className = "icons">
                        <button type = "button">
                            <h1 className='text-[16px] font-extrabold'>Travel Website</h1>
                        </button>
                      
                    </div>
                </div>

                <div style={{ "backgroundImage": "url('./Images/p2.png')"}} className = "scroll-item">
                    <div className = "icons">
                        <button type = "button">
                                <h1 className='text-[16px] font-extrabold'>E-commerce Website</h1>
                        </button>
                    </div>
                </div>

                <div style={{ "backgroundImage": "url('./Images/p3.png')"}} className = "scroll-item">
                    <div className = "icons">
                        <button type = "button">
                                <h1 className='text-[16px] font-extrabold'>Food Delivery Website</h1>
                        </button>
                        
                    </div>
                </div>

                <div style={{ "backgroundImage": "url('./Images/p4.png')"}} className = "scroll-item">
                    <div className = "icons">
                        <button type = "button">
                                <h1 className='text-[16px] font-extrabold'>E-commerce Website</h1>
                        </button>
                        
                    </div>
                </div>

                <div style={{ "backgroundImage": "url('./Images/p5.png')"}} className = "scroll-item">
                    <div className = "icons">
                        <button type = "button">
                                <h1 className='text-[16px] font-extrabold'>Google Classroom Website</h1>
                        </button>
                        
                    </div>
                </div>

                <div style={{ "backgroundImage": "url('./Images/p6.png')"}} className = "scroll-item">
                    <div className = "icons">
                        <button type = "button">
                                <h1 className='text-[16px] font-extrabold'>Hotel Booking Website</h1>
                        </button>
                        
                    </div>
                </div>



            </div>
        </div>
    </div>

    
    </>
  )
}

export default Portfolio


