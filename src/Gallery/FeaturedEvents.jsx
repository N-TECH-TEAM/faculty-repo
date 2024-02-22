import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper';
import event1 from './GalleryImages/event1.jpg'; // Import your images

const FeaturedEvents = () => {
    const [showAll, setShowAll] = useState(false);
    const [showDetails, setShowDetails] = useState(null); // Track which event's details to show
    const [selectedEvent, setSelectedEvent] = useState(null); // Track selected event

    // Sample data for events
    const initialEvents = [
        { id: 1, title: 'Event 1', description: 'Description for Event 1', imageUrl: event1, date: 'January 1, 2024', venue: 'Your Venue Name', overview: 'Brief overview of what happened at the event.' },
        { id: 2, title: 'Event 2', description: 'Description for Event 2', imageUrl: event1, date: 'January 1, 2024', venue: 'Your Venue Name', overview: 'Brief overview of what happened at the event.' },
        { id: 3, title: 'Event 3', description: 'Description for Event 3', imageUrl: event1, date: 'January 1, 2024', venue: 'Your Venue Name', overview: 'Brief overview of what happened at the event.' },
        { id: 4, title: 'Event 4', description: 'Description for Event 4', imageUrl: event1, date: 'January 1, 2024', venue: 'Your Venue Name', overview: 'Brief overview of what happened at the event.' },
        { id: 5, title: 'Event 5', description: 'Description for Event 5', imageUrl: event1, date: 'January 1, 2024', venue: 'Your Venue Name', overview: 'Brief overview of what happened at the event.' },
        { id: 6, title: 'Event 6', description: 'Description for Event 6', imageUrl: event1, date: 'January 1, 2024', venue: 'Your Venue Name', overview: 'Brief overview of what happened at the event.' },
        { id: 7, title: 'Event 7', description: 'Description for Event 7', imageUrl: event1, date: 'January 1, 2024', venue: 'Your Venue Name', overview: 'Brief overview of what happened at the event.' },
        { id: 8, title: 'Event 8', description: 'Description for Event 8', imageUrl: event1, date: 'January 1, 2024', venue: 'Your Venue Name', overview: 'Brief overview of what happened at the event.' },
        // Add more events as needed
    ];

    const [events, setEvents] = useState(initialEvents.slice(0, 3));

    const handleSeeMore = () => {
        setShowAll(true);
        setEvents(initialEvents);
    };

    const handleSeeLess = () => {
        setEvents(initialEvents.slice(0, 3));
        setShowAll(false);
    };

    const toggleDetails = (eventId) => {
        setSelectedEvent(initialEvents.find(event => event.id === eventId));
        setShowDetails(showDetails === eventId ? null : eventId);
    };

    const renderDetailsModal = () => {
        if (selectedEvent) {
            return (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 text-black">
                        <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-56 object-cover mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{selectedEvent.title}</h3>
                        <p className="text-sm mb-2">{selectedEvent.description}</p>
                        <p>Date: {selectedEvent.date}</p>
                        <p>Venue: {selectedEvent.venue}</p>
                        <p>Overview: {selectedEvent.overview}</p>
                        <button onClick={() => setSelectedEvent(null)} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg focus:outline-none">
                            Close
                        </button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl text-center font-bold p-4 mb-4">Featured Events  
            <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10'></hr></h2>
            <div className="sm:hidden">
                <p className="text-lg px-4 text-center font-bold mb-4">Explore our captivating array of featured events, showcasing innovation, creativity, and community engagement.</p>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="swiper-gallery"
                >
                    {initialEvents.map(event => (
                        <SwiperSlide key={event.id}>
                            <div className="bg-white shadow-md p-4 mb-4">
                                <img src={event.imageUrl} alt={event.title} className="w-full mb-2" />
                                <h3 className="text-xl font-bold">{event.title}</h3>
                                <p className="text-sm">{event.description}</p>
                                <button onClick={() => toggleDetails(event.id)} className="text-green-500 mt-2">Details</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="md:block hidden">
                <p className="text-lg px-8 text-center font-bold mb-4">Explore our captivating array of featured events, showcasing innovation, creativity, and community engagement.</p>
                <div className="flex flex-wrap justify-center">
                    {events.map(event => (
                        <div key={event.id} className="bg-white shadow-md p-4 md:w-1/4 mx-2 my-4">
                            <img src={event.imageUrl} alt={event.title} className="w-full mb-2" />
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <p className="text-sm">{event.description}</p>
                            <button onClick={() => toggleDetails(event.id)} className="text-green-500 mt-2">Details</button>
                        </div>
                    ))}
                </div>
                {!showAll && initialEvents.length > 3 && (
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

export default FeaturedEvents;
