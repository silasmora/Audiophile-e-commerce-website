import React from 'react'
import zx7Mobile from '/product-zx7-speaker/mobile/image-category-page-preview.jpg'
import zx7Tablet from '/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx7Desktop from '/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import { useNavigate } from 'react-router-dom'

const Zx7Category = () => {
  
  const navigate = useNavigate()

  return (
    <div className='flex flex-col mx-6 md:mx-10 lg:mx-auto max-w-[1110px] lg:flex-row-reverse lg:gap-28'>
      <img className='pb-8 md:hidden' src={zx7Mobile} />
      <img className='hidden md:block pb-12 lg:hidden' src={zx7Tablet} />
      <img className='hidden lg:block h-[560px]' src={zx7Desktop} />
      <div className='flex flex-col gap-6 md:gap-4 md:w-4/5 md:mx-auto lg:justify-center lg:w-[445px]'>
        <h1 className='text-center text-[28px] font-bold tracking-[1px] uppercase md:text-[40px] md:leading-[44px] md:tracking-[1.4px] lg:text-left md:pb-4 lg:w-1/4'>ZX7 speaker</h1>
        <p className='text-center text-[15px] font-medium leading-[25px] opacity-50 indent-1 lg:text-left lg:indent-0 md:pb-2 lg:pb-4'>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses 
        high-end audiophile components that represents the top of the line powered speakers for 
        home or studio use.</p>
        <button 
          onClick={() => navigate('/speakers/zx7')}
          className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold self-center lg:self-start hover:bg-orangeLight'>See product</button>
      </div>
    </div>
  )
}

export default Zx7Category