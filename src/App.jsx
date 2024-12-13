import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/AboutUs'
import List from './Pages/List'
import Navbar from './Components/Navbar/Navbar'
import DefaultLayout from './Components/DefaultLayout'

function App() {

  return (
    <BrowserRouter>
      <h1 className='title'>Arcane</h1>
      <Navbar />
      <Routes>
        <Route element={<DefaultLayout />}></Route>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
