import React, { useContext } from 'react'
import productMobile from '/product-xx59-headphones/mobile/image-product.jpg'
import productTablet from '/product-xx59-headphones/tablet/image-product.jpg'
import productDesktop from '/product-xx59-headphones/desktop/image-product.jpg'
import { Context } from '../../Context'
import AddToCartButton from '../AddToCartButton'

const Xx59AddtoCart = () => {

  const {xx59Quantity, setXx59Quantity, addToCartXx59Headphones} = useContext(Context)

  const increment = () => {
    setXx59Quantity((prevState => prevState + 1))
  }
  const decrement = () => {
    if (xx59Quantity !== 1) {
      setXx59Quantity((prevState => prevState - 1))
    }
  }
  return (
    <section className='flex flex-col mx-6 md:mx-10 lg:mx-auto max-w-[1110px] md:flex-row md:items-center md:gap-16 lg:gap-28'>
        <img className='pb-8 rounded-lg md:hidden' src={productMobile} />
        <img className='hidden rounded-lg md:block w-[40%] lg:hidden' src={productTablet} />
        <img className='hidden rounded-lg lg:block h-[560px]' src={productDesktop} />
        <div className='flex flex-col gap-6 md:gap-4 md:w-4/5 md:mx-auto lg:justify-center'>
          <h1 className='text-[28px] font-bold tracking-[1px] uppercase leading-[32px] lg:text-[40px] lg:leading-[44px] lg:tracking-[1.4px] md:pb-4 md:w-1/2'>Xx59 Headphones</h1>
          <p className='text-left text-[15px] text-black/50 font-medium leading-[25px] md:pb-2 lg:pb-4'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. 
          The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <p className='text-[18px] font-bold tracking-[1.2]'>$ 899</p>
          <div className='flex gap-4'>
            <div className='flex items-center bg-grayWhite w-[120px] p-[15px]'>
              <span onClick={decrement} className='w-1/3 flex justify-center opacity-25 cursor-pointer hover:text-orange hover:opacity-100'>-</span>
              <span className='w-1/3 flex justify-center text-sm font-bold tracking-[1px]'>{xx59Quantity}</span>
              <span onClick={increment} className='w-1/3 flex justify-center opacity-25 cursor-pointer hover:text-orange hover:opacity-100'>+</span>
            </div>
            <AddToCartButton onClick={addToCartXx59Headphones}/>
          </div>
        </div>
    </section>
  )
}

export default Xx59AddtoCart