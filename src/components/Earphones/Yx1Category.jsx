import React from 'react'
import yx1Mobile from '/product-yx1-earphones/mobile/image-category-page-preview.jpg'
import yx1Tablet from '/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import yx1Desktop from '/product-yx1-earphones/desktop/image-category-page-preview.jpg'

const Yx1Category = () => {
  return (
    <div className='flex flex-col mx-6 md:mx-10 lg:mx-auto max-w-[1110px] lg:flex-row lg:gap-28'>
      <img className='pb-8 md:hidden' src={yx1Mobile} />
      <img className='hidden md:block pb-12 lg:hidden' src={yx1Tablet} />
      <img className='hidden rounded-lg lg:block h-[560px]' src={yx1Desktop} />
      <div className='flex flex-col gap-6 md:gap-4 md:w-1/2 md:mx-auto lg:justify-center lg:w-[445px]'>
        <h3 className='uppercase text-orange text-sm text-center tracking-[10px] lg:text-left'>New product</h3>
        <h1 className='text-center text-[28px] font-bold tracking-[1px] uppercase md:text-[40px] md:leading-[44px] md:tracking-[1.4px] lg:text-left md:pb-4 lg:w-1/4'>YX1 wireless earphones</h1>
        <p className='text-center text-[15px] font-medium leading-[25px] opacity-50 indent-1 lg:text-left lg:indent-0 md:pb-2 lg:pb-4'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
        <button className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold self-center lg:self-start hover:bg-orangeLight'>See product</button>
      </div>
    </div>
  )
}

export default Yx1Category