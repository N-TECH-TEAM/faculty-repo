import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper';
import achievement1 from './GalleryImages/achievement1.jpg'; // Import your achievement images

const AchievementsAndAwards = () => {
    const [showAll, setShowAll] = useState(false);
    const [showDetails, setShowDetails] = useState(null); // Track which achievement's details to show
    const [selectedAchievement, setSelectedAchievement] = useState(null); // Track selected achievement

    // Sample data for achievements and awards
    const initialAchievements = [
        { id: 1, title: 'Achievement 1', description: 'Description for Achievement 1', imageUrl: achievement1, date: 'January 1, 2024' },
        { id: 2, title: 'Achievement 2', description: 'Description for Achievement 2', imageUrl: achievement1, date: 'January 1, 2024' },
        { id: 3, title: 'Achievement 3', description: 'Description for Achievement 3', imageUrl: achievement1, date: 'January 1, 2024' },
        { id: 4, title: 'Achievement 4', description: 'Description for Achievement 4', imageUrl: achievement1, date: 'January 1, 2024' },
        { id: 5, title: 'Achievement 5', description: 'Description for Achievement 5', imageUrl: achievement1, date: 'January 1, 2024' },
        // Add more achievements as needed
    ];

    const [achievements, setAchievements] = useState(initialAchievements.slice(0, 3));

    const handleSeeMore = () => {
        setShowAll(true);
        setAchievements(initialAchievements);
    };

    const handleSeeLess = () => {
        setAchievements(initialAchievements.slice(0, 3));
        setShowAll(false);
    };

    const toggleDetails = (achievementId) => {
        setSelectedAchievement(initialAchievements.find(achievement => achievement.id === achievementId));
        setShowDetails(showDetails === achievementId ? null : achievementId);
    };
    const renderDetailsModal = () => {
        if (selectedAchievement) {
            return (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 text-black">
                        <img src={selectedAchievement.imageUrl} alt={selectedAchievement.title} className="w-full h-56 object-cover mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{selectedAchievement.title}</h3>
                        <p className="text-sm mb-2">{selectedAchievement.description}</p>
                        <p>Date: {selectedAchievement.date}</p>
                        <p>Venue: Your Venue Name</p>
                        <p>Overview: Brief overview of what happened at the event.</p>
                        <button onClick={() => setSelectedAchievement(null)} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg focus:outline-none">
                            Close
                        </button>
                    </div>
                </div>
            );
        }
    };
    

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl text-center font-bold p-4 mb-4">Achievements and Awards  
            <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10'></hr></h2>
            <div className="sm:hidden">
                <p className="text-lg px-4 text-center font-bold mb-4">Explore our achievements and awards, recognizing outstanding contributions and accomplishments.</p>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="swiper-achievements"
                >
                    {initialAchievements.map(achievement => (
                        <SwiperSlide key={achievement.id}>
                            <div className="bg-white shadow-md p-4 mb-4">
                                <img src={achievement.imageUrl} alt={achievement.title} className="w-full mb-2" />
                                <h3 className="text-xl font-bold">{achievement.title}</h3>
                                <p className="text-sm">{achievement.description}</p>
                                <button onClick={() => toggleDetails(achievement.id)} className="text-green-500 mt-2">Details</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="md:block hidden">
                <p className="text-lg px-8 text-center font-bold mb-4">Explore our achievements and awards, recognizing outstanding contributions and accomplishments.</p>
                <div className="flex flex-wrap justify-center">
                    {achievements.map(achievement => (
                        <div key={achievement.id} className="bg-white shadow-md p-4 md:w-1/4 mx-2 my-4">
                            <img src={achievement.imageUrl} alt={achievement.title} className="w-full mb-2" />
                            <h3 className="text-xl font-bold">{achievement.title}</h3>
                            <p className="text-sm">{achievement.description}</p>
                            <button onClick={() => toggleDetails(achievement.id)} className="text-green-500 mt-2">Details</button>
                        </div>
                    ))}
                </div>
                {!showAll && initialAchievements.length > 3 && (
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

export default AchievementsAndAwards;
