import React from 'react'
import { useState } from 'react'
import productMobile from '/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import productTablet from '/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import productDesktop from '/product-xx99-mark-two-headphones/desktop/image-product.jpg'

const AddtoCartSection = () => {

  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity((prevState => prevState + 1))
  }
  const decrement = () => {
    setQuantity((prevState => prevState - 1))
  }

  return (
    <div className='flex flex-col mx-6 md:mx-10 lg:mx-auto max-w-[1110px] md:flex-row md:items-center md:gap-16 lg:gap-28'>
        <img className='pb-8 rounded-lg md:hidden' src={productMobile} />
        <img className='hidden rounded-lg md:block w-[40%] lg:hidden' src={productTablet} />
        <img className='hidden rounded-lg lg:block h-[560px]' src={productDesktop} />
        <div className='flex flex-col gap-6 md:gap-4 md:w-4/5 md:mx-auto lg:justify-center'>
          <h3 className='uppercase text-orange text-sm text-left tracking-[10px] lg:pb-2'>New product</h3>
          <h1 className='text-[28px] font-bold tracking-[1px] uppercase leading-[32px] lg:text-[40px] lg:leading-[44px] lg:tracking-[1.4px] md:pb-4'>XX99 Mark II Headphones</h1>
          <p className='text-left text-[15px] font-medium leading-[25px] opacity-50 md:pb-2 lg:pb-4'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium 
          headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <p className='text-[18px] font-bold tracking-[1.2]'>$ 2,999</p>
          <div className='flex gap-4'>
            <div className='flex items-center bg-grayWhite w-[120px] p-[15px]'>
              <span onClick={decrement} className='w-1/3 flex justify-center opacity-25 cursor-pointer hover:text-orange hover:opacity-100'>-</span>
              <span className='w-1/3 flex justify-center text-sm font-bold tracking-[1px]'>{quantity}</span>
              <span onClick={increment} className='w-1/3 flex justify-center opacity-25 cursor-pointer hover:text-orange hover:opacity-100'>+</span>
            </div>
            <button
              className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold hover:bg-orangeLight'>Add to cart
            </button>
          </div>
        </div>
    </div>
  )
}

export default AddtoCartSection