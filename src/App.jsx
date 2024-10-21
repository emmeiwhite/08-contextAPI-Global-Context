import { useContext } from 'react'
import { useGlobalContext } from './context'

function App() {
  const value = useGlobalContext()
  const { color } = value

  return (
    <>
      Main App:
      <h3 style={{ color }}>{color}</h3>
    </>
  )
}

export default App
