import React from 'react'
import Mark2Preview from '../components/Headphones/Mark2Preview'
import Mark1Preview from '../components/Headphones/Mark1Preview'
import Xx59Preview from '../components/Headphones/Xx59Preview'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'

const Headphones = () => {
  return (
    <>
      <div className='h-[102px] bg-black w-screen flex flex-col justify-center lg:h-[195px]'>
        <h1 className='text-center text-[28px] font-medium tracking-[2px] text-white uppercase lg:text-[40px] lg:font-bold lg:tracking-[1.4px]'>Headphones</h1>
      </div>
      <div className='bg-backgroundWhite w-screen flex flex-col pt-[64px] gap-[120px] md:pt-[120px] lg:gap-[160px] lg:py-[160px]'>
        <Mark2Preview />
        <Mark1Preview />
        <Xx59Preview />
        <NavItems />
        <BestGear />
      </div>
    </>
  )
}

export default Headphones