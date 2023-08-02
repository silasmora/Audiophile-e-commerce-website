import React, { useContext } from 'react'
import { Context } from '../Context'

const GoBackButton = () => {

  const {handleGoBack} = useContext(Context)
  return (
    <div className='text-[15px] text-black/50 font-medium leading-[25px] mx-6 md:mx-10 lg:mx-auto max-w-[1110px] pt-4 pb-6 md:pt-[33px] lg:pt-20 lg:pb-14'>
        <span 
          onClick={handleGoBack}
          className='cursor-pointer hover:text-orange'>Go Back</span>
    </div>
  )
}

export default GoBackButton