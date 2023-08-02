import React, { useContext } from 'react'
import { Context } from '../Context'
import { useNavigate } from 'react-router-dom'

const CheckoutModal = ({grandTotal}) => {

  const {isCheckoutModal, setIsCheckoutModal, cartItems, setCartItems} = useContext(Context)
  
  const formattedTotal = parseFloat(grandTotal).toLocaleString('en-US')
  
  const startOver = () => {
    setIsCheckoutModal(false)
    setCartItems([])
    navigate('/')
  }
  const navigate = useNavigate()

  return (
    <>
      {isCheckoutModal && (
        <div className='p-6 fixed inset-0 flex flex-col justify-center bg-black/75 md:z-[100]'>
          <div className='bg-white rounded-lg p-8 md:w-[540px] md:mx-auto'>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
            <h1 className='text-[24px] font-bold leading-7 tracking-[.857px] uppercase pt-6 pb-4 md:w-2/3 md:text-[32px] md:leading-9 md:tracking-[1.143px]'>Thank you for your order</h1>
            <p className='text-black/50 font-medium leading-6'>You will receive an email confirmation shortly</p>

            
            <div className='md:flex md:py-10'>

              <div className='bg-grayWhite rounded-t-lg mt-6 md:w-[60%] md:mt-0 md:rounded-r-none md:rounded-l-lg'>

                <div className='flex justify-between items-center p-4'>
                  <div className='flex gap-4 items-center'>
                    <img className='h-16 w-16' src={cartItems[0].image}/>
                    <div>
                      <h3 className='text-[15px] font-bold leading-6'>{cartItems[0].name}</h3>
                      <p className='text-[14px] font-bold leading-6 opacity-50'>$ {cartItems[0].price}</p>
                    </div>
                  </div>
                  <p className='text-black/50 text-[15px] font-bold leading-6'>x{cartItems[0].quantity}</p>
                </div>

                <div className='border-t'>
                  {cartItems.length > 1 && (
                    <p className='text-black/50 text-sm text-center pt-3 pb-6 font-bold -tracking-[.214px]'>and {cartItems.length - 1} other item{cartItems.length > 2 ? '(s)' : ''}</p>
                  )}
                </div>
              </div>

              <div className='bg-black p-5 rounded-b-lg mb-6 md:w-[40%] md:mb-0 md:flex flex-col justify-center items-start md:rounded-r-lg md:rounded-l-none'>
                  <h3 className='text-[15px] text-white/50 font-medium leading-6 uppercase'>Grand Total</h3>
                  <p className='text-white font-bold text-[18px] uppercase pt-2'>$ {formattedTotal}</p>
              </div>
            </div>
            
            <button 
              onClick={startOver}
              className='w-full text-[13px] font-bold tracking-[1px] uppercase text-white bg-orange py-[15px] px-10 cursor-pointer hover:bg-orangeLight'>Back to Home
            </button>
          </div>   
        </div>
      )}
    </>
  )
}

export default CheckoutModal