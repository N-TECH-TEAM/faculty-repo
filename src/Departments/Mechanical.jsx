import React from 'react';
import { images } from '../layouts';
import MechpdfFiles from '../components/pdf/MechPDFfiles';

function Mechanical() {
  return (
    <>
      <div className='p-6'>
        <h2 className='p-2 text-center font-bold'>MECHANICAL ENGINEERING
          <hr className='w-1/2 md:w-[20%] h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md' />
        </h2>

        <h2 className="py-4 font-semibold text-center">WELCOME ADDRESS</h2>
  <div className="mb-4 flex flex-col sm:flex-row items-center">
    <div className="w-full sm:w-1/2">
      <p className="text-lg mb-4">
        This section has been prepared by the Department of Mechanical Engineering to provide you with valuable and relevant information and guide you regarding a Bachelor’s degree in Mechanical Engineering. As a student in the Faculty of Engineering, it is your responsibility to educate yourself with the contents of this Handbook as it will enhance your learning experience in the classroom and beyond. This is the second edition of the Faculty Handbook and information contained therein are updated regularly. If there is anything you feel is not covered in the handbook or there are clarifications you would like to make, you can always consult with your level adviser or the Head of Department. Remember “Information is power” so get yourself familiarized with this Handbook. At this point, I will encourage you to take advantage of all that Department of Mechanical Engineering has to offer so that you can broaden your knowledge, grow intellectually, personally and socially. Welcome!
      </p>
    </div>
    {/* You can replace the 'src' attribute value with your actual image source */}
    <img src={images.mcover} alt="Welcome Address" className="w-full sm:w-1/2 ml-0 sm:ml-4" />
  </div>


  <div class='bg-green-700 text-white p-3'>
    <h2 class='py-4 font-semibold'>BRIEF HISTORY OF THE PROGRAMME:</h2>
    <p class='text-sm'>
        About 27 years ago, the Federal Government established the University of Abuja, to forge national unity by providing a conducive environment for learning, and interaction for the youths from all parts of Nigeria. To achieve this noble objective, several faculties and other relevant academic Programmes were created in various fields of human endeavour. But only the availability of adequate manpower in Engineering can lead to realization of national needs and aspiration in relation to industrial development and technological emancipation. To realize this, the Senate of the University at its 92nd Regular Meeting held on 27th October 2004 approved the establishment of the Faculty of Engineering having Electrical and Electronic Engineering Department among others with effect from 2005/2006 session
    </p>

    <h2 class='py-4 font-semibold'>AIMS AND OBJECTIVES OF PROGRAMME :</h2>
    <p>
        The University of Abuja was established in January, 1988 and academic work started in 1990. Its establishment was aimed at forging national unity by providing a conductive environment for learning and interaction for the youths from all parts of Nigeria. The Senate of the University at its 92nd regular meeting held on 27th October, 2004 approved the establishment of the Department of Mechanical Engineering in the Faculty of Engineering with effect from 2005/2006 Session. The Programme took off at the mini campus, University of Abuja situated at Gwagwalada. The Department runs a 5-year degree Programme leading to the award of the Bachelor of Engineering (B. Eng) degree in Mechanical Engineering.
        <br />
        In addition to the broad aim of the programme above, the specific objectives are to produce Engineering graduates who shall possess the following attributes:
        <ul>
            <li>The ability to design Engineering projects and supervise their constructions</li>
            <li>The ability to manage people’s fund, materials and equipment diligently.</li>
            <li>The ability to exercise original thought, have good professional judgment and be able to take responsibility for the direction of important tasks.</li>
            <li>The ability to improve on indigenous technology to enhance local problems solving capability.</li>
            <li>The ability to install and maintain complex engineering systems so that they can perform optimally in an environment.</li>
            <li>To produce high level skilled technological manpower for wider application in Nigeria.</li>
            <li>To develop links with local industries and also maintain a data bank for use by industries.</li>
            <li>To progress in successful professional careers in Mechanical engineering or will continue their studies at a graduate level.</li>
            <li>To be able to exercise original thought, have good professional judgment and be able to take responsibility for the direction of important tasks.</li>
        </ul>
    </p>
</div>


        <h2 className='py-4 font-semibold text-center'>COURSE STRUCTURE
          <hr className='w-32 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10' />
        </h2>
      </div>

      <div className='flex flex-wrap justify-center'>
        <img src={images.elect3} alt='mech' className='w-full md:w-1/2' />
        <img src={images.elect3b} alt='mech' className='w-full md:w-1/2' />
        <img src={images.elect4a} alt='mech' className='w-full md:w-1/2' />
        <img src={images.elect5a} alt='mech' className='w-full md:w-1/2' />
        <img src={images.elect5b} alt='mech' className='w-full md:w-1/2' />
        <img src={images.elect5c} alt='mech' className='w-full md:w-1/2' />
        <img src={images.elect5d} alt='mech' className='w-full md:w-1/2' />
      </div>

      <div className='text-center'>
        <h2 className='py-4 font-semibold'>COURSE MATERIALS</h2>
        <MechpdfFiles />
      </div>
    </>
  );
}

export default Mechanical;
