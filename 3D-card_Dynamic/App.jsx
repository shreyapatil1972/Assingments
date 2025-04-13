import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <ProfileCard/>
   </>
  )
}

export default App
