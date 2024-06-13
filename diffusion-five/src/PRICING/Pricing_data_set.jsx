
import React from 'react'
import { Link } from 'react-scroll';

const Pricing_data_set = (props) => {


const {tag, title, product, price, desc, s1, s2, s3, s4, s5, s6,s7 } = props

  return (


            <div className='pb-10 h-full w-full border-[1px] rounded-lg shadow-xl border-purple-700 mx-auto'>
                    
                    <div className='bg-purple-500 py-4 relative'>
                        
                        <img className='h-[30px] w-[100px] top-0 md:-rotate-45 absolute md:top-4 md:-left-6' src={tag} alt="" />
                        <div>
                            <h2 className='mt-3 text-center pb-3 font-bold text-white text-[20px]'>{title}</h2>
                            <p className='text-center font-bold'>{product}</p>
                        </div>

                    </div>

                    <div className='mt-3'>
                        <h1 className='text-center text-[30px] md:text-[22px] lg:text-[30px] font-extrabold text-[tomato]'>{price}</h1>
                        <p className='text-center pb-3'>{desc}</p>
                        <p className='text-center font-medium border-b-[1px] pb-2 mx-14 border-b-[#bbbbbb]'>{s1}</p>
                        <p className='text-center font-medium border-b-[1px] pt-2 pb-2 mx-14 border-b-[#bbbbbb]'>{s2}</p>
                        <p className='text-center font-medium border-b-[1px] pt-2 pb-2 mx-14 border-b-[#bbbbbb]'>{s3}</p>
                        <p className='text-center font-medium border-b-[1px] pt-2 pb-2 mx-14 border-b-[#bbbbbb]'>{s4}</p>
                        <p className='text-center font-medium border-b-[1px] pt-2 pb-2 mx-14 border-b-[#bbbbbb]'>{s5}</p>
                        <p className='text-center font-medium border-b-[1px] pt-2 pb-2 mx-14 border-b-[#bbbbbb]'>{s6}</p>
                        <div className='mt-6 flex justify-center items-center'>
                        <a className='border-purple-500 border-2 py-2 px-8 rounded-md md:hover:border-purple-500 font-semibold hover:text-white hover:bg-purple-500 hover:transition hover:duration-[400ms] cursor-pointer'><Link to="book" smooth={true} duration={500}>Book for order</Link></a>
                        </div>
                    </div>

                

            </div>



  )
}

export default Pricing_data_set
