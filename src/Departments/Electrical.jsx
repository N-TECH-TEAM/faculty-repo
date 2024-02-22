import React from 'react';
import { images } from '../layouts';
import ElectpdfFiles from '../components/pdf/ElectPDFfiles';

function Electrical() {
  return (
    <>
      <div className='p-6'>
      <h2 className='p-2 text-center font-bold'>ELECTRICAL ENGINEERING
          <hr className='w-1/2 md:w-[20%] h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md' />
        </h2>
        <h2 className="py-4 font-semibold text-center">WELCOME ADDRESS</h2>
  <div className="mb-4 flex flex-col sm:flex-row items-center">
    <div className="w-full sm:w-1/2">
      <p className="text-lg mb-4">
        Welcome to the Electrical and Electronic Engineering Department. We believe in your potential to grow and achieve higher levels in your academic journey. This guide will assist you in course registration, understanding graduation requirements, and participating in various activities offered by the department.
        As you progress toward graduation, questions may arise, and this guide aims to address many of them. However, we encourage you to engage with Lecturers, Level advisers, HOD, staff members, and fellow students for additional support and guidance.
        Above all, we encourage you to challenge yourself both inside and outside the classroom. Our program is designed to provide you with opportunities for personal and professional growth.
      </p>
    </div>
    <img src={images.ecover} alt="Welcome Address" className="w-full sm:w-1/2 ml-0 sm:ml-4" />
  </div>
  <div class='bg-green-700 text-white p-3'>
    <h2 class='py-4 font-semibold'>BRIEF HISTORY OF THE PROGRAMME:</h2>
    <p class='text-sm'>
        About 27 years ago, the Federal Government established the University of Abuja, to forge national unity by providing a conducive environment for learning, and interaction for the youths from all parts of Nigeria. To achieve this noble objective, several faculties and other relevant academic Programmes were created in various fields of human endeavour. But only the availability of adequate manpower in Engineering can lead to realization of national needs and aspiration in relation to industrial development and technological emancipation. To realize this, the Senate of the University at its 92nd Regular Meeting held on 27th October 2004 approved the establishment of the Faculty of Engineering having Electrical and Electronic Engineering Department among others with effect from 2005/2006 session
    </p>

    <h2 class='py-4 font-semibold'>AIMS AND OBJECTIVES OF PROGRAMME:</h2>
    <p class='text-sm'>
        The aims and objectives of the Electrical/Electronics Engineering Programme are in consonance with the realization of national needs and aspirations vis-à-vis industrial development and technological emancipation. The graduates must therefore be resourceful, creative, knowledgeable and able to design, install, maintain, adapt, adopt, manage and improve engineering systems. The objectives of the Programme are to produce Engineering graduates who shall possess the following attributes:
    </p>
    <br />
    <ul class='text-sm'>
        <li>(a) The ability to design and analyse Electrical or Electronics systems.</li>
        <li>(b) The ability to manage people’s fund, materials and equipment diligently.</li>
        <li>(c) Develop professionalism in relevant areas and maintain contact with learned bodies.</li>
        <li>(d) The ability to improve on indigenous technology to enhance local problems solving capability.</li>
        <li>(e) Provide educational diversity to meet the needs of emerging sub fields within the Electrical and/or Electronic Engineering and related disciplines.</li>
        <li>(f) To produce high level skilled technological manpower for wider application in Nigeria.</li>
        <li>(g) Ability to install and maintain complex engineering systems so that they can perform optimally in an environment.</li>
        <li>(h) To make life more meaningful to the local populace by harnessing and developing more on the global electronic age.</li>
        <li>(i) To adapt and adopt exogenous technology in order to solve local engineering problems.</li>
    </ul>
</div>


        <h2 className='py-4 font-semibold text-center'>COURSE STRUCTURE</h2>
        <hr className='w-32 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-5' />
      </div>

      <div className='flex flex-wrap justify-center'>
        <img src={images.elect3} alt='elect3' className='w-full md:w-1/2' />
        <img src={images.elect3b} alt='elect3' className='w-full md:w-1/2' />
        <img src={images.elect4a} alt='elect3' className='w-full md:w-1/2' />
        <img src={images.elect5a} alt='elect3' className='w-full md:w-1/2' />
        <img src={images.elect5b} alt='elect3' className='w-full md:w-1/2' />
        <img src={images.elect5c} alt='elect3' className='w-full md:w-1/2' />
        <img src={images.elect5d} alt='elect3' className='w-full md:w-1/2' />
      </div>

      <div className='text-center'>
        <h2 className='py-4 font-semibold'>COURSE MATERIALS</h2>
        <ElectpdfFiles />
      </div>
    </>
  );
}

export default Electrical;
