import React from 'react'
import History from '../components/History'
import Societies from '../components/societies'
import NewsLater from '../components/NewsLater'
import Testimonials from '../components/Testimonials'

function Body() {
  return (
    <div className='w-screen '>

    <History />
    <Societies />
    <NewsLater />
    <Testimonials />
    </div>
  )
}

export default Body