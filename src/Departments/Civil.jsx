import React from 'react';
import { images } from '../layouts';
import CivilpdfFiles from '../components/pdf/CivilPDFfiles';

function Civil() {
  return (
    <>
      <div className='p-6'>
        <h2 className='p-2 text-center font-bold'>CIVIL ENGINEERING
          <hr className='w-1/2 md:w-[20%] h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md' />
        </h2>

        <h2 className="py-4 font-semibold text-center">WELCOME ADDRESS</h2>
        <div className="mb-4 flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2">
            <p className="text-lg mb-4">
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
              
            </p>
          </div>
          <img src={images.ccover} alt="Civil Engineering" className="w-full sm:w-1/2 ml-0 sm:ml-4" />
        </div>

        <div class='bg-green-700 text-white p-3'>
    <h2 class='py-4 font-semibold'>BRIEF HISTORY OF THE PROGRAMME:</h2>

    <p class='text-sm'>
        The University of Abuja is established to forge national unity by providing a conducive environment for learning, and interaction for the youths from all parts of Nigeria. The department will enhance the technological and economic empowerment of the country. Sequel to the above, the Senate of the University at its 92nd Regular Meeting held on 27th October 2004 approved the establishment of the Department with effect from 2005/2006 session. The Department offers a unique educational opportunity for students to achieve excellence through vigorous classes, practices and participation in cutting edge research. The Department of Civil Engineering offers a five-year Programme leading to the award of degree of the Bachelor of Engineering (B.Eng) in Civil Engineering.
    </p>

    <h2 class='py-4 font-semibold'>AIMS AND OBJECTIVES OF PROGRAMME:</h2>
    <p class='text-sm'>
        The aims and objectives of the Civil Engineering Programme are in consonance with the realization of national needs and aspirations vis-à-vis industrial development and technological emancipation. The graduates must therefore be resourceful, creative, knowledgeable and able to perform the following functions:
    </p>
    <ul class='text-sm'>
        <li>(a) To design engineering projects and supervise their implementation</li>
        <li>(b) To design and implement components, machines, equipment and systems.</li>
        <li>(c) To design and develop new products and production techniques in industries</li>
        <li>(d) To install and maintain complex engineering systems so that they can perform optimally in our environment</li>
        <li>(e) To adapt and adopt exogenous technology in order to solve local engineering problems.</li>
        <li>(f) To be able to exercise original thought, have good professional judgment and be able to take responsibility for the direction of important tasks.</li>
        <li>(g) To be able to manage people, fund, materials and equipment.</li>
        <li>(h) To improve on indigenous technology to enhance local problems solving capability</li>
        <li>(i) To be able to exercise original thought, have good professional judgment and be able to take responsibility for the direction of important tasks.</li>
    </ul>
</div>


        <h2 className='py-4 font-semibold text-center'>COURSE STRUCTURE</h2>
        <hr className='w-32 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5' />

        <div className='flex flex-wrap justify-center'>
          <img src={images.civil1} alt='civil' className='w-[80]' />
          <img src={images.civil2} alt='civil' className='md:w-1/2' />
          <img src={images.civil3} alt='civil' className='md:w-1/2' />
          <img src={images.civil4} alt='civil' className='md:w-1/2' />
          <img src={images.civil5} alt='civil' className='md:w-1/2' />
        </div>

        <div className='text-center'>
          <h2 className='py-4 font-semibold'>COURSE MATERIALS</h2>
          <CivilpdfFiles />
        </div>
      </div>
    </>
  );
}

export default Civil;
