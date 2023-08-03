import React from 'react'
import { mission } from '../utils/data'
import { management } from '../utils/data'

function About() {


  return (
    <div className='w-screen'>
      <div className='p-2 md:p-5'>
        <h1 className='uppercase text-center font-semibold'>university vision
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr>
        </h1>

        <p className='p-2'>To make the University of Abuja be among the first 3 in Nigeria, among the first 10 in Africa
          and among the first 200 in the world through human capacity building, engagement in cutting
          edge research and development activities as well as robust revenue drive. </p>

        <h2 className='text-center uppercase font-semibold'>university mission
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr></h2>
        {mission.map(({ id, title, text }) => {
          return (
            <div className='bg-green-700 text-white'>

              <h2 className='p-2 font-medium'>{id}. {title}</h2>
              <h2 className='p-1'>{text}</h2>
            </div>
          )
        })}
      </div>
      <div className='p-2'>
        <h2 className='uppercase text-center '>faculty management
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr></h2>
        {management.map(({ id, name, position }) => {
          return (
            <div className='flex text-sm'>
              <div>
                <h1>{id}. {name}</h1>
              </div>
              <div>
                <h2 className='font-serif text-green-700'>________{position}</h2>
              </div>
            </div>
          )
        })}
        <h2 className='uppercase text-center '>ADMISSION REQUIREMENTS
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr></h2>

        <p>The entry requirements for the Bachelor of Engineering Programmes of the University of Abuja are in accordance with the NUC guidelines for UTME and Direct Entry for Undergraduate Programme in Engineering. These are as follows: </p>

        <h2 className='uppercase text-center '>Admission Requirements for UTME
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr></h2>
        <p>The minimum admission requirement for Engineering is passes at credit level in the
          Senior Secondary School final year examination or GCE ‘O’ Level in five subjects
          including Mathematics, English Language, Physics and Chemistry. Candidates are
          also required to have acceptable pass in UTME. Candidates with Further Mathematics
          and Technical Drawing at credit levels shall have added advantage</p>

        <h2 className='uppercase text-center '>Remedial Placement:
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr></h2>
        <p>Candidates must have at least a “B” grade in Mathematics, Physics and Chemistry and “C” in
          English Language - from Remedial Studies examination result with an acceptable score in
          UTME examination results</p>


        <h2 className='uppercase text-center '>Admission Requirements for Direct Entry
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr></h2>
        For Direct Entry, candidates must have passes in Mathematics, Physics and Chemistry at
        GCE ‘A’ level or equivalent. Holders of ND and HND at minimum of upper credit
        level are eligible for consideration for admission into 200 and 300 levels respectively.
        Additionally:<br></br>
        (i) Must have ‘O’ level requirement – pass at credit level in Mathematics, English
        Language, Physics, Chemistry and any other subject.
        <br></br>
        (ii) GCE (A/L)/IJMB – At least “C” grade in Mathematics and Physics i.e. at least a
        cumulative of 9 points.


        <h2 className='uppercase text-center '>DURATION OF PROGRAMME 
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr></h2>

      </div>
    </div>
  )
}

export default About