import React from 'react'
import Hero from '../components/Home/Hero'
import NavItems from '../components/Home/NavItems'
import Zx9Preview from '../components/Home/Zx9Preview'
import Zx7Preview from '../components/Home/Zx7Preview'
import Yx1Preview from '../components/Home/Yx1Preview'
import BestGear from '../components/Home/BestGear'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='bg-backgroundWhite w-screen'>
        <div className='pt-20'>
          <NavItems />
        </div>
        <Zx9Preview />
        <div className='py-6'>
          <Zx7Preview />
        </div> 
        <Yx1Preview /> 
        <div className='py-[120px] md:py-[96px] lg:py-[200px]'>
          <BestGear />
        </div>
      </div>

    </div>
  )
}

export default Home