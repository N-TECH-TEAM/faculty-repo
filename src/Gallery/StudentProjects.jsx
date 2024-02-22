import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper';
import project1 from './GalleryImages/project1.jpg'; // Import your project images

const StudentProjects = () => {
    const [showAll, setShowAll] = useState(false);
    const [showDetails, setShowDetails] = useState(null); // Track which project's details to show
    const [selectedProject, setSelectedProject] = useState(null); // Track selected project

    // Sample data for student projects
    const initialProjects = [
        { id: 1, title: 'Project 1', description: 'Description for Project 1', imageUrl: project1, date: 'January 1, 2024' },
        { id: 2, title: 'Project 2', description: 'Description for Project 2', imageUrl: project1, date: 'January 1, 2024' },
        { id: 3, title: 'Project 3', description: 'Description for Project 3', imageUrl: project1, date: 'January 1, 2024' },
        { id: 4, title: 'Project 4', description: 'Description for Project 4', imageUrl: project1, date: 'January 1, 2024' },
        { id: 5, title: 'Project 5', description: 'Description for Project 5', imageUrl: project1, date: 'January 1, 2024' },
        // Add more projects as needed
    ];

    const [projects, setProjects] = useState(initialProjects.slice(0, 3));

    const handleSeeMore = () => {
        setShowAll(true);
        setProjects(initialProjects);
    };

    const handleSeeLess = () => {
        setProjects(initialProjects.slice(0, 3));
        setShowAll(false);
    };

    const toggleDetails = (projectId) => {
        setSelectedProject(initialProjects.find(project => project.id === projectId));
        setShowDetails(showDetails === projectId ? null : projectId);
    };

    const renderDetailsModal = () => {
        if (selectedProject) {
            return (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 text-black">
                        <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-56 object-cover mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{selectedProject.title}</h3>
                        <p className="text-sm mb-2">{selectedProject.description}</p>
                        <p>Date: {selectedProject.date}</p>
                        <button onClick={() => setSelectedProject(null)} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg focus:outline-none">
                            Close
                        </button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl text-center font-bold p-4 mb-4">Student Projects
            <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10'></hr></h2>
            <div className="sm:hidden">
                <p className="text-lg px-4 text-center font-bold mb-4">Explore student projects undertaken by NUESA members or affiliated students.</p>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="swiper-projects"
                >
                    {initialProjects.map(project => (
                        <SwiperSlide key={project.id}>
                            <div className="bg-white shadow-md p-4 mb-4">
                                <img src={project.imageUrl} alt={project.title} className="w-full mb-2" />
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-sm">{project.description}</p>
                                <button onClick={() => toggleDetails(project.id)} className="text-green-500 mt-2">Details</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="md:block hidden">
                <p className="text-lg px-8 text-center font-bold mb-4">Explore student projects undertaken by NUESA members or affiliated students.</p>
                <div className="flex flex-wrap justify-center">
                    {projects.map(project => (
                        <div key={project.id} className="bg-white shadow-md p-4 md:w-1/4 mx-2 my-4">
                            <img src={project.imageUrl} alt={project.title} className="w-full mb-2" />
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p className="text-sm">{project.description}</p>
                            <button onClick={() => toggleDetails(project.id)} className="text-green-500 mt-2">Details</button>
                        </div>
                    ))}
                </div>
                {!showAll && initialProjects.length > 3 && (
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

export default StudentProjects;
