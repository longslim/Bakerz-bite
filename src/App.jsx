import React from 'react'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Merchandise from './pages/merchandise/Merchandise'
import Contact from './pages/contact/Contact'
import Product from './pages/product/Product'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/merchandise' element={<Merchandise/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/categories/product' element={<Product/>}/>
          
      </Routes>
      
    </div>
  )
}

export default App
