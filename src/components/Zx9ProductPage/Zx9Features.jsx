import React, { useContext } from 'react'
import { Context } from '../../Context'

const Zx9Features = () => {

  const {audiophileData} = useContext(Context)
  const zx9Data = audiophileData?.find(element => element.id === 6)

  return (
    <section className='flex flex-col gap-[88px] mx-6 md:mx-10 lg:flex-row lg:mx-auto max-w-[1110px]'>
      <div className='lg:w-[57%]'>
        <h3 className='text-[24px] font-bold leading-9 tracking-[.85px] uppercase lg:pb-6'>Features</h3>
        <p 
          className='text-[15px] font-medium leading-6 opacity-50'  
          dangerouslySetInnerHTML={{ __html: zx9Data?.features.replace(/\n/g, '<br>') }} />
      </div>
      
      <div className='md:flex lg:flex-col'>
        <h3 className='text-[24px] font-bold leading-9 tracking-[.85px] uppercase md:w-1/2 lg:w-full'>In the box</h3>
        <div className='pt-6 flex flex-col gap-2 md:pt-0 lg:pt-6'>
          <p className='text-[15px] leading-6 font-bold text-orange'>2x<span className='text-black font-medium opacity-50 ml-[21px]'>Speaker Unit</span></p>
          <p className='text-[15px] leading-6 font-bold text-orange'>2x<span className='text-black font-medium opacity-50 ml-[21px]'>Speaker Cloth Panel</span></p>
          <p className='text-[15px] leading-6 font-bold text-orange'>1x<span className='text-black font-medium opacity-50 ml-6'>User Manual</span></p>
          <p className='text-[15px] leading-6 font-bold text-orange'>1x<span className='text-black font-medium opacity-50 ml-6'>3.5mm 5m Audio Cable</span></p>
          <p className='text-[15px] leading-6 font-bold text-orange'>1x<span className='text-black font-medium opacity-50 ml-6'>10m Optical Cable</span></p>
        </div>
      </div>
    </section>
  )
}

export default Zx9Features