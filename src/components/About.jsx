import React from 'react'
import { mission } from '../utils/data'
import { management } from '../utils/data'

function About() {
  return (
    <div className='w-screen'>
     <div className='p-2 md:p-5 animate__animated animate__fadeInLeft'>
  <h1 className='uppercase text-center font-semibold'>University Vision
    <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr>
  </h1>

  <p className='p-2 text-lg '>Our aspiration is for the University of Abuja to ascend among the top three in Nigeria, the top ten in Africa, and the top two hundred globally. We pursue this through human capacity building, pioneering research, and sustainable revenue initiatives.</p>

  <h2 className='text-center uppercase font-semibold'>University Mission
    <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {mission.map(({ id, title, text }) => {
      return (
        <div key={id} className='bg-green-700 text-white p-4 rounded-md my-4 mx-auto max-w-md'>
          <h2 className='font-semibold'>{id}. {title}</h2>
          <p>{text}</p>
        </div>
      )
    })}
  </div>
</div>

      <div className='p-2'>
        <h2 className='uppercase text-center '>Faculty Management
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr>
        </h2>
        {management.map(({ id, name, position }) => {
          return (
            <div key={id} className='flex text-sm'>
              <div>
                <h1>{id}. {name}</h1>
              </div>
              <div>
                <h2 className='font-serif text-green-700'>________{position}</h2>
              </div>
            </div>
          )
        })}
        {/* Other sections remain unchanged */}
      </div>
    </div>
  )
}

export default About
