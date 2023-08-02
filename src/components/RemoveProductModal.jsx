import React, { useContext } from 'react'
import { Context } from '../Context'

export const RemoveProductModal = ({isRemoveProductModal, setIsRemoveProductModal}) => {

  const {cartItems, setCartItems, setIsCart} = useContext(Context)

  const clearCart = () => {
    setCartItems([])
    setIsCart(false)
    setIsRemoveProductModal()
    document.body.style.overflow = "auto"
  }
  return (
    <>
      {isRemoveProductModal && (
        <div className='p-6 fixed inset-0 flex flex-col justify-start bg-black/75 md:z-[100]'>
          <div className='bg-white p-6 md:w-[540px] md:mx-auto'>
            <h1 className='text-md font-bold leading-7 tracking-[.857px] uppercase pb-4 md:text-xl md:leading-9 md:tracking-[1.143px]'>Remove Product(s)?</h1>
            <p className='text-black/50 font-sm leading-6 pb-4'>Are you sure you want remove the following item(s) from the cart?</p>
            {cartItems.map((item, index) => (
              <div key={index} className='flex gap-4'>
                <h3 className='text-[15px] font-bold leading-6'>{item.name}</h3>
              </div>
            ))}
            <div className='flex flex-col gap-2 lg:flex-row pt-4'>
              <button
                onClick={() => setIsRemoveProductModal(false)}
                className='text-[13px] font-bold tracking-[1px] uppercase text-black border border-inputGray bg-transparent py-[15px] px-10 cursor-pointer hover:border-black mr-2 w-full lg:w-1/2'>Cancel</button>
              <button
                onClick={clearCart}
                className='text-[13px] font-bold tracking-[1px] uppercase text-white bg-orange py-[15px] px-10 cursor-pointer  hover:bg-orangeLight lg:w-1/2'>Yes</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
