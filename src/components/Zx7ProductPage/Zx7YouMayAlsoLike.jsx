import React from 'react'

import zx9Mobile from '/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx9Tablet from '/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import zx9Desktop from '/product-zx9-speaker/desktop/image-category-page-preview.jpg'

import mark1Mobile from '/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import mark1Tablet from '/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import mark1Desktop from '/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'

import xx59Mobile from '/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import xx59Tablet from '/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import xx59Desktop from '/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import { useNavigate } from 'react-router-dom'

export const Zx7YouMayAlsoLike = () => {

  const navigate = useNavigate()
  return (
    <section className='flex flex-col max-w-[1110px] mx-6 md:mx-10 lg:mx-auto'>
      <h1 className='text-center text-black text-[24px] uppercase font-bold leading-[36px] tracking-[.8px] md:text-[32px] md:tracking-[1.14px] pb-10 md:pb-14 lg:pb-16'>You may also like</h1>

      <div className='flex flex-col gap-14 md:flex-row md:gap-4'>
        <div className='flex flex-col gap-8 items-center md:w-1/3'>
          <img className='rounded-lg md:hidden' src={zx9Mobile}/>
          <img className='hidden rounded-lg md:block lg:hidden' src={zx9Tablet} />
          <img className='hidden rounded-lg lg:block' src={zx9Desktop} />
          <p className='text-black text-[24px] uppercase font-bold tracking-[1.714px]'>Zx9 Speaker</p>
          <button
            onClick={() => navigate('/speakers/zx9')}  
            className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold hover:bg-orangeLight'>See product
          </button>  
        </div>
        
        <div className='flex flex-col gap-8 items-center md:w-1/3'>
          <img className='rounded-lg md:hidden' src={mark1Mobile}/>
          <img className='hidden rounded-lg md:block lg:hidden' src={mark1Tablet} />
          <img className='hidden rounded-lg lg:block' src={mark1Desktop} />
          <p className='text-black text-[24px] uppercase font-bold tracking-[1.714px]'>Xx99 Mark i</p>
          <button
            onClick={() => navigate('/headphones/mark-i')}  
            className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold hover:bg-orangeLight'>See product
          </button>  
        </div>

        <div className='flex flex-col gap-8 items-center md:w-1/3'>
          <img className='rounded-lg md:hidden' src={xx59Mobile}/>
          <img className='hidden rounded-lg md:block lg:hidden' src={xx59Tablet} />
          <img className='hidden rounded-lg lg:block' src={xx59Desktop} />
          <p className='text-black text-[24px] uppercase font-bold tracking-[1.714px]'>Xx59</p>
          <button
            onClick={() => navigate('/headphones/xx59')}  
            className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold hover:bg-orangeLight'>See product
          </button>  
        </div>
      </div>

    </section>
  )
}
