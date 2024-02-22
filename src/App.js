
import React from 'react'
// import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from './nuesa/Page'
import Home from './wrap/Home'
import Footer from './layouts/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Gallery from './Gallery/Gallery'
import Contact from './components/Contact'
import Leadership from './components/Leadership'
import Blog from './components/Blog/Blog'
import Electrical from './Departments/Electrical'
import Mechanical from './Departments/Mechanical'
import Chemical from './Departments/Chemical'
import Civil from './Departments/Civil'
// import ForgetPassword from './components/ForgetPassword'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Home />} />
          {/* <Route path='/page/*' element={<Page />}/> */}
          {/* <Route path='/reset' element={<ForgetPassword />}/> */}
          {/* <Route path='/' element={<Home />}/> */}
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Leadership' element={<Leadership />} />
          <Route path='/Blog' element={<Blog />} />

          {/* departments */}

          <Route path='/elect' element={<Electrical />} />
          <Route path='/mech' element={<Mechanical />} />
          <Route path='/chem' element={<Chemical />} />
          <Route path='/civil' element={<Civil />} />


        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
