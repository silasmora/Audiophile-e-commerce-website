import React, { useContext } from 'react'
import { Context } from '../Context'

const AddToCartButton = ({onClick}) => {

  const {setIsCart} = useContext(Context)

  const addToCart = () => {
    onClick()
    setIsCart(true)
  }

  return (
    <button
      className='cursor-pointer text-white bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold hover:bg-orangeLight'
      onClick={addToCart}
      >Add to cart
    </button>
  )
}

export default AddToCartButton