import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

// Import your component data and styles here...

// Initialize Swiper core components
SwiperCore.use([Pagination, Navigation, Autoplay]);

const categories = [
    'All',
    'N-presidency',
    'N-Executives',
    'N-Speaker/House',
    'N-Parliaments',
    "PLOs"
];

const peopleData = {
  'N-presidency': [
    { name: 'N-presidency Name 1', position: 'President', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-presidency Name 2', position: 'Vice President', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
  ],
  'N-Executives': [
    { name: 'N-Executives Name 1', position: 'Executive 1', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Executives Name 2', position: 'Executive 2', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Executives Name 3', position: 'Executive 3', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Executives Name 4', position: 'Executive 4', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Executives Name 5', position: 'Executive 5', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Executives Name 6', position: 'Executive 6', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Executives Name 7', position: 'Executive 7', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Executives Name 8', position: 'Executive 8', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Executives Name 9', position: 'Executive 9', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Executives Name 10', position:'Executive', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' }
  ],
  'N-Speaker/House': [
    { name: 'N-Speaker/House Name 1', position: 'Speaker', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Speaker/House Name 2', position: 'Member', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
     ],
  'N-Parliaments': [
    { name: 'N-Parliaments Name 1', position: 'Parliamentarian 1', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Parliaments Name 2', position: 'Parliamentarian 2', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Parliaments Name 3', position: 'Parliamentarian 3', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Parliaments Name 4', position: 'Parliamentarian 4', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Parliaments Name 5', position: 'Parliamentarian 5', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Parliaments Name 6', position: 'Parliamentarian 6', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Parliaments Name 7', position: 'Parliamentarian 7', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Parliaments Name 8', position: 'Parliamentarian 8', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Parliaments Name 9', position: 'Parliamentarian 9', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: 'N-Parliaments Name 10', position: 'Parliamentarian 10', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' }
  ],
  "PLOs": [
    { name: "PLO's Name 1", position: 'PLO 1', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
    { name: "PLO's Name 2", position: 'PLO 2', status: 'Active', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', level: 'High', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGJYK3Gy9NmDxZch-6uoclNpEXygnID1rnw&usqp=CAU' },
     ]
};


const NUESALeadership = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedPerson(null); // Reset selected person when category changes
    };

    const renderCards = () => {
        let peopleToShow = [];
        if (selectedCategory === 'All') {
            for (const category in peopleData) {
                peopleToShow = peopleToShow.concat(peopleData[category]);
            }
        } else {
            peopleToShow = peopleData[selectedCategory];
        }

        return peopleToShow.map((person, index) => (
            <div key={index} className="max-w-xs mx-auto mb-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    {/* Render the image */}
                    <img src={person.image} alt="Avatar" className="w-full h-56 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">{person.name}</h3>
                        <p className="text-sm text-green-700 mb-2">{person.position}</p>
                        <p className="text-sm text-green-700 mb-2">{person.status}</p>
                        <button onClick={() => setSelectedPerson(person)} className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-lg focus:outline-none">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        ));
    };

    const renderDetailsModal = () => {
        if (selectedPerson) {
            return (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center  z-50">
                    <div className="bg-white rounded-lg p-8 text-black">
                        {/* Render the image */}
                        <img src={selectedPerson.image} alt="Avatar" className="w-full h-56 object-cover mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{selectedPerson.name}</h3>
                        <p className="text-sm mb-2">Position: {selectedPerson.position}</p>
                        <p className="text-sm mb-2">Status: {selectedPerson.status}</p>
                        <p className="text-sm mb-2">Level: {selectedPerson.level}</p>
                        <p className="text-sm mb-2">{selectedPerson.bio}</p>
                        <button onClick={() => setSelectedPerson(null)} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg focus:outline-none">
                            Close
                        </button>
                    </div>
                </div>
            );
        }
    };

    return (
      <div className="bg-lightorange min-h-screen py-12">
      <h1 className="text-2xl text-center font-bold p-4 mb-4">Leadership Team<hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10'></hr></h1>
      <div className="flex justify-center mb-4">
          <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)} className="p-2 bg-white rounded-lg shadow-md">
              {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
              ))}
          </select>
      </div>
      {/* Use Swiper for mobile view */}
      <div className="md:hidden">
          <Swiper
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }} // Add Autoplay configuration
          >
              {renderCards().map((card, index) => (
                  <SwiperSlide key={index}>
                      {card}
                  </SwiperSlide>
              ))}
          </Swiper>
      </div>
      {/* Render cards for desktop view */}
      <div className="hidden md:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 justify-center">
              {renderCards()}
          </div>
      </div>
      {renderDetailsModal()}
  </div>
  
    );
};

export default NUESALeadership;
