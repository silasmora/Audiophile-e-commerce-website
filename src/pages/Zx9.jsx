import React from 'react'
import Zx9AddtoCart from '../components/Zx9ProductPage/Zx9AddtoCart'
import Zx9Features from '../components/Zx9ProductPage/Zx9Features'
import Zx9Images from '../components/Zx9ProductPage/Zx9Images'
import Zx9YouMayAlsoLike from '../components/Zx9ProductPage/Zx9YouMayAlsoLike'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'
import GoBackButton from '../components/GoBackButton'

export const Zx9 = () => {

  return (
    <div className='bg-backgroundWhite w-screen'>
      <GoBackButton />
      <div className='bg-backgroundWhite w-screen flex flex-col gap-[120px] lg:gap-[160px] lg:pb-[160px]'>
        <Zx9AddtoCart />
        <Zx9Features />
        <Zx9Images />
        <Zx9YouMayAlsoLike />
        <NavItems />
        <BestGear />
      </div>
    </div>
  )
}
