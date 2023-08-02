import React from 'react'
import Xx59AddtoCart from '../components/Xx59ProductPage/Xx59AddtoCart'
import Xx59Features from '../components/Xx59ProductPage/Xx59Features'
import Xx59Images from '../components/Xx59ProductPage/Xx59Images'
import Xx59YouMayAlsoLike from '../components/Xx59ProductPage/Xx59YouMayAlsoLike'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'

import GoBackButton from '../components/GoBackButton'

const Xx59 = () => {
  
  return (
    <div className='bg-backgroundWhite w-screen'>
      <GoBackButton />
      <div className='bg-backgroundWhite w-screen flex flex-col gap-[120px] lg:gap-[160px] lg:pb-[160px]'>
        <Xx59AddtoCart />
        <Xx59Features />
        <Xx59Images />
        <Xx59YouMayAlsoLike />
        <NavItems />
        <BestGear />
      </div>
    </div>
  )
}

export default Xx59