import React, { useState } from 'react'


const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Services",link:"/"},
      {name:"Pricing",link:"/"},
      {name:"Portfolio",link:"/"},
      {name:"Team",link:"/"},
      {name:"About",link:"/"},
      {name:"Contact",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-black py-6 md:px-10 px-3'>
      <div className='cursor-pointer flex items-center justify-between font-[Poppins] '>
        
        <a href="#" className='uppercase font-[Infographic] text-white text-[22px] font-bold'><span className=' text-purple-700'>diffusion</span>five</a>
        <div onClick={()=>setOpen(!open)} className='mt-[10px] text-3xl pt-1 pb-1 px-2 bg-black text-white cursor-pointer md:hidden'>
           <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
      </div>
      
      

      <ul className={`md:flex md:items-center md:pb-0  bg-black absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-[18px] md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-purple-700 hover:transition duration-[400ms]'>{link.name}</a>
            </li>
          ))
        }
       
      </ul>
      </div>
    </div>
  )
}

export default Nav