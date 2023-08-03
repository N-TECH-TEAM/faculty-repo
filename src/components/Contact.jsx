import React from 'react'
import { images } from '../layouts'

function Contact() {
  return (
    <div className='w-screen h-auto mt-8 bg-gray-200'>

      

        <h2 className='text-2xl py-5 text-gray-800 text-center'>Get In Touch
          <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10'></hr>
        </h2>
        <div className='p-4 gap-4 flex flex-col md:flex-row  md:justify-center md:items-center'>
        <div>
          <p className='p-2 text-gray-700 font-bold text-sm font-serif'>Fill the form and receive an immediate respons within 12hours</p>

          <p className='p-2 text-gray-700 font-bold text-sm font-serif'>+234-915-884-6080</p>

          <p className='p-2 text-gray-700 font-bold text-sm font-serif'>nuesauniabujachapter001@gmail.com</p>
        </div>

        <div className=''>


          <img src={images.map} alt='' className='w-[60%] md:w-[70%]' />


        </div>
      </div>



      <div className='ml-6 space-y-3 w-[60%] md:w-[50%]'>
        <form>
          <div className='flex flex-col'>
            <label className='capitalize text-sm py-2'>
              name
            </label>
            <input type='text' name='name' placeholder='your name' className='border-2 rounded-lg  p-3 flex 
                                focus:outline-none border-gray-400 dark:bg-gray-white dark:text-gray-900'
            />
          </div>

          <div className='flex flex-col'>
            <label className='capitalize text-sm py-2'>
              Email
            </label>
            <input type='email' name='name' placeholder='your email' className='border-2 rounded-lg  p-3 flex 
                                focus:outline-none border-gray-400 dark:bg-gray-white dark:text-gray-900'
            />
          </div>
          <div className='flex flex-col'>
            <label className='capitalize text-sm py-2'>
              Subject
            </label>
            <input type='text' name='subject' placeholder='your subject' className='border-2 rounded-lg  p-3 flex 
                                focus:outline-none border-gray-400 dark:bg-gray-white dark:text-gray-900'
            />
          </div>
          <div className='flex flex-col'>
            <label className='capitalize text-sm py-2'>
              message
            </label>
            <textarea name='message' rows='10' className='border-2 rounded-lg  p-3 flex 
                                focus:outline-none border-gray-400 dark:bg-gray-white dark:text-gray-900 resize-none'>
            </textarea>
          </div>


          <div className='flex items-center justify-center'>
            <button className='my-8 bg-transparent  px-6 py-3 uppercase text-gray-800 hover:bg-green-700 hover:text-white  border-4 border-orange-400 rounded-xl cursor-pointer hover:scale-105 duration-200'>
              SEND MESSAGE
            </button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Contact