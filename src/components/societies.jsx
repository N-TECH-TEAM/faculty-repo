import React from 'react'
import { images } from '../layouts'

function societies() {
    return (
        <div className=' bg-green-700'>
            <div className='text-center'>
                <h2 className='uppercase pt-3  text-white text-xl '>governed by
                    <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10 '></hr>
                </h2>
            </div>

            <div className='flex justify-center items-center p-6 space-y-5 md:gap-5 flex-col md:flex-row '>

                <div>
                    <img src={images.nse} alt='' className='w-48 h-36 rounded-sm' />
                </div>

                <div>
                    <img src={images.coren} alt='' className=' w-33 h-36 mb-4 rounded-sm' />
                </div>

            </div>
        </div>
    )
}

export default societies