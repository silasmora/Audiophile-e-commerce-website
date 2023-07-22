import React from 'react'
import zx9Mobile from '/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import zx9Tablet from '/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx9Desktop from '/product-zx9-speaker/desktop/image-category-page-preview.jpg'

const Zx9Category = () => {
  return (
    <div className='flex flex-col mx-6 md:mx-10 lg:mx-auto max-w-[1110px] lg:flex-row lg:gap-28'>
      <img className='pb-8 md:hidden' src={zx9Mobile} />
      <img className='hidden md:block pb-12 lg:hidden' src={zx9Tablet} />
      <img className='hidden rounded-lg lg:block h-[560px]' src={zx9Desktop} />
      <div className='flex flex-col gap-6 md:gap-4 md:w-1/2 md:mx-auto lg:justify-center lg:w-[445px]'>
        <h3 className='uppercase text-orange text-sm text-center tracking-[10px] lg:text-left'>New product</h3>
        <h1 className='text-center text-[28px] font-bold tracking-[1px] uppercase md:text-[40px] md:leading-[44px] md:tracking-[1.4px] lg:text-left md:pb-4 lg:w-1/4'>ZX9 speaker</h1>
        <p className='text-center text-[15px] font-medium leading-[25px] opacity-50 indent-1 lg:text-left lg:indent-0 md:pb-2 lg:pb-4'>AUpgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
        system that offers truly wireless connectivity -- creating new possibilities for more 
        pleasing and practical audio setups.</p>
        <button className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold self-center lg:self-start hover:bg-orangeLight'>See product</button>
      </div>
    </div>
  )
}

export default Zx9Category