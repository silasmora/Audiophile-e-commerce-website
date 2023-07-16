import React, { useEffect, useState } from 'react'

const Context = React.createContext()

const ContextProvider = ({children}) => {

  const [product, setProduct] = useState('')

  useEffect(() => {
    fetch('./starter-code/data.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  

  const value = {
    
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}