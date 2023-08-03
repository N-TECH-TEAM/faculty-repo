import React from 'react'
import { images } from '../layouts'

function Electrical() {
  return (
    <>
      <div className='p-6' >
        <h2 className='p-2 text-center font-bold '>DEPARMENT OF ELECTRICAL/ELECTRONIC ENGINEERING
          <hr className='w-[70%] md:w-[20%] h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5'></hr> </h2>

        <h2 className='p-2 font-serif text-gray-800 font-normal'>WELCOME ADDRESS</h2>
        <p className='text-sm text-gray-800 py-3'>
          Welcome to Electrical and Electronic Engineering Department. The Department expects and
          believes that you can grow and attain higher levels. You will find this guide helpful in
          course registration as well as understanding graduation requirements and other activities.
          Questions will arise as you make your way toward graduation, many of which will be
          answered through this guide. Other questions may be better answered through interactions
          with Lecturers, Level advisers, HOD, staff members and your fellow students. Reach out for
          help and guidance during your time here.
          Above all, the Department wants you to challenge yourself in all ways, both inside and outside
          of the classroom. We believe our program, detailed here, will give you that opportunity.

          Have an excellent school year!
          <br></br>
          <span> Dr. S. O. Oodo</span>
          <br></br>
            HOD, Electrical Engineering
        </p>
       


      

        <div className='bg-green-700 text-white p-3'>
          <h2 className='py-4 font-semibold'>BRIEF HISTORY OF THE PROGRAMME:</h2>

          <p className='text-sm '>
            About 27 years ago, the Federal Government established the University of Abuja, to forge
            national unity by providing a conducive environment for learning, and interaction for the
            youths from all parts of Nigeria. To achieve this noble objective, several faculties and other
            relevant academic Programmes were created in various fields of human endeavour.
            But only the availability of adequate manpower in Engineering can lead to realization of
            national needs and aspiration in relation to industrial development and technological
            emancipation. To realize this, the Senate of the University at its 92nd Regular Meeting held on
            27th October 2004 approved the establishment of the Faculty of Engineering having Electrical
            and Electronic Engineering Department among others with effect from 2005/2006 session

          </p>


          <h2 className='py-4 font-semibold'>AIMS AND OBJECTIVES OF PROGRAMME :</h2>

          <p className='text-sm'>The aims and objectives of the Electrical/Electronics Engineering Programme are in
            consonance with the realization of national needs and aspirations vis-à-vis industrial
            development and technological emancipation. The graduates must therefore be resourceful,
            creative, knowledgeable and able todesign,install, maintain, adapt, adopt, manage and improve
            engineering systems.
            The objectives of the Programme are to produce Engineering graduates who shall possess the
            following attributes:

          </p> <br></br>
          <p className='text-sm'>
            (a) The ability to design and analyse Electrical or Electronics systems.
            <br></br>
            (b) The ability to manage people’s fund, materials and equipment diligently.<br></br>
            (c) Develop professionalism in relevant areas and maintain contact with learned bodies.<br></br>
            (d) The ability to improve on indigenous technology to enhance local problems solving <br></br>
            capability.
            (e) Provide educational diversity to meet the needs of emerging sub fields within the
            Electrical and/or Electronic Engineering and related disciplines. <br></br>
            (f) To produce high level skilled technological manpower for wider application in Nigeria. <br></br>
            (g) Ability to install and maintain complex engineering systems so that they can perform
            optimally in an environment. <br></br>
            (h) To make life more meaningful to the local populace by harnessing and developing
            more on the global electronic age. <br></br>
            (i) To adapt and adopt exogenous technology in order to solve local engineering
            problems.
          </p>
        </div>
        <h2 className='py-4 font-semibold text-center '>COURSE STRUCTURE
          <hr className='w-32 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5 '></hr>
        </h2>

      </div>
      <div className=' '>
        <img src={images.elect3} alt='elect3' className=' md:w-1/2' />
        <img src={images.elect3b} alt='elect3' className=' md:w-1/2' />
        <img src={images.elect4a} alt='elect3' className=' md:w-1/2' />
        <img src={images.elect5a} alt='elect3' className='md:w-1/2' />
        <img src={images.elect5b} alt='elect3' className='md:w-1/2' />
        <img src={images.elect5c} alt='elect3' className='md:w-1/2' />
        <img src={images.elect5d} alt='elect3' className='md:w-1/2 ' />
      </div>

      <div>
        <h2 className='py-4 font-semibold text-center '>COURSE MATERIALS
          <hr className='w-32 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md  '></hr>
        </h2>
      </div>

    </>

export default Electrical