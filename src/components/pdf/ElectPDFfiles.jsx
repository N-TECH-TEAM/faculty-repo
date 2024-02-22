import React, { useState } from 'react';
import PDFCard from './PDFCard'; // Import the PDFCard component
import sample from './PDFimageFiles/sample.pdf'; // Replace with your PDF file
import pdfThumbnail from './PDFimageFiles/pdfThumbnail.png'; // Replace with your PDF thumbnail image
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core'; // Import Swiper core components
SwiperCore.use([Pagination, Navigation, Autoplay]); // Enable Swiper core components

const ElectPDFfiles = () => {
    const [selectedLevel, setSelectedLevel] = useState('0'); // State to track the selected level
    const [currentPage, setCurrentPage] = useState(1); // State to track the current page
    const [searchQuery, setSearchQuery] = useState(''); // State to track the search query
    const itemsPerPageAll = 10; // Number of items to display per page when viewing all levels
    const itemsPerPageIndividual = 5; // Number of items to display per page when viewing individual levels

    // Data for PDF materials of different levels
    const pdfMaterials = {
        '100': [
            { name: 'gst 101A', title: 'engineering materials', level: '100', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'gst 101A', title: 'engineering materials', level: '100', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'gst 101A', title: 'engineering materials', level: '100', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'gst 101A', title: 'engineering materials', level: '100', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'gst 101A', title: 'engineering materials', level: '100', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'gst 101A', title: 'engineering materials', level: '100', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'gst 101A', title: 'engineering materials', level: '100', pdfImage: pdfThumbnail, pdfFile: sample },
            // Add more PDF materials for 100 level...
        ],
        '200': [
            { name: 'Feg 211', title: 'engineering materials', level: '200', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 211', title: 'engineering materials', level: '200', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 211', title: 'engineering materials', level: '200', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 211', title: 'engineering materials', level: '200', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 211', title: 'engineering materials', level: '200', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 211', title: 'engineering materials', level: '200', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 211', title: 'engineering materials', level: '200', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 211', title: 'engineering materials', level: '200', pdfImage: pdfThumbnail, pdfFile: sample },
            // Add more PDF materials for 200 level...
        ],
        '300': [
            { name: 'Feg 311', title: 'engineering materials', level: '300', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 311', title: 'engineering materials', level: '300', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 311', title: 'engineering materials', level: '300', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 311', title: 'engineering materials', level: '300', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 311', title: 'engineering materials', level: '300', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 311', title: 'engineering materials', level: '300', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 311', title: 'engineering materials', level: '300', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 311', title: 'engineering materials', level: '300', pdfImage: pdfThumbnail, pdfFile: sample },
            // Add more PDF materials for 300 level...
        ],
        '400': [
            { name: 'Feg 411', title: 'engineering materials', level: '400', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 411', title: 'engineering materials', level: '400', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 411', title: 'engineering materials', level: '400', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 411', title: 'engineering materials', level: '400', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 411', title: 'engineering materials', level: '400', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 411', title: 'engineering materials', level: '400', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 411', title: 'engineering materials', level: '400', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 411', title: 'engineering materials', level: '400', pdfImage: pdfThumbnail, pdfFile: sample },
            // Add more PDF materials for 400 level...
        ],
        '500': [
            { name: 'Feg 511', title: 'engineering materials', level: '500', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 511', title: 'engineering materials', level: '500', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 511', title: 'engineering materials', level: '500', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 511', title: 'engineering materials', level: '500', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 511', title: 'engineering materials', level: '500', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 511', title: 'engineering materials', level: '500', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 511', title: 'engineering materials', level: '500', pdfImage: pdfThumbnail, pdfFile: sample },
            { name: 'Feg 511', title: 'engineering materials', level: '500', pdfImage: pdfThumbnail, pdfFile: sample },
            // Add more PDF materials for 500 level...
        ],
        // Add more levels as necessary...
    };

    // Function to handle level change
    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
        setCurrentPage(1); // Reset current page to 1 when level changes
    };

    // Function to handle search input change
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Calculate index of the first item to display based on pagination
    const indexOfLastItem = currentPage * (selectedLevel === '0' ? itemsPerPageAll : itemsPerPageIndividual);
    const indexOfFirstItem = indexOfLastItem - (selectedLevel === '0' ? itemsPerPageAll : itemsPerPageIndividual);

    // Filter PDF materials based on the search query
    let filteredMaterials = selectedLevel === '0' ? Object.values(pdfMaterials).flat() : pdfMaterials[selectedLevel];
    if (searchQuery !== '') {
        filteredMaterials = filteredMaterials.filter((material) =>
            material.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Function to handle pagination - next page
    const nextPage = () => {
        const totalItems = selectedLevel === '0' ? Object.values(pdfMaterials).flat().length : pdfMaterials[selectedLevel].length;
        const maxPage = Math.ceil(totalItems / (selectedLevel === '0' ? itemsPerPageAll : itemsPerPageIndividual));
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to handle pagination - previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center items-center">
    <label htmlFor="level" className="mr-2 bg-orange-400 shadow-lg rounded text-white font-bold text-center"></label>
    <select id="level" onChange={handleLevelChange} value={selectedLevel} className="p-2 rounded text-white bg-green-500 hover:bg-green-700 mb-2 md:mb-0">
        <option value="0">All</option>
        <option value="100">100 level course materials</option>
        <option value="200">200 level course materials</option>
        <option value="300">300 level course materials</option>
        <option value="400">400 level course materials</option>
        <option value="500">500 level course materials</option>
        {/* Add more options for other levels... */}
    </select>
    {/* Search bar */}
    <input
        type="text"
        placeholder="Search PDFs..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="p-2 border border-orange-300 rounded-md ml-2"
        style={{ minWidth: '150px' }} // Adjust the width as needed
    />
</div>

            <div className="hidden md:block">
                <div className="flex flex-wrap justify-center">
                    {/* Render PDF materials based on the selected level and pagination */}
                    {filteredMaterials
                        .slice(indexOfFirstItem, indexOfLastItem)
                        .map((material, index) => (
                            <PDFCard key={index} {...material} />
                        ))}
                </div>
                {/* Pagination controls */}
                <div className="flex justify-center mt-4">
                    <button onClick={prevPage} disabled={currentPage === 1} className="mr-2 px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">
                        Prev
                    </button>
                    <button
                        onClick={nextPage}
                        disabled={
                            (selectedLevel === '0' && Object.values(pdfMaterials).flat().length <= currentPage * itemsPerPageAll) ||
                            (selectedLevel !== '0' && pdfMaterials[selectedLevel].length <= currentPage * itemsPerPageIndividual)
                        }
                        className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="md:hidden">
                <Swiper
                    slidesPerView={1}
                    navigation
                   
                    autoplay={{ delay: 3000 }} // Add Autoplay configuration
                >
                    {filteredMaterials.map((material, index) => (
                        <SwiperSlide key={index}>
                            <PDFCard {...material} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ElectPDFfiles;