import React, { useContext, useState, useRef } from 'react'
import { Context } from '../Context'
import CartSummary from '../components/CartSummary'
import GoBackButton from '../components/GoBackButton'

const Checkout = () => {

  const [errors, setErrors] = useState({})
  const {formData, setFormData, setIsCheckoutModal} = useContext(Context)
  const firstInvalidFieldRef = useRef(null)

  const handleChange = (e) => {
    const {name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handlePaymentMethodChange = (e) => {
     const selectedPaymentMethod = e.target.value
     setFormData((prevFormData) => ({
      ...prevFormData,
      paymentMethod: selectedPaymentMethod,
      emoneyNumber: selectedPaymentMethod === 'cash' ? '' : prevFormData.emoneyNumber,
      emoneyPin: selectedPaymentMethod === 'cash' ? '' : prevFormData.emoneyPin
     }))
  }

  const validateForm = (data) => {
    const fieldsToValidate = ['name', 'email', 'phone', 'address', 'zipCode', 'city', 'country']
    const errors = {}

    fieldsToValidate.forEach((field) => {
      if (!data[field]) {
        errors[field] = `Please enter a ${field}`
      }
    })
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (data.email && !emailPattern.test(data.email)) {
      errors.email = 'Please enter a valid E-Mail address'
    }

    if (data.paymentMethod === 'emoney') {
      const emoneyNumberPattern = /^\d{9}$/; // 9-digit number pattern
      if (!data.emoneyNumber) {
        errors.emoneyNumber = 'Please enter a e-money number'
      } else if (!emoneyNumberPattern.test(data.emoneyNumber)) {
        errors.emoneyNumber = 'Please enter a valid 9-digit e-money number'
      }
  
      const emoneyPinPattern = /^\d{4}$/; // 4-digit number pattern
      if (!data.emoneyPin) {
        errors.emoneyPin = 'Please enter a e-money pin'
      } else if (!emoneyPinPattern.test(data.emoneyPin)) {
        errors.emoneyPin = 'Please enter a valid 4-digit e-money pin'
      }
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm(formData)
    setErrors(errors)

    const firstInvalidField = Object.keys(errors)[0]

    if(firstInvalidFieldRef.current && firstInvalidField) {
      firstInvalidFieldRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    
    if (Object.keys(errors).length === 0) {
      setIsCheckoutModal(true)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='bg-backgroundWhite lg:pb-[141px]'>
      <GoBackButton />
      <div className='lg:flex gap-4 mx-6 md:mx-10 lg:mx-auto max-w-[1110px] lg:justify-between'>
        <div className='bg-white shadow-md flex flex-col rounded-lg p-6 md:p-[28px] lg:px-12 lg:py-[42px] lg:w-[730px]'>

          <h1 className='text-[28px] font-bold tracking-[1px] uppercase'>Checkout</h1>
          <h3 className='text-orange text-[13px] font-bold leading-6 tracking-[.929px] uppercase pt-8 pb-4'>Billing Details</h3>
          <div className='grid grid-cols-2 gap-6'>
            <div className='col-span-2 md:col-span-1'>
              <label className='text-[12px] font-bold -tracking-[.214px]'><span className='text-red-500 mr-1'>*</span>Name</label>
              <input 
                className={`border border-inputBorder w-full rounded-lg py-[15px] px-6 mt-2 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200
                ${errors.name && 'border-2 border-formatRed'}
                `}
                name='name'
                value={formData.name}
                onChange={handleChange} 
                type="text" />
              {errors.name && <p className='text-formatRed text-xs font-medium -tracking-[.214px]'>{errors.name}</p>}
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label className='text-[12px] font-bold -tracking-[.214px]'><span className='text-red-500 mr-1'>*</span>Email Address</label>
              <input 
                className={`border border-inputBorder w-full rounded-lg py-[15px] px-6 mt-2 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200
                ${errors.email && 'border-2 border-formatRed'}
                `}
                name='email'
                value={formData.email}
                onChange={handleChange} 
                type="text" />
              {errors.email && <p className='text-formatRed text-xs font-medium -tracking-[.214px]'>{errors.email}</p>}
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label className='text-[12px] font-bold -tracking-[.214px]'><span className='text-red-500 mr-1'>*</span>Phone Number</label>
              <input 
                className={`border border-inputBorder w-full rounded-lg py-[15px] px-6 mt-2 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200
                ${errors.phone && 'border-2 border-formatRed'}
                `}
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                type="text"/>
              {errors.phone && <p className='text-formatRed text-xs font-medium -tracking-[.214px]'>{errors.phone}</p>}
            </div>
          </div>

          <h3 className='text-orange text-[13px] font-bold leading-6 tracking-[.929px] uppercase pt-8 pb-4'>Shipping Info</h3>
          <div className='grid grid-cols-2 gap-6'>
            <div className='col-span-2'>
              <label className='text-[12px] font-bold -tracking-[.214px]'><span className='text-red-500 mr-1'>*</span>Your Address</label>
              <input 
                className={`border border-inputBorder w-full rounded-lg py-[15px] px-6 mt-2 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200
                ${errors.address && 'border-2 border-formatRed'}
                `}
                name='address'
                value={formData.address}
                onChange={handleChange}
                type="text"/>
              {errors.phone && <p className='text-formatRed text-xs font-medium -tracking-[.214px] visible'>{errors.phone}</p>}
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label className='text-[12px] font-bold -tracking-[.214px]'><span className='text-red-500 mr-1'>*</span>Zip Code</label>
              <input 
                className={`border border-inputBorder w-full rounded-lg py-[15px] px-6 mt-2 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200
                ${errors.zipCode && 'border-2 border-formatRed'}
                `}
                name='zipCode'
                value={formData.zipCode}
                onChange={handleChange}
                type="text"/>
              {errors.phone && <p className='text-formatRed text-xs font-medium -tracking-[.214px] visible'>{errors.phone}</p>}
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label className='text-[12px] font-bold -tracking-[.214px]'><span className='text-red-500 mr-1'>*</span>City</label>
              <input 
                className={`border border-inputBorder w-full rounded-lg py-[15px] px-6 mt-2 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200
                ${errors.city && 'border-2 border-formatRed'}
                `}
                name='city'
                value={formData.city}
                onChange={handleChange} 
                type="text"/>
              {errors.city && <p className='text-formatRed text-xs font-medium -tracking-[.214px] visible'>{errors.city}</p>}
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label className='text-[12px] font-bold -tracking-[.214px]'><span className='text-red-500 mr-1'>*</span>Country</label>
              <input 
                className={`border border-inputBorder w-full rounded-lg py-[15px] px-6 mt-2 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200
                ${errors.country && 'border-2 border-formatRed'}
                `}
                name='country'
                value={formData.country}
                onChange={handleChange}
                type="text"/>
              {errors.country && <p className='text-formatRed text-xs font-medium -tracking-[.214px] visible'>{errors.country}</p>}
            </div>
          </div>

          <h3 className='text-orange text-[13px] font-bold leading-6 tracking-[.929px] uppercase pt-8 pb-4'>Payment Details</h3>

          <div className='grid grid-cols-2 gap-6'>
            <label className='text-[12px] font-bold -tracking-[.214px]'>Payment Method</label>

            <div className='grid col-span-2 md:col-span-1 gap-4'>
              <div className='flex items-center border border-inputBorder w-full rounded-lg py-4 px-6 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200'>
                <input 
                  className='h-5 w-5 accent-orange'        type='radio' 
                  name='paymentMethod' 
                  id='emoney' 
                  value='emoney'
                  checked={formData.paymentMethod === 'emoney'}
                  onChange={handlePaymentMethodChange}
                  />
                <label className='text-[14px] font-bold -tracking-[.25px] pl-4' for='emoney'>e-Money</label>
              </div>

              <div className='flex items-center border border-inputBorder w-full rounded-lg py-4 px-6 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200'>
                <input 
                  className='h-5 w-5 accent-orange' type='radio' 
                  name='paymentMethod' 
                  id='cash'
                  value='cash'
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handlePaymentMethodChange}
                  />
                <label className='text-[14px] font-bold -tracking-[.25px] pl-4' for='cash'>Cash on Delivery</label>
              </div>
            </div>

            {formData.paymentMethod === 'emoney' ? (
            <>
              <div className='col-span-2 md:col-span-1'>
                <label className='text-[12px] font-bold -tracking-[.214px]'>e-Money Number</label>
                <input 
                  className={`border border-inputBorder w-full rounded-lg py-[15px] px-6 mt-2 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200
                ${errors.emoneyNumber && 'border-2 border-formatRed'}
                `} 
                  type="text"
                  name='emoneyNumber'
                  value={formData.emoneyNumber}
                  onChange={handleChange} 
                  placeholder='238521993'
                  ref={firstInvalidFieldRef}
                  />
                {errors.emoneyNumber && <p className='text-formatRed text-xs font-medium -tracking-[.214px] visible'>{errors.emoneyNumber}</p>}
              </div>

              <div className='col-span-2 md:col-span-1'>
                <label 
                className='text-[12px] font-bold -tracking-[.214px]'>e-Money PIN</label>
                <input 
                  className={`border border-inputBorder w-full rounded-lg py-[15px] px-6 mt-2 focus:outline-none focus:border-orange focus:ring-0 focus:ring-orange hover:border-black hover:ring-1 hover:ring-black transition ease-in-out duration-200
                ${errors.emoneyPin && 'border-2 border-formatRed'}
                `} 
                  value={formData.emoneyPin}
                  onChange={handleChange}
                  type="text" 
                  name='emoneyPin'
                  placeholder='6891'/>
                {errors.emoneyPin && <p className='text-formatRed text-xs font-medium -tracking-[.214px] visible'>{errors.emoneyPin}</p>}
              </div>
            </>
            ) : (
              <div className='flex items-center col-span-2 gap-8'>
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z" fill="#D87D4A"/></svg>
                <p className='text-[15px] text-black/50 font-medium leading-6 w-[90%]'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives 
                at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
              </div>
            )}

          </div>

        </div>

        <div className='bg-white shadow-md flex flex-col max-w-[1110px] rounded-lg mt-8 mb-20 lg:mt-0 lg:mx-0 h-min p-6 md:p-8 lg:w-[350px]'>
          <CartSummary />
          <button 
            
            className='text-[13px] font-bold tracking-[1px] uppercase text-white bg-orange py-[15px] px-10 cursor-pointer hover:bg-orangeLight'>Continue & Pay
          </button>
        </div>
      </div>
      
    </form>
  )
}

export default Checkout