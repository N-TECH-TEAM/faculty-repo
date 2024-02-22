import React from 'react'
import { images } from '../layouts'


function Chemical() {
  return (
    <>
      <div className='p-6' >
        <h2 className='p-2 text-center font-bold '>DEPARTMENT OF CHEMICAL ENGINEERING
          <hr className='w-1/2 md:w-[20%] h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md  '></hr> </h2>

        <h2 className='p-2 font-serif text-gray-800 font-normal'>WELCOME ADDRESS</h2>
        
        <p className='text-sm text-gray-800 py-3'>
          This section was provided by the department of chemical engineering to provide every bit of
          information concerning courses registration for each Semester of an Academic Session as well as
          the detailed regulations regarding admission requirements; academic regulation and the
          Departmental Staff whom any student could approach for necessary guide or assistance. This
          section is also a fulfillment of the basic requirements of the NUC/COREN accreditation,
          which the department must meet in order to keep abreast of the current curriculum development
          and update. The student (fresh or old) is advised to make the book a necessary companion to
          avoid registering the wrong Courses and having excess credit Loads. The University is endowed
          with a multiplicity of Professional Societies, e.g. Nigerian Society of Engineers (Student
          Chapter), and the Nigerian Society of Chemical Engineers (NSChE) and religious groups to
          which the Student could find convenient to belong instead of searching for banned secret cults or
          Societies. The student is cordially invited to discuss his/her problem with Academic Adviser
          attached to his/her Level or with the Head of department because we believe that peaceful
          dialogue is a panacea to most problems:
          Wishing you a successful career in Chemical Engineering.
          <br></br>
          <span> ENGR. DR. A. M. EVUTI</span>
          <br></br>
          HOD, Chemical Engineering
        </p>


        <div className='bg-green-700 text-white p-3'>
          <h2 className='py-4 font-semibold'>BRIEF HISTORY OF THE PROGRAMME:</h2>

          <p className='text-sm'>
            The University of Abuja is established to forge national unity by providing a conducive
            environment for learning, and interaction for the youths from all parts of Nigeria. The Faculty of
            Engineering will enhance the technological and economical empowerment of the country.
            Sequel to the above, the Senate of the University at its 92nd regular meeting held on 27th October
            2004 approved the establishment of the Department of Chemical Engineering with effect from
            2006/2007 session.
          </p>


          <h2 className='py-4 font-semibold'>PHILOSOPHY OF THE PROGRAMME </h2>

          <p>The Chemical Engineering Programme is established to provide world class competent and
            qualified Chemical Engineers that will contribute to the technological and economic
            development of Nigeria. The philosophy is aimed at producing employable and/or self-employed
            engineers through the provision of state-of-the-art training in the Chemical Engineering
            discipline.</p>

          <h2 className='py-4 font-semibold'>AIMS AND OBJECTIVES OF PROGRAMME :</h2>
          <p>
            he aims and objectives of the Civil Engineering Programme are in consonance with the
            realization of national needs and aspirations vis-à-vis industrial development and technological
            emancipation. The graduates must therefore be resourceful, creative, knowledgeable and able to
            perform the following functions:


            (a)  The ability to design Engineering projects and supervise their constructions.
            <br></br>
            (b)  The ability to manage people’s fund, materials and equipment diligently.<br></br>
            (c)  The ability to exercise original thought, have good professional judgement and be able to
            take responsibility for the direction of important tasks. <br></br>
            (d) The ability to improve on indigenous technology to enhance local problems solving
            capability.<br></br>
            (e)  The ability to install and maintain complex engineering systems so that they can perform
            optimally in an environment. <br></br>
            (f) To produce high level skilled technological manpower for wider application in Nigeria.   <br></br>
            (g) To be able to manage people, fund, materials and equipment. . <br></br>
            (h) To develop links with local industries and also maintain a data bank for use by industries.
            <br></br>
            (i)  To progress in successful professional careers in Chemical Engineering or will continue
            their studies at a graduate level.
          </p>
        </div>

        <h2 className='py-4 font-semibold text-center '>COURSE STRUCTURE
          <hr className='w-32 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10 '></hr>
        </h2>

      </div>
      <div className=' '>
        <img src={images.chem1} alt='civil' className='w-[80]' />
        <img src={images.chem2} alt='civil' className='md:w-1/2' />
        <img src={images.chem3} alt='civil' className='md:w-1/2' />
        <img src={images.chem4} alt='civil' className='md:w-1/2' />
        <img src={images.chem5} alt='civil' className='md:w-1/2' />
      

      </div>

      <div>
        <h2 className='py-4 font-semibold text-center '>COURSE MATERIALS
          <hr className='w-32 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 roundmech'>
            
          </hr>
        </h2>
      </div>
    </>
  )
}

export default Chemical
