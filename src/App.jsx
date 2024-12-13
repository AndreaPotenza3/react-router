import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/AboutUs'
import List from './Pages/List'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
      <h1>Arcane</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
