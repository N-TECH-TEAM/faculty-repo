// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import './App.css'
// import Electrical from '../src/Departments/Electrical'
// import Mechanical from '../src/Departments/Mechanical'
// import Chemical from '../src/Departments/Chemical'
// import Civil from '../src/Departments/Civil'
// import Footer from './layouts/Footer'
// import About from './components/About'
// import Contact from './components/Contact'
// import Services from './components/Services'
// import Home from './wrap/Home'
// import { ScrollToTop } from './wrap/ScrollToTop'

// function App() {
//   return (
//     <div className='w-screen h-full'>

//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />

//         <Route path='/contact' element={<Contact />} />
//         <Route path='/services' element={<Services />} />

//         {/* departments */}

//         <Route path='/elect' element={<Electrical />} />
//         <Route path='/mech' element={<Mechanical />} />
//         <Route path='/chem' element={<Chemical />} />
//         <Route path='/civil' element={<Civil />} />

//       </Routes>
//       <Footer />
// <ScrollToTop />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Auth from './components/auth'

// const App = () => {
//   return (
//     <div>
//       <Auth />
//     </div>
//   )
// }

// export default App


import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from './nuesa/Page'
import ForgetPassword from './components/ForgetPassword'


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/page/*' element={<Page />}/>
        <Route path='/reset' element={<ForgetPassword />}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
