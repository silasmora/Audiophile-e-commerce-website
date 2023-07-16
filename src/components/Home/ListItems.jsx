import React from 'react'

const ListItems = () => {

  const items = ['home', 'headphones', 'speakers', 'earphones']
  return (
    <ul className='hidden lg:flex lg:mr-28'>
      {items.map((item, index) => (
        <li key={index} className='text-white cursor-pointer uppercase font-bold text-[13px] tracking-[2px] leading-[25px] ml-8 hover:text-orange ease-in-out duration-300'
        >{item}</li>
      ))}
    </ul>
  )
}

export default ListItems