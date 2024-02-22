import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../layouts/Header'
import Body from '../layouts/Body'
import Electrical from '../Departments/Electrical'
import Mechanical from '../Departments/Mechanical'
import Chemical from '../Departments/Chemical'
import Civil from '../Departments/Civil'
import Footer from '../layouts/Footer'
import About from '../components/About'
import Contact from '../components/Contact'
import Leadership from '../components/Leadership'
import Home from '../wrap/Home'
import { ScrollToTop } from '../wrap/ScrollToTop'
import Gallery from '../Gallery/Gallery'
import Blog from '../components/Blog/Blog'


function Page() {


    return (
        <div className='w-screen h-screen'>

            <Navbar />
    
            <Routes>
                <Route path='/'/>
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/Leadership' element={<Leadership />} />
                <Route path='/Blog' element={<Blog/>} />

                {/* departments */}

                <Route path='/elect' element={<Electrical />} />
                <Route path='/mech' element={<Mechanical />} />
                <Route path='/chem' element={<Chemical />} />
                <Route path='/civil' element={<Civil />} />

            </Routes>
           <Header />
           <Body />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Page
