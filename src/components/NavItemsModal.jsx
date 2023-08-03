import React, { useContext, useEffect, useState } from 'react'
import headphones from '/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from '/shared/desktop/image-category-thumbnail-earphones.png'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'

export const NavItemsModal = () => {

  const {isNavItemsModal ,setIsNavItemsModal} = useContext(Context)
  const [navItemsOpen, setNavItemsOpen] = useState(false)

  const navigate = useNavigate()

  //open the items modal from the left axis
  useEffect(() => {
    if (isNavItemsModal) {
      setNavItemsOpen(true);
    } else {
      setNavItemsOpen(false);
    }
  }, [isNavItemsModal])

  return (
    <>
      {isNavItemsModal && (
        <div className='absolute left-0 right-0 bottom-0 top-0 h-full bg-black/75 z-[100]'>
      
          <div className={`flex flex-col p-6 gap-4 bg-backgroundWhite md:flex-row transform ease-in-out duration-500 ${navItemsOpen ? '' : '-translate-x-full'}`}>
            <svg onClick={() => setIsNavItemsModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <div
              onClick={() => {
              setIsNavItemsModal(false); // Close the modal before navigating
              navigate('/headphones');
              }}  
              className='h-[217px] bg-backgroundWhite flex flex-col-reverse items-center relative md:w-1/3 cursor-pointer'>
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
              onClick={() => {
                setIsNavItemsModal(false)
                navigate('/speakers')
              }}
              className='h-[217px] bg-backgroundWhite flex flex-col-reverse items-center relative md:w-1/3 cursor-pointer'>
              <img className='absolute top-0 w-40' src={speakers}/>
              <div className='h-[165px] w-full bg-grayWhite flex flex-col items-center justify-center rounded-lg'>
                <p className='text-black text-[15px] uppercase font-bold tracking-[1.071px] mt-12'>Speakers</p>
                <div className='flex items-center mt-4'>
                  <a className='text-[13px] uppercase font-bold tracking-[1px] opacity-50' href="#">Shop</a>
                  <svg className='ml-4' width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
              </div>
            </div>
      
            <div 
              onClick={() => {
                setIsNavItemsModal(false)
                navigate('/earphones')
              }}
              className='h-[217px] bg-backgroundWhite flex flex-col-reverse items-center relative md:w-1/3 cursor-pointer'>
              <img className='absolute top-0 w-40' src={earphones}/>
              <div className='h-[165px] w-full bg-grayWhite flex flex-col items-center justify-center rounded-lg'>
                <p className='text-black text-[15px] uppercase font-bold tracking-[1.071px] mt-12'>Earphones</p>
                <div className='flex items-center mt-4'>
                  <a className='text-[13px] uppercase font-bold tracking-[1px] opacity-50' href="#">Shop</a>
                  <svg className='ml-4' width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
              </div>

            </div>
          </div>


        </div>
      )}
    </>
  )
}
