import React from 'react'
import Yx1Category from '../components/Earphones/Yx1Category'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'

const Earphones = () => {
  return (
    <>
      <div className='h-[102px] bg-black w-screen flex flex-col justify-center lg:h-[195px]'>
        <h1 className='text-center text-[28px] font-medium tracking-[2px] text-white uppercase lg:text-[40px] lg:font-bold lg:tracking-[1.4px]'>Earphones</h1>
      </div>
      <div className='bg-backgroundWhite w-screen flex flex-col pt-[64px] gap-[120px] md:pt-[120px] lg:gap-[160px] lg:py-[160px]'>
        <Yx1Category />
        <NavItems />
        <BestGear />
      </div>
    </>
  )
}

export default Earphones