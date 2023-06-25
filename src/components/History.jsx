import React from 'react'
import { images } from '../layouts'
import { Link } from 'react-router-dom'

function History() {
    return (
        <div className='justify-center '>

            <div className=' py-1 md:flex bg-green-700'>
                <div className='text-center '>
                    <h2 className='text-2xl py-5 text-white'>Brief History of NUESA
                        <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10 '></hr>
                    </h2>
                    <p className='text-white mr-2   text-left p-4 text-sm md:mr-20'>NUESA Engineering, also known as the National Union of Engineering Students' Associations, is an organization that represents engineering students in Nigeria.

                        Engineering education in Nigeria began in the early <span className='text-orange-400 '>20th century during the colonial period.</span>  The first engineering programs were established in institutions such as Yaba Higher College (now Yaba College of Technology) and the Nigerian College of Arts, Science, and Technology (now Ahmadu Bello University).

                        Over time, engineering programs expanded across various Nigerian universities and polytechnics, and the need for a collective voice for engineering students arose. This led to the establishment of student associations, including NUESA Engineering, to represent and advocate for the interests of engineering students.

                    </p>
                </div>
                <div className='flex justify-center items-center py-5 md:py-0'>

                    <img src={images.nuesaA} alt='nuesa' className=' md:w-screen h-auto rounded-2xl md:mr-20 md:mt-10' />


                </div>

            </div>


            <div className='text-center py-10 md:flex bg-white '>
                <div className='text-center '>
                    <h2 className='text-2xl py-5 text-gray-800'>NUESA in Uni Abuja
                        <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10 '></hr>
                    </h2>
                    <p className='text-gray-800 mr-2 text-sm text-left p-5 md:pl-5'>
                        National Universities Engineering students association (NUESA) is a branch of the general engineering students in Nigeria and also the student wing of the Nigerian Society of Engineer (NSE). The Union comprises engineering students from the different departments of engineering across various universities.
                        The NUESA (uniabuja chapter), having been established to encourage exposure, learning socialization and inter-University interactions between students studying engineering in the university of Abuja, also helps students achieve mentorship in line with the NSE Giri branch, Abuja headed by Dr. Okpanachi
                        The association also exists to equip students with the necessary technologies, academically and professionally and is headed by a president,(Comr.PaulAchu).
                        
                    </p>
                </div>
                <div className='flex justify-center items-center py-5 md:py-0'>

                    <img src={images.logo} alt='nuesa' className='w-96 md:w-2/3 rounded-2xl' />


                </div>


            </div>


            <div className='flex justify-center my-4 '>
                <button className='uppercase text-gray-800 hover:text-white hover:bg-green-700 border-4 border-orange-400   py-3 px-5 rounded-xl cursor-pointer hover:scale-105 duration-200'>
                    <Link to="about"> learn more</Link>

                </button>
            </div>

        </div>
    )
}

export default History