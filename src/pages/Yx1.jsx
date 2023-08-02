import React from 'react'
import Yx1AddtoCart from '../components/Yx1ProductPage/Yx1AddtoCart'
import Yx1Features from '../components/Yx1ProductPage/Yx1Features'
import Yx1Images from '../components/Yx1ProductPage/Yx1Images'
import Yx1YouMayAlsoLike from '../components/Yx1ProductPage/Yx1YouMayAlsoLike'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'
import GoBackButton from '../components/GoBackButton'

const Yx1 = () => {

  return (
    <div className='bg-backgroundWhite w-screen'>
      <GoBackButton />
      <div className='bg-backgroundWhite w-screen flex flex-col gap-[120px] lg:gap-[160px] lg:pb-[160px]'>
        <Yx1AddtoCart />
        <Yx1Features />
        <Yx1Images />
        <Yx1YouMayAlsoLike />
        <NavItems />
        <BestGear />
      </div>
    </div>
  )
}

export default Yx1