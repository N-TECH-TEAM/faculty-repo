import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper';
import sport1 from './GalleryImages/sport1.jpg'; // Import your sport images

const Sports = () => {
    const [showAll, setShowAll] = useState(false);
    const [showDetails, setShowDetails] = useState(null); // Track which sport's details to show
    const [selectedSport, setSelectedSport] = useState(null); // Track selected sport

    // Sample data for sports
    const initialSports = [
        { id: 1, title: 'Sport 1', description: 'Description for Sport 1', imageUrl: sport1, date: 'January 1, 2024' },
        { id: 2, title: 'Sport 2', description: 'Description for Sport 2', imageUrl: sport1, date: 'January 1, 2024' },
        { id: 3, title: 'Sport 3', description: 'Description for Sport 3', imageUrl: sport1, date: 'January 1, 2024' },
        { id: 4, title: 'Sport 4', description: 'Description for Sport 4', imageUrl: sport1, date: 'January 1, 2024' },
        { id: 5, title: 'Sport 5', description: 'Description for Sport 5', imageUrl: sport1, date: 'January 1, 2024' },
        // Add more sports as needed
    ];

    const [sports, setSports] = useState(initialSports.slice(0, 3));

    const handleSeeMore = () => {
        setShowAll(true);
        setSports(initialSports);
    };

    const handleSeeLess = () => {
        setSports(initialSports.slice(0, 3));
        setShowAll(false);
    };

    const toggleDetails = (sportId) => {
        setSelectedSport(initialSports.find(sport => sport.id === sportId));
        setShowDetails(showDetails === sportId ? null : sportId);
    };

    const renderDetailsModal = () => {
        if (selectedSport) {
            return (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 text-black">
                        <img src={selectedSport.imageUrl} alt={selectedSport.title} className="w-full h-56 object-cover mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{selectedSport.title}</h3>
                        <p className="text-sm mb-2">{selectedSport.description}</p>
                        <p>Date: {selectedSport.date}</p>
                        <p>Venue: Your Venue Name</p>
                        <p>Overview: Brief overview of what happened at the event.</p>
                        <button onClick={() => setSelectedSport(null)} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg focus:outline-none">
                            Close
                        </button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl text-center font-bold p-4 mb-4">Sports <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10'></hr></h2>
            <div className="sm:hidden">
                <p className="text-lg px-4 text-center font-bold mb-4">Explore sports-related content and activities.</p>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="swiper-sports"
                >
                    {initialSports.map(sport => (
                        <SwiperSlide key={sport.id}>
                            <div className="bg-white shadow-md p-4 mb-4">
                                <img src={sport.imageUrl} alt={sport.title} className="w-full mb-2" />
                                <h3 className="text-xl font-bold">{sport.title}</h3>
                                <p className="text-sm">{sport.description}</p>
                                <button onClick={() => toggleDetails(sport.id)} className="text-green-500 mt-2">Details</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="md:block hidden">
                <p className="text-lg px-8 text-center font-bold mb-4">Explore sports-related content and activities.</p>
                <div className="flex flex-wrap justify-center">
                    {sports.map(sport => (
                        <div key={sport.id} className="bg-white shadow-md p-4 md:w-1/4 mx-2 my-4">
                            <img src={sport.imageUrl} alt={sport.title} className="w-full mb-2" />
                            <h3 className="text-xl font-bold">{sport.title}</h3>
                            <p className="text-sm">{sport.description}</p>
                            <button onClick={() => toggleDetails(sport.id)} className="text-green-500 mt-2">Details</button>
                        </div>
                    ))}
                </div>
                {!showAll && initialSports.length > 3 && (
                    <button onClick={handleSeeMore} className="text-orange-700 hover:bg-orange-400 rounded-lg hover:text-white px-9 mt-2">See more</button>
                )}
                {showAll && (
                    <button onClick={handleSeeLess} className="text-orange-700 hover:bg-orange-400 rounded-lg hover:text-white px-9 mt-2">See less</button>
                )}
            </div>
            {renderDetailsModal()}
        </div>
    );
};

export default Sports;
