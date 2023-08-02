import React from 'react'
import Mark2AddtoCart from '../components/Mark2ProductPage/Mark2AddtoCart'
import Mark2Features from '../components/Mark2ProductPage/Mark2Features'
import Mark2Images from '../components/Mark2ProductPage/Mark2Images'
import Mark2YouMayAlsoLike from '../components/Mark2ProductPage/Mark2YouMayAlsoLike'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'
import GoBackButton from '../components/GoBackButton'

const Mark2 = () => {

  return (
    <div className='bg-backgroundWhite w-screen'>
      <GoBackButton />
      <div className='bg-backgroundWhite w-screen flex flex-col gap-[120px] lg:gap-[160px] lg:pb-[160px]'>
        <Mark2AddtoCart />
        <Mark2Features />
        <Mark2Images />
        <Mark2YouMayAlsoLike />
        <NavItems />
        <BestGear />
      </div>
    </div>
  )
}

export default Mark2