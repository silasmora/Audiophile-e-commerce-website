import React from 'react'
import Mark1AddtoCart from '../components/Mark1ProductPage/Mark1AddtoCart'
import Mark1Features from '../components/Mark1ProductPage/Mark1Features'
import Mark1Images from '../components/Mark1ProductPage/Mark1Images'
import Mark1YouMayAlsoLike from '../components/Mark1ProductPage/Mark1YouMayAlsoLike'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'
import GoBackButton from '../components/GoBackButton'

const Mark1 = () => {

  return (
    <div className='bg-backgroundWhite w-screen'>
      <GoBackButton />
      <div className='bg-backgroundWhite w-screen flex flex-col gap-[120px] lg:gap-[160px] lg:pb-[160px]'>
        <Mark1AddtoCart />
        <Mark1Features />
        <Mark1Images />
        <Mark1YouMayAlsoLike />
        <NavItems />
        <BestGear />
      </div>
    </div>
  )
}

export default Mark1