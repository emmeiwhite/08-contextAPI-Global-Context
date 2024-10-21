import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

// Custom Hook
export const useGlobalContext = () => useContext(GlobalContext)

function AppContext({ children }) {
  const [color, setColor] = useState('green')

  return <GlobalContext.Provider value={{ color, setColor }}>{children}</GlobalContext.Provider>
}

export default AppContext
