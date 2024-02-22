import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'
import Electrical from '../Departments/Electrical'
import Mechanical from '../Departments/Mechanical'
import Chemical from '../Departments/Chemical'
import Civil from '../Departments/Civil'
import Footer from '../layouts/Footer'
import About from '../components/About'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import Home from '../wrap/Home'
import { ScrollToTop } from '../wrap/ScrollToTop'
// import { useNavigate } from 'react-router-dom'
// import { signOut } from 'firebase/auth'
// import { auth } from '../config/firebase'


function Page() {

    // const history = useNavigate()

    // const handleClick = () => {
    //     signOut(auth).then(val => {
    //         console.log(val, "val")
    //         history('/')
    //     })
    // }


    return (
        <div className='w-screen h-screen'>

            <Navbar />
            {/* <div>
               
                <button onClick={handleClick}>SignOut</button>
            </div> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />

                <Route path='/contact' element={<Contact />} />
                <Route path='/gallery' element={<Gallery />} />

                {/* departments */}

                <Route path='/elect' element={<Electrical />} />
                <Route path='/mech' element={<Mechanical />} />
                <Route path='/chem' element={<Chemical />} />
                <Route path='/civil' element={<Civil />} />

            </Routes>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Page
