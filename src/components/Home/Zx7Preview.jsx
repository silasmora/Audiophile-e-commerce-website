import React from 'react'
import zx7Mobile from '/home/mobile/image-speaker-zx7.jpg'
import zx7Tablet from '/home/tablet/image-speaker-zx7.jpg'
import zx7Desktop from '/home/desktop/image-speaker-zx7.jpg'

const Zx7Preview = () => {
  return (
    <div className='relative h-[320px]  flex flex-col justify-center bg-gray-200 mx-6 md:mx-10 lg:mx-auto lg:max-w-[1110px]'> 
      <img className='absolute inset-0 mix-blend-multiply h-full w-full object-cover object-right rounded-lg md:hidden' src={zx7Mobile}/>
      <img className='hidden absolute inset-0 mix-blend-multiply h-full w-full object-cover object-right rounded-lg md:block lg:hidden' src={zx7Tablet} />
      <img className='hidden absolute inset-0 mix-blend-multiply h-full w-full object-cover object-right rounded-lg lg:block' src={zx7Desktop} />
      <div className='relative ml-6 md:ml-16'>
        <h1 className='text-[28px] font-bold tracking-[2px] uppercase pb-8'>zx7 Speaker</h1>
        <button className=' cursor-pointer w-40 h-12 border border-black bg-transparent px-[29px] uppercase tracking-[1px] text-[13px] font-bold hover:bg-black hover:text-white'>See product</button>
      </div>
    </div>
  )
}

export default Zx7Preview