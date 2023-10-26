import React from 'react'
import { images } from '../layouts'

function Civil() {
  return (
    <>
      <div className='p-6' >
        <h2 className='p-2 text-center font-bold '>DEPARTMENT OF CIVIL ENGINEERING
          <hr className='w-1/2 md:w-[20%] h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md  '></hr> </h2>

        <h2 className='p-2 font-serif text-gray-800 font-normal'>WELCOME ADDRESS</h2>
        <p className='text-sm text-gray-800 py-3'>
          This section has been prepared by the Department of Civil Engineering this section records all of the requirements associated with earning the
          degree of Bachelor of Engineering in Civil Engineering at the University of Abuja. The degree
          Programme is administered by the Department of Civil Engineering. This section also
          contains other useful information related to studying civil engineering, being a student in our
          department. The Handbook is revised regularly to reflect changes in requirements and other
          relevant information. The civil engineering curriculum committee works regularly to improve
          the curriculum that we offer to you.
          If you have any problems, concerns, or suggestions related to the Handbook or, more generally,
          the undergraduate Programme in Civil Engineering, please bring them to my attention. Good
          luck in your studies.
          <br></br>
          <span> Engr Dr. Elias Ikpe  </span>
          <br></br>
          HOD, Civil Engineering
        </p>


        <div className='bg-green-700 text-white p-3'>
          <h2 className='py-4 font-semibold'>BRIEF HISTORY OF THE PROGRAMME:</h2>

          <p className='text-sm'>
            The University of Abuja is established to forge national unity by providing a conducive
            environment for learning, and interaction for the youths from all parts of Nigeria. The
            department will enhance the technological and economic empowerment of the country. Sequel to
            the above, the Senate of the University at its 92nd Regular Meeting held on 27th October 2004
            approved the establishment of the Department with effect from 2005/2006 session. The
            Department offers a unique educational opportunity for students to achieve excellence through
            vigorous classes, practices and participation in cutting edge research. The Department of Civil
            Engineering offers a five-year Programme leading to the award of degree of the Bachelor of
            Engineering (B.Eng) in Civil Engineering.
          </p>


          <h2 className='py-4 font-semibold'>PHILOSOPHY OF THE PROGRAMME </h2>

          <p>The philosophy of the Civil Engineering Programme, University of Abuja, is to produce
            graduates with high academic standard and adequate practical background for self- employment
            as well as being of immediate value to industry and the community in general. This will help to
            meet up with national goals and objectives of industrialization and self-reliance</p>

          <h2 className='py-4 font-semibold'>AIMS AND OBJECTIVES OF PROGRAMME :</h2>
          <p>
            he aims and objectives of the Civil Engineering Programme are in consonance with the
            realization of national needs and aspirations vis-à-vis industrial development and technological
            emancipation. The graduates must therefore be resourceful, creative, knowledgeable and able to
            perform the following functions:


            (a)  o design engineering projects and supervise their implementation
            <br></br>
            (b)  To design and implement components, machines, equipment and systems.<br></br>
            (c) To design and develop new products and production techniques in industries<br></br>
            (d)o install and maintain complex engineering systems so that they can perform
            optimally in our environment <br></br>
            (e) To adapt and adopt exogenous technology in order to solve local engineering
            problems.  <br></br>
            (f)To be able to exercise original thought, have good professional judgment and be
            able to take responsibility for the direction of important tasks.   <br></br>
            (g) To be able to manage people, fund, materials and equipment. . <br></br>
            (h)  To improve on indigenous technology to enhance local problems solving capability
           <br></br>
            (i)  To be able to exercise original thought, have good professional judgment
            and be able to take responsibility for the direction of important tasks.
          </p>
        </div>

        <h2 className='py-4 font-semibold text-center '>COURSE STRUCTURE
          <hr className='w-32 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10 '></hr>
        </h2>

      </div>
      <div className=' '>
        <img src={images.civil1} alt='civil' className='w-[80]' />
        <img src={images.civil2} alt='civil' className='md:w-1/2' />
        <img src={images.civil3} alt='civil' className='md:w-1/2' />
        <img src={images.civil4} alt='civil' className='md:w-1/2' />
        <img src={images.civil5} alt='civil' className='md:w-1/2' />
 
      </div>

      <div>
        <h2 className='py-4 font-semibold text-center '>COURSE MATERIALS
          <hr className='w-32 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 roundmech'></hr>
        </h2>
      </div>
    </>
  )
}

export default Civil
