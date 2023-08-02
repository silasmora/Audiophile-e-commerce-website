import React, { useContext, useEffect } from 'react'
import headphones from '/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from '/shared/desktop/image-category-thumbnail-earphones.png'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'

export const NavItemsModal = () => {

  const {isNavItemsModal ,setIsNavItemsModal} = useContext(Context)

  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isNavItemsModal && e.target.classList.contains('bg-black/75')) {
        setIsNavItemsModal(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    document.body.style.overflow = isNavItemsModal ? 'hidden' : 'auto'

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [isNavItemsModal, setIsNavItemsModal])



  return (
    <>
      {isNavItemsModal && (
        <div className='fixed left-0 right-0 bottom-0 top-[9%] flex flex-col bg-black/75 z-[100]'>
      
          <div className='flex flex-col p-6 gap-4 bg-backgroundWhite md:flex-row'>
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