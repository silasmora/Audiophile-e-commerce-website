import React from 'react'
import { NavLink } from 'react-router-dom'

const ListItems = () => {

  const items = ['home', 'headphones', 'speakers', 'earphones']
  return (
    <>
      <ul className='hidden lg:flex gap-8'>
      {items.map((item, index) => (
        <li key={index} className='text-white cursor-pointer uppercase font-bold text-[13px] tracking-[2px] leading-[25px] hover:text-orange ease-in-out duration-300'>
        {item === 'home' ? (
              <NavLink to='/' activeClassName='text-orange'>
                {item}
              </NavLink>
            ) : (
              <NavLink to={`/${item}`} activeClassName='text-orange'>
                {item}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
      {/*Below are list items for tablet size screens in the footer*/}
      <ul className='md:flex gap-6 lg:hidden'>
      {items.map((item, index) => (
        <li key={index} className='text-white text-center cursor-pointer uppercase font-bold text-[13px] tracking-[2px] leading-[25px] pb-4 hover:text-orange ease-in-out duration-300'>
         {item === 'home' ? (
              <NavLink to='/' activeClassName='text-orange'>
                {item}
              </NavLink>
            ) : (
              <NavLink to={`/${item}`} activeClassName='text-orange'>
                {item}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

    </>
  )
}

export default ListItems