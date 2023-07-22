import React, { useEffect, useState } from 'react'

const Context = React.createContext()

const ContextProvider = ({children}) => {

  const [audiophileData, setAudiophileData] = useState([])

  useEffect(() => {
    fetch('/starter-code/data.json')
      .then(res => res.json())
      .then(data => setAudiophileData(data))
  }, [])
  
  
  const value = {
    audiophileData
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}