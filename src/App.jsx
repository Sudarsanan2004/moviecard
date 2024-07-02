import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { View } from './components/View'
import { Next } from './components/Next'
import { Route, Routes } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/'element={<View/>}></Route>
        <Route path='/Next'element={<Next/>}></Route>
      </Routes>
      
      
    </>
  )
}

export default App
