import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Land from './Pages/Land'
import UnderDev from './Components/UnderDev'
import Features from './Pages/Features'
import About from './Pages/About'

const App = () => {
  console.log(window.location.pathname)
  document.body.style = "background: #171A21;";
  
  return (
    <Routes>
      <Route path='/' element={<Land/>}></Route>
      <Route path='/underdev' element={<UnderDev/>}></Route>
      <Route path='/features' element={<Features/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
  )
}

export default App

