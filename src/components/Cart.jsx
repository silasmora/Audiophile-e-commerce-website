import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import { useNavigate } from 'react-router-dom'
import { RemoveProductModal } from './RemoveProductModal'

const Cart = () => {

  const {cartItems, setCartItems, isCart, setIsCart, formattedTotal, totalQuantity} = useContext(Context)
  const [isRemoveProductModal, setIsRemoveProductModal] = useState(false)
  const navigate = useNavigate()
  
  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems]
    updatedCartItems.splice(index, 1)
    setCartItems(updatedCartItems)
    if (updatedCartItems.length === 0) {
      setIsCart(false)
    }
  }

  const handleDecrease = (index) => {
    const updatedCart = [...cartItems]
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--
      setCartItems(updatedCart)
    }
  }

  const handleIncrease = (index) => {
    const updatedCart = [...cartItems]
    updatedCart[index].quantity++
    setCartItems(updatedCart)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click occurred outside the cart area
      if (isCart && e.target.classList.contains('bg-black/75')) {
        setIsCart(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.body.style.overflow = isCart ? "hidden" : "auto";

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = "auto"
    };
  }, [isCart, setIsCart])

  // State to track whether the cart is open or closed
  const [cartOpen, setCartOpen] = useState(false);

  // Open the cart when 'isCart' is true and there are items in the cart
  useEffect(() => {
    if (isCart && totalQuantity) {
      setCartOpen(true);
    } else {
      setCartOpen(false);
    }
  }, [isCart, totalQuantity])

  const handleCheckout = () => {
    setIsCart(false)
    navigate('/checkout')
  }

  return (
    <>
      {isCart && totalQuantity ? (
        <div className='p-6 fixed inset-0 bg-black/75 z-[100]'>
          
          <div className={`bg-white px-[28px] py-8 flex flex-col gap-8 md:w-1/2 md:absolute transform 
          ${cartOpen ? 'right-5 translate-x-0' : '-right-full translate-x-full'} lg:max-w-[377px] lg:right-0 lg:top-0 lg:h-screen ease-in-out duration-500`}>
            <div className='flex justify-between'>
              <h1 className='text-[18px] font-bold tracking-[1.286px] uppercase'>Cart <span>({totalQuantity})</span></h1>
              <p 
                onClick={() => setIsRemoveProductModal(true)}
                className='text-[15px] font-medium leading-6 underline opacity-50 cursor-pointer'>Remove All</p>
            </div>

            {cartItems.map((item, index) => (
              <div key={index} className='relative flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                  <img className='h-16 w-16 rounded-lg' src={item.image}/>
                  <div>
                    <h3 className='text-[15px] font-bold leading-6'>{item.name}</h3>
                    <p className='text-[14px] font-bold leading-6 opacity-50'>$ {item.price}</p>
                    <span 
                      onClick={() => handleRemoveItem(index)}
                      className='text-[13px] font-medium underline cursor-pointer'>Remove</span>
                  </div>
                </div>
                <div className='flex items-center bg-grayWhite w-[96px] py-2 px-2'>
                  <span onClick={() => handleDecrease(index)}  className='w-1/3 flex justify-center opacity-25 cursor-pointer hover:text-orange hover:opacity-100'>-</span>
                  <span className='w-1/3 flex justify-center text-sm font-bold tracking-[1px]'>{item.quantity}</span>
                  <span onClick={() => handleIncrease(index)} className='w-1/3 flex justify-center opacity-25 cursor-pointer hover:text-orange hover:opacity-100'>+</span>
                </div>
            </div>
            ))}

            <div className='flex justify-between items-center'>
              <p className='text-[15px] text-black/50 font-medium leading-6 uppercase'>Total</p>
              <p className='text-[18px] font-bold uppercase'>${formattedTotal}</p>
            </div>
            <button
              onClick={() => setIsCart(false)} 
              className='text-[13px] font-bold tracking-[1px] uppercase text-black border border-inputGray bg-transparent py-[15px] px-10 cursor-pointer -mt-2 hover:border-black'>Continue Shopping</button>
            <button 
              onClick={handleCheckout}
              className='text-[13px] font-bold tracking-[1px] uppercase text-white bg-orange py-[15px] px-10 cursor-pointer -mt-6 hover:bg-orangeLight'>Checkout</button>
          </div>
        </div>
        )
        : null}
        <RemoveProductModal isRemoveProductModal={isRemoveProductModal} setIsRemoveProductModal={setIsRemoveProductModal}/>
    </>
  )
}

export default Cart