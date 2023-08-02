import React from 'react'
import yx1Mobile from '/home/mobile/image-earphones-yx1.jpg'
import yx1Tablet from '/home/tablet/image-earphones-yx1.jpg'
import yx1Desktop from '/home/desktop/image-earphones-yx1.jpg'
import { useNavigate } from 'react-router-dom'

const Yx1Preview = () => {

  const navigate = useNavigate()
  return (
    <div className='relative flex flex-col gap-6 mx-6 md:mx-10 lg:mx-auto max-w-[1110px] md:flex-row'>
      <img className='h-full w-full object-cover object-right rounded-lg md:hidden' src={yx1Mobile}/>
      <img className='hidden h-full w-full object-cover object-right rounded-lg md:block lg:hidden md:w-1/2' src={yx1Tablet} />
      <img className='hidden rounded-lg lg:block md:w-1/2' src={yx1Desktop} />
      <div className='bg-grayWhite pl-6 flex flex-col justify-center rounded-lg md:w-1/2 md:pl-10 lg:pl-16'>
        <h1 className='text-[28px] font-bold tracking-[2px] uppercase pb-8'>Yx1 Earphones</h1>
        <button 
          onClick={() => navigate('/earphones/yx1')}
          className='cursor-pointer w-40 h-12 border border-black bg-transparent px-[29px] uppercase tracking-[1px] text-[13px] font-bold hover:bg-black hover:text-white'>See product</button>
      </div>
    </div>
  )
}

export default Yx1Preview