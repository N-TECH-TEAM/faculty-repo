import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../layouts'
import { FaAlignLeft } from 'react-icons/fa'
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const history = useNavigate();

  const handleClick = () => {
    signOut(auth).then(val => {
      console.log(val, "val")
      history('/')
    });
  }

  return (
    <nav className="bg-gray-200 p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold">
              <img src={images.nuesa} alt='nuesa_logo' className='w-20' />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/page" className="text-gray-500 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="about" className="text-gray-500 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link to="leadership" className="text-gray-500 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Leadership</Link>
              <Link to="contact" className="text-gray-500 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
              <Link to="Gallery" className="text-gray-500 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
              <Link to="Blog" className="text-gray-500 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
              <div>
                <button onClick={handleClick} className=' underline font-bold hover:text-orange-400' >SignOut</button>
              </div>

              <Menu as="div" className=" md:relative inline-block text-left ">

                <div className=''>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 hover:text-gray-400 md:px-3 mt-4  font-normal text-gray-500 shadow-sm ">
                    Departments
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-orange-400" aria-hidden="true" />
                  </Menu.Button>


                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-200 shadow-lg ring-1 ring-orange-400 ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                      <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="civil"
                              className={(
                                active ? 'bg-blue-500 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm  hover:text-orange-400'
                              )}
                            >
                              Civil
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="chem"
                              className={(
                                active ? 'bg-blue-500 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm  hover:text-orange-400'
                              )}
                            >
                              Chemical
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="elect"
                              className={(
                                active ? 'bg-blue-500 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm  hover:text-orange-400'
                              )}
                            >
                              Electrical
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="mech"
                              className={(
                                active ? 'bg-blue-500 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm  hover:text-orange-400'
                              )}
                            >
                              Mechanical
                            </Link>
                          )}
                        </Menu.Item>

                      </div>
                    </Menu.Items>
                  </Transition>
                </div>
              </Menu>

            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-white mt-3 bg-orange-400 rounded-xl p-4 mr-3 focus:outline-none "
              onClick={toggleMenu}
            >
              <FaAlignLeft />
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden  ease-in-out duration-500 ${isOpen ? 'block' : 'hidden'}`} >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700  mt-5">
          <Link to="/page" className="text-white hover:text-gray-400 block px-3 py-2 border-b border-orange-400 rounded-md text-base font-medium">Home</Link>
          <Link to="about" className="text-white hover:text-gray-400 block px-3 py-2 border-b border-orange-400 rounded-md text-base font-medium">About</Link>
          <Link to="contact" className="text-white hover:text-gray-400 block px-3 py-2 border-b border-orange-400 rounded-md text-base font-medium">Contact</Link>
          <Link to="Leadership" className="text-white hover:text-gray-400 block px-3 py-2 border-b border-orange-400 rounded-md text-base font-medium">Leadership-Team</Link>
          <Link to="gallery" className="text-white hover:text-gray-400 block px-3 py-2 border-b border-orange-400 rounded-md text-base font-medium">Gallery</Link>
          <Link to="Blog" className="text-white hover:text-gray-400 block px-3 py-2 border-b border-orange-400 rounded-md text-base font-medium">Blog</Link>
         
         
         
          <Menu as="div" className=" md:relative inline-block text-left ">

            <div className=''>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 text-white  hover:text-gray-400 md:px-3 mt-4  font-normal shadow-sm ">
                Departments
                <ChevronDownIcon className="-mr-1 h-5 w-5  text-orange-400" aria-hidden="true" />
              </Menu.Button>


              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-200 shadow-lg ring-1 ring-orange-400 ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                  <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="civil"
                          className={(
                            active ? 'bg-blue-500 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Civil
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="chem"
                          className={(
                            active ? 'bg-blue-500 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Chemical
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="elect"
                          className={(
                            active ? 'bg-blue-500 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Electrical
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="mech"
                          className={(
                            active ? 'bg-blue-500 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Mechanical
                        </Link>
                      )}
                    </Menu.Item>


                  </div>
                </Menu.Items>
              </Transition>
            </div>
          </Menu>
          <div>

            <button onClick={handleClick} className='text-white underline font-bold hover:text-orange-400' >SignOut</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
