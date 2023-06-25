import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

// department

import Electrical from '../src/Departments/Electrical'
import Mechanical from '../src/Departments/Mechanical'
import Chemical from '../src/Departments/Chemical'
import Civil from '../src/Departments/Civil'

import Footer from './layouts/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Home from './wrap/Home'
import { ScrollToTop } from './wrap/ScrollToTop'


// import ScrollToTop from 'react-scroll-to-top'





function App() {
  return (
    <div className='w-screen h-full'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />

        {/* departments */}
         
        <Route path='/elect' element={<Electrical />} />
        <Route path='/mech' element={<Mechanical />} />
        <Route path='/chem' element={<Chemical />} />
        <Route path='/civil' element={<Civil />} />


      </Routes>
      <Footer />
{/* <ScrollToTop  style={{color: 'green'}}/> */}
<ScrollToTop />
    </div>
  )
}

export default App
