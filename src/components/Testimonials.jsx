import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import pdfThumnail from './pdf/PDFimageFiles/react.svg'


function Testimonials() {
    const testimonials = [
        {
            id: 1,
            comments: 'However, I can tell you that testimonials are typically subjective, opinions from individuals who have had experiences with a particular product or service A place to store notes and other office materials. Primarily used by older people. Generally shown as a brown case with a handle on top, and a silver or gold colored clasp on the front. Facebook shows two leather straps on the front..',
            name: 'jaafar',
            profession: 'React Developer',
            socialMedia: {
                facebook: 'https://www.facebook.com/zakson',
                twitter: 'https://www.twitter.com/zakson',
                linkedin: 'https://www.linkedin.com/in/zakson',
            },
            image: 'zakson.jpg',
        },
        {
            id: 1,
            comments: 'However, I can tell you that testimonials are typically subjective, opinions from individuals who have had experiences with a particular product or service A place to store notes and other office materials. Primarily used by older people. Generally shown as a brown case with a handle on top, and a silver or gold colored clasp on the front. Facebook shows two leather straps on the front..',
            name: 'Zakson',
            profession: 'Engineer',
            socialMedia: {
                facebook: 'https://www.facebook.com/zakson',
                twitter: 'https://www.twitter.com/zakson',
                linkedin: 'https://www.linkedin.com/in/zakson',
            },
            image: 'zakson.jpg',
        },
        {
            id: 1,
            comments: 'However, I can tell you that testimonials are typically subjective, opinions from individuals who have had experiences with a particular product or service A place to store notes and other office materials. Primarily used by older people. Generally shown as a brown case with a handle on top, and a silver or gold colored clasp on the front. Facebook shows two leather straps on the front..',
            name: 'henrietta',
            profession: 'Content Writer',
            socialMedia: {
                facebook: 'https://www.facebook.com/zakson',
                twitter: 'https://www.twitter.com/zakson',
                linkedin: 'https://www.linkedin.com/in/zakson',
            },
            image: 'zakson.jpg',
        },
        // Add more testimonials here...
    ];

    return (
        <div className='bg-green-700 justify-center items-center text-center'>
            <h2 className='text-white text-xl py-5'>Testimonials
                <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10' />
            </h2>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
            >
                {testimonials.map(({ id, comments, name, profession, socialMedia, image }) => (
                    <SwiperSlide key={id} className='p-20'>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-center items-center">
                                <img src={pdfThumnail} alt={name} className="w-20 h-20 rounded-full object-cover" />
                            </div>
                            <h2 className="text-gray-800 font-bold text-lg mt-4">{name}</h2>
                            <p className="text-gray-600">{profession}</p>
                            <p className='text-gray-800 text-sm mt-4'>{comments}</p>
                            <div className="flex justify-center mt-4">
                                <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="mr-4"><FaFacebook size={24} /></a>
                                <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="mr-4"><FaTwitter size={24} /></a>
                                <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Testimonials;
