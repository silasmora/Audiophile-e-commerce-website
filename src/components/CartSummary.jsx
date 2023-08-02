import React, { useContext } from 'react'
import { Context } from '../Context'
import CheckoutModal from './CheckoutModal'

const CartSummary = () => {

  const {cartItems, cartTotal, formattedTotal} = useContext(Context)

  const shippingCost = 50.0
  const vat = 0.2 * cartTotal
  const formattedVat = vat.toFixed(2)
  const grandTotal = () => {
    const totalWithVatAndShipping = cartTotal + shippingCost
    return totalWithVatAndShipping.toFixed(2)
  }
  return (
      <>
        <h1 className='text-[18px] font-bold tracking-[1.286px] uppercase pb-8'>Summary</h1>
          
        {cartItems.map((item, index) => (
          <div key={index} className='relative flex justify-between items-center pb-6'>
            <div className='flex gap-4 items-center'>
              <img className='h-16 w-16 rounded-lg' src={item.image}/>
              <div>
                <h3 className='text-[15px] font-bold leading-6'>{item.name}</h3>
                <p className='text-[14px] font-bold leading-6 opacity-50'>$ {item.price}</p>
              </div>
            </div>
            <p className='text-black/50 text-[15px] font-bold leading-6'>x{item.quantity}</p>
          </div>
        ))}

        <div className='flex justify-between items-center pt-2'>
          <p className='text-[15px] text-black/50 font-medium leading-6 uppercase'>Total</p>
          <p className='text-[18px] font-bold uppercase'>${formattedTotal}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-[15px] text-black/50 font-medium leading-6 uppercase py-2'>Shipping</p>
          <p className='text-[18px] font-bold uppercase'>${shippingCost}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-[15px] text-black/50 font-medium leading-6 uppercase'>VAT (Included)</p>
          <p className='text-[18px] font-bold uppercase'>${formattedVat}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-[15px] text-black/50 font-medium leading-6 uppercase pt-6 pb-8'>Grand Total</p>
          <p className='text-orange text-[18px] font-bold uppercase'>${grandTotal()}</p>
        </div>
        <CheckoutModal grandTotal={grandTotal()}/>
      </>
  )
}

export default CartSummary