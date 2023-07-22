import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddtoCartSection from '../components/Xx99ProductDetail/AddtoCartSection'
import FeaturesSection from '../components/Xx99ProductDetail/FeaturesSection'
import ImagesSection from '../components/Xx99ProductDetail/imagesSection'
import YouMayAlsoLikeSection from '../components/Xx99ProductDetail/YouMayAlsoLikeSection'
import NavItems from '../components/Home/NavItems'
import BestGear from '../components/Home/BestGear'



const Xx99ProductDetail = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-backgroundWhite w-screen'>
      <div
        onClick={() => navigate('/headphones')}
        className='text-[15px] font-medium leading-[25px] opacity-50 mx-6 md:mx-10 lg:mx-auto max-w-[1110px] pt-4 pb-6 md:pt-[33px] lg:pt-20 lg:pb-14'>Go Back
      </div>
      <div className='bg-backgroundWhite w-screen flex flex-col gap-[120px] lg:gap-[160px] lg:pb-[160px]'>
        <AddtoCartSection />
        <FeaturesSection />
        <ImagesSection />
        <YouMayAlsoLikeSection />
        <NavItems />
        <BestGear />
      </div>
    </div>
  )
}

export default Xx99ProductDetail