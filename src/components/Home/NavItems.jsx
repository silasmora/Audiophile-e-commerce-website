import React, { useState } from 'react'
import headphones from '/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from '/shared/desktop/image-category-thumbnail-earphones.png'

const NavItems = () => {

  const [isHover, setIsHover] = useState(false)
  console.log(isHover)
  return (
    <div className='h-[683px] flex flex-col gap-4 max-w-[1110px] mx-6 md:mx-10 md:flex-row md:h-[217px] lg:h-[284px] lg:mx-auto'>
      
      <div
        onMouseEnter={() => setIsHover(true)} 
        onMouseLeave={() => setIsHover(false)}  
        className={`h-[217px] bg-backgroundWhite flex flex-col-reverse items-center relative md:w-1/3 cursor-pointer ${isHover ? 'hover:text-orange' : ''}`}>
        <img className='absolute top-0 w-40' src={headphones}/>
        <div className='h-[165px] w-full bg-grayWhite flex flex-col items-center justify-center rounded-lg'>
          <p className='text-black text-[15px] uppercase font-bold tracking-[1.071px] mt-12'>Headphones</p>
          <div className='flex items-center mt-4'>
            <a className='text-[13px] uppercase font-bold tracking-[1px] opacity-50' href="#">Shop</a>
            <svg className='ml-4' width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          </div>
        </div>
      </div>
      
      <div 
        onMouseEnter={() => setIsHover(true)} 
        onMouseLeave={() => setIsHover(false)} 
        className={`h-[217px] bg-backgroundWhite flex flex-col-reverse items-center relative md:w-1/3 cursor-pointer ${isHover ? 'hover:text-orange' : ''}`}>
        <img className='absolute top-0 w-40' src={speakers}/>
        <div className='h-[165px] w-full bg-grayWhite flex flex-col items-center justify-center rounded-lg'>
          <p className='text-black text-[15px] uppercase font-bold tracking-[1.071px] mt-12'>Headphones</p>
          <div className='flex items-center mt-4'>
            <a className='text-[13px] uppercase font-bold tracking-[1px] opacity-50' href="#">Shop</a>
            <svg className='ml-4' width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          </div>
        </div>
      </div>

      <div 
        onMouseEnter={() => setIsHover(true)} 
        onMouseLeave={() => setIsHover(false)}
        className={`h-[217px] bg-backgroundWhite flex flex-col-reverse items-center relative md:w-1/3 cursor-pointer ${isHover ? 'hover:text-orange' : ''}`}>
        <img className='absolute top-0 w-40' src={earphones}/>
        <div className='h-[165px] w-full bg-grayWhite flex flex-col items-center justify-center rounded-lg'>
          <p className='text-black text-[15px] uppercase font-bold tracking-[1.071px] mt-12'>Headphones</p>
          <div className='flex items-center mt-4'>
            <a className='text-[13px] uppercase font-bold tracking-[1px] opacity-50' href="#">Shop</a>
            <svg className='ml-4' width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavItems