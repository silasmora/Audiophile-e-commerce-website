import React from 'react'
import xx59Mobile from '/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import xx59Tablet from '/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import xx59Desktop from '/product-xx59-headphones/desktop/image-category-page-preview.jpg'

const Xx59Preview = () => {
  return (
    <div className='flex flex-col mx-6 md:mx-10 lg:mx-auto max-w-[1110px] lg:flex-row lg:gap-28'>
      <img className='pb-8 rounded-lg md:hidden' src={xx59Mobile} />
      <img className='hidden rounded-lg md:block pb-12 lg:hidden' src={xx59Tablet} />
      <img className='hidden rounded-lg lg:block h-[560px]' src={xx59Desktop} />
      <div className='flex flex-col gap-6 md:gap-4 md:w-4/5 md:mx-auto lg:justify-center'>
        <h1 className='text-center text-[28px] font-bold tracking-[1px] uppercase md:text-[40px] md:leading-[44px] md:tracking-[1.4px] lg:text-left md:pb-4'>XX59 Headphones</h1>
        <p className='text-center text-[15px] font-medium leading-[25px] opacity-50 indent-1 lg:text-left lg:indent-0 md:pb-2 lg:pb-4'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. 
        The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
        <button className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold self-center lg:self-start hover:bg-orangeLight'>See product</button>
      </div>
    </div>
  )
}

export default Xx59Preview