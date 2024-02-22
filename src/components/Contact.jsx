import React from 'react';
import { images } from '../layouts';

function Contact() {
  return (
    <div className='w-full h-auto mt-8 bg-gray-200 px-4 md:px-0'>
      <h2 className='text-2xl py-5 text-gray-800 text-center'>
        Get In Touch
        <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10'></hr>
      </h2>
      <div className='p-4 gap-4 flex flex-col md:flex-row md:justify-center md:items-center'>
        <div className='md:mr-4'>
          <p className='p-2 text-gray-700 font-bold text-sm font-serif'>
            Fill out the form and receive an immediate response within 12 hours
          </p>
          <a className='p-2 text-gray-700 font-bold text-sm font-serif' href='+234-915-884-6080' alt='phone number'>call Us:+234-915-884-6080</a>
        <br/>  <a className='p-2 text-gray-700 font-bold text-sm font-serif' href='nuesauniabujachapter001@gmail.com' alt='email'>Email Us:nuesauniabujachapter001@gmail.com</a>
        </div>
        <div>
          <img src={images.map} alt='Map' className='w-[60%] md:w-[70%] max-w-[400px] mx-auto' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <form className="w-full md:w-[50%] max-w-lg">
          <div className='flex flex-col mb-4'>
            <label className='capitalize text-sm py-2'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-white dark:text-gray-900'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='capitalize text-sm py-2'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-white dark:text-gray-900'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='capitalize text-sm py-2'>Subject</label>
            <input
              type='text'
              name='subject'
              placeholder='Your Subject'
              className='border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-white dark:text-gray-900'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='capitalize text-sm py-2'>Message</label>
            <textarea
              name='message'
              rows='5'
              className='border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-white dark:text-gray-900 resize-none'
              placeholder='Your Message'
            ></textarea>
          </div>
          <div className='flex items-center justify-center'>
            <button className='my-8 bg-transparent px-6 py-3 uppercase text-gray-800 hover:bg-green-700 hover:text-white border-4 border-orange-400 rounded-xl cursor-pointer hover:scale-105 duration-200'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
