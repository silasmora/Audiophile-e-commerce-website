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
        <div className='pt-12'>
        <NavItems />
        </div>
        <div className=''>
          <Zx9Preview />
        </div>
        <div className='py-12'>
          <Zx7Preview /> 
        </div>
        <div className=''>
          <Yx1Preview />  
        </div>
        <div>
          <BestGear />
        </div>
      </div>

    </div>
  )
}

export default Home