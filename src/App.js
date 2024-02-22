
import React from 'react'
// import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from './nuesa/Page'
// import ForgetPassword from './components/ForgetPassword'


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/*' element={<Page />}/>
        {/* <Route path='/page/*' element={<Page />}/> */}
        {/* <Route path='/reset' element={<ForgetPassword />}/> */}
        
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
