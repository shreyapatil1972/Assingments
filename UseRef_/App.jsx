import { useState } from 'react'
import './App.css'
import StoringValue from './components/StoringValue'
import AccessDOM from './components/AccessDOM'
import Preserving_Ren from './components/Preserving_Ren'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AccessDOM/>
     <StoringValue/>
     <Preserving_Ren/>
    </>
  )
}

export default App
