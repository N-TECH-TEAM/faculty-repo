import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Navbar</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
            All
          </Link>
          <Link to="/faculty-events" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
            Faculty Events
          </Link>
          <Link to="/excursion" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
            Excursion
          </Link>
          <Link to="/visits" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
            Visits
          </Link>
          <Link to="/scholarships" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
            Scholarships
          </Link>
          <Link to="/achievements" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
            Achievements
          </Link>
          <Link to="/news" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white">
            News
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Testing() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img className="w-full h-" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU" alt="Background" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold">Left Section Text</h1>
            <p className="text-lg mt-4">Some description text here.</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold">Right Section Text</h1>
            <p className="text-lg mt-4">Some description text here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testing;
