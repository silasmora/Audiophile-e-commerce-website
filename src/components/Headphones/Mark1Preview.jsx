import React from 'react'
import mark1Mobile from '/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import mark1Tablet from '/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import mark1Desktop from '/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import { useNavigate } from 'react-router-dom'

const Mark1Preview = () => {

  const navigate = useNavigate()
  
  return (
    <div className='flex flex-col mx-6 md:mx-10 lg:mx-auto max-w-[1110px] lg:flex-row-reverse lg:gap-28'>
      <img className='pb-8 rounded-lg md:hidden' src={mark1Mobile} />
      <img className='hidden rounded-lg md:block pb-12 lg:hidden' src={mark1Tablet} />
      <img className='hidden rounded-lg lg:block h-[560px]' src={mark1Desktop} />
      <div className='flex flex-col gap-6 md:gap-4 md:w-4/5 md:mx-auto lg:justify-center'>
        <h1 className='text-center text-[28px] font-bold tracking-[1px] uppercase md:text-[40px] md:leading-[44px] md:tracking-[1.4px] lg:text-left md:pb-4'>XX99 Mark I Headphones</h1>
        <p className='text-center text-[15px] font-medium leading-[25px] opacity-50 indent-1 lg:text-left lg:indent-0 md:pb-2 lg:pb-4'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio 
        reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
        <button 
          onClick={() => navigate('/headphones/mark-i')}
          className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold self-center lg:self-start hover:bg-orangeLight'>See product</button>
      </div>
    </div>
  )
}

export default Mark1Preview