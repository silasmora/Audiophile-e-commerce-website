import React, { useContext } from 'react'
import productMobile from '/product-zx9-speaker/mobile/image-product.jpg'
import productTablet from '/product-zx9-speaker/tablet/image-product.jpg'
import productDesktop from '/product-zx9-speaker/desktop/image-product.jpg'
import { Context } from '../../Context'
import AddToCartButton from '../AddToCartButton'

const Zx9AddtoCart = () => {

  const {zx9Quantity, setZx9Quantity, addToCartZx9Speakers} = useContext(Context)

  const increment = () => {
    setZx9Quantity((prevState => prevState + 1))
  }
  const decrement = () => {
    if (zx9Quantity !== 1) {
      setZx9Quantity((prevState => prevState - 1))
    }
  }
  return (
    <section className='flex flex-col mx-6 md:mx-10 lg:mx-auto max-w-[1110px] md:flex-row md:items-center md:gap-16 lg:gap-28'>
        <img className='pb-8 rounded-lg md:hidden' src={productMobile} />
        <img className='hidden rounded-lg md:block w-[40%] lg:hidden' src={productTablet} />
        <img className='hidden rounded-lg lg:block h-[560px]' src={productDesktop} />
        <div className='flex flex-col gap-6 md:gap-4 md:w-4/5 md:mx-auto lg:justify-center'>
          <h3 className='uppercase text-orange text-sm text-left tracking-[10px] lg:pb-2'>New product</h3>
          <h1 className='text-[28px] font-bold tracking-[1px] uppercase leading-[32px] lg:text-[40px] lg:leading-[44px] lg:tracking-[1.4px] md:pb-4 md:w-1/2'>ZX9 Speaker</h1>
          <p className='text-left text-[15px] text-black/50 font-medium leading-[25px] md:pb-2 lg:pb-4'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
          system that offers truly wireless connectivity -- creating new possibilities for more 
          pleasing and practical audio setups.</p>
          <p className='text-[18px] font-bold tracking-[1.2]'>$ 4,500</p>
          <div className='flex gap-4'>
            <div className='flex items-center bg-grayWhite w-[120px] p-[15px]'>
              <span onClick={decrement} className='w-1/3 flex justify-center opacity-25 cursor-pointer hover:text-orange hover:opacity-100'>-</span>
              <span className='w-1/3 flex justify-center text-sm font-bold tracking-[1px]'>{zx9Quantity}</span>
              <span onClick={increment} className='w-1/3 flex justify-center opacity-25 cursor-pointer hover:text-orange hover:opacity-100'>+</span>
            </div>
            <AddToCartButton onClick={addToCartZx9Speakers}/>
          </div>
        </div>
    </section>
  )
}

export default Zx9AddtoCart