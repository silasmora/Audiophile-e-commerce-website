import React from 'react'
import bestgearMobile from '/shared/mobile/image-best-gear.jpg'
import bestgearTablet from '/shared/tablet/image-best-gear.jpg'
import bestgearDesktop from '/shared/desktop/image-best-gear.jpg'

const BestGear = () => {
  return (
    <div className='min-h-[698px] flex flex-col gap-8 mx-6 md:mx-10 lg:mx-auto max-w-[1110px] border border-black'>
      <img className='h-full w-full object-cover object-center rounded-lg md:hidden' src={bestgearMobile}/>
      <img className='hidden h-full w-full object-cover object-right rounded-lg md:block lg:hidden' src={bestgearTablet} />
      <img className='hidden h-full w-full object-cover object-right rounded-lg lg:block' src={bestgearDesktop} />
      <h1 className='text-center text-[28px] font-bold tracking-[1px] uppercase'>Bringing you the <span className='text-orange'>best</span> audio gear</h1>
      <p className='text-center text-[15px] font-medium leading-[25px] opacity-50 indent-1'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>
  )
}

export default BestGear