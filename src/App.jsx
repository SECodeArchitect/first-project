// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import NavBar from '../components/NavBar'
// import Pricing from '../components/pricing'
// import Hero from '../components/hero'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../home/Home'
import About  from '../about/About'
import  Contact from '../contact/Contact'
import Service from '../service/Service'
import NavBar from '../components/NavBar'


import './App.css'

function App() {

  return (
    <>
    {/* <NavBar/>
    <Pricing/>
    <Hero/> */}
    <BrowserRouter>
      <NavBar/>

    <Routes>
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/about' element={<About/>} > </Route>
      <Route path='/contact' element={<Contact/>} > </Route>
      <Route path='/service' element={<Service/>} > </Route>
    </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App