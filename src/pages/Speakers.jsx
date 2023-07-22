import React from 'react'
import Zx9Category from '../components/Speakers/Zx9Category'
import Zx7Category from '../components/Speakers/Zx7Category'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'

const Speakers = () => {
  return (
    <>
      <div className='h-[102px] bg-black w-screen flex flex-col justify-center lg:h-[195px]'>
        <h1 className='text-center text-[28px] font-medium tracking-[2px] text-white uppercase lg:text-[40px] lg:font-bold lg:tracking-[1.4px]'>Speakers</h1>
      </div>
      <div className='bg-backgroundWhite w-screen flex flex-col pt-[64px] gap-[120px] md:pt-[120px] lg:gap-[160px] lg:py-[160px]'>
        <Zx9Category />
        <Zx7Category />
        <NavItems />
        <BestGear />
      </div>
    </>
  )
}

export default Speakers