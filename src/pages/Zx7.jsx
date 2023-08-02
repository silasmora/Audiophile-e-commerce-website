import React from 'react'
import Zx7AddtoCart from '../components/Zx7ProductPage/Zx7AddtoCart'
import Zx7Features from '../components/Zx7ProductPage/Zx7Features'
import Zx7Images from '../components/Zx7ProductPage/Zx7Images'
import { Zx7YouMayAlsoLike } from '../components/Zx7ProductPage/Zx7YouMayAlsoLike'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'
import GoBackButton from '../components/GoBackButton'

const Zx7 = () => {

  return (
    <div className='bg-backgroundWhite w-screen'>
      <GoBackButton />
      <div className='bg-backgroundWhite w-screen flex flex-col gap-[120px] lg:gap-[160px] lg:pb-[160px]'>
        <Zx7AddtoCart />
        <Zx7Features />
        <Zx7Images />
        <Zx7YouMayAlsoLike />
        <NavItems />
        <BestGear />
      </div>
    </div>
  )
}

export default Zx7