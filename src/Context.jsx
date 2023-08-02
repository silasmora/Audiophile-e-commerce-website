import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Context = React.createContext()

const ContextProvider = ({children}) => {

  const [audiophileData, setAudiophileData] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isCart, setIsCart] = useState(false)
  const [mark2Quantity, setMark2Quantity] = useState(1)
  const [mark1Quantity, setMark1Quantity] = useState(1)
  const [xx59Quantity, setXx59Quantity] = useState(1)
  const [zx9Quantity, setZx9Quantity] = useState(1)
  const [zx7Quantity, setZx7Quantity] = useState(1)
  const [yx1Quantity, setYx1Quantity] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'emoney',
    emoneyNumber: '',
    emoneyPin: ''
  })
  const [isCheckoutModal, setIsCheckoutModal] = useState(false)
  const [isNavItemsModal, setIsNavItemsModal] = useState(false)

  useEffect(() => {
    fetch('/starter-code/data.json')
      .then(res => res.json())
      .then(data => setAudiophileData(data))
  }, [])

  //Retrieving items in cart from local storage//
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('items'))
    if (savedCartItems) {
      setCartItems(savedCartItems)
    }
  }, [])
  //Saving new and deleting items from the cart//
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (name, quantity, price, image) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === name)
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemIndex].quantity += quantity
      setCartItems(updatedCartItems)
    } else {
      const newItem = {
        name: name,
        quantity: quantity,
        price: price,
        image: image,
      }
      setCartItems((prevCartItems) => [...prevCartItems, newItem])
    }
  }
  
  const addToCartMark2Headphones = () => {
    addToCart('Xx99 MK II', mark2Quantity, '2,299', '/product-xx99-mark-two-headphones/mobile/image-product.jpg')
    setMark2Quantity(1)
  }

  const addToCartMark1Headphones = () => {
    addToCart('Xx99 MK I', mark1Quantity, '1,750', '/product-xx99-mark-one-headphones/mobile/image-product.jpg')
    setMark1Quantity(1)
  }

  const addToCartXx59Headphones = () => {
    addToCart('Xx59', xx59Quantity, '899', '/product-xx59-headphones/mobile/image-product.jpg')
    setXx59Quantity(1)
  }

  const addToCartZx9Speakers = () => {
    addToCart('Zx9', zx9Quantity, '4,500', '/product-zx9-speaker/mobile/image-product.jpg')
    setZx9Quantity(1)
  }

  const addToCartZx7Speakers = () => {
    addToCart('Zx7', zx7Quantity, '3,500', '/product-zx7-speaker/mobile/image-product.jpg')
    setZx7Quantity(1)
  }

  const addToCartYx1Earphones = () => {
    addToCart('Yx1', yx1Quantity, '599', '/product-yx1-earphones/mobile/image-product.jpg')
    setYx1Quantity(1)
  }

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  const cartTotal = cartItems.reduce((total, item) => total + parseInt(item.price.replace(',', '')) * item.quantity, 0);
  const formattedTotal = cartTotal.toLocaleString()
  
  const handleGoBack = () => {
    navigate(-1)
  }
  const navigate = useNavigate()
  
  const value = {
    handleGoBack,
    cartItems,
    setCartItems,
    isCart,
    setIsCart,
    audiophileData,
    mark2Quantity,
    setMark2Quantity,
    mark1Quantity,
    setMark1Quantity,
    xx59Quantity,
    setXx59Quantity,
    zx9Quantity,
    setZx9Quantity,
    zx7Quantity,
    setZx7Quantity,
    yx1Quantity,
    setYx1Quantity,
    addToCartMark2Headphones,
    addToCartMark1Headphones,
    addToCartXx59Headphones,
    addToCartZx9Speakers,
    addToCartZx7Speakers,
    addToCartYx1Earphones,
    totalQuantity,
    cartTotal,
    formattedTotal,
    formData,
    setFormData,
    isCheckoutModal,
    setIsCheckoutModal,
    isNavItemsModal,
    setIsNavItemsModal
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}