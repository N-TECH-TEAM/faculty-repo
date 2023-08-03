import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';


function Testimonials() {

    const testimonials = [

        {
            id: 1,
            Comments: 'However, I can tell you that testimonials are typically subjective, opinions from individuals who have had experiences with a particular product or service A place to store notes and other office materials. Primarily used by older people. Generally shown as a brown case with a handle on top, and a silver or gold colored clasp on the front. Facebook shows two leather straps on the front..',
            names: 'zakson'
        },

        {
            id: 2,
            Comments: 'However, I can tell you that testimonials are typically subjective, opinions from individuals who have had experiences with a particular product or service A place to store notes and other office materials. Primarily used by older people. Generally shown as a brown case with a handle on top, and a silver or gold colored clasp on the front. Facebook shows two leather straps on the front..',
            names: 'jaaphar'
        },


        {
            id: 3,
            Comments: 'However, I can tell you that testimonials are typically subjective, opinions from individuals who have had experiences with a particular product or service A place to store notes and other office materials. Primarily used by older people. Generally shown as a brown case with a handle on top, and a silver or gold colored clasp on the front. Facebook shows two leather straps on the front..',
            names: 'herrienta'
        },


        {
            id: 4,
            Comments: 'However, I can tell you that testimonials are typically subjective, opinions from individuals who have had experiences with a particular product or service A place to store notes and other office materials. Primarily used by older people. Generally shown as a brown case with a handle on top, and a silver or gold colored clasp on the front. Facebook shows two leather straps on the front..',
            names: 'vincent'
        },




    ]


    return (
        <div className='bg-green-700 justify-center items-center text-center'>
            <h2 className='text-white text-xl py-5'>Testimonials
            <hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10 '></hr>
            </h2>


            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // autoplay={{ delay: 3000 }}
                style={{color: "orange"}}
                >


    

                {testimonials.map(({ id, Comments, names }) => {
                    return (
                        <SwiperSlide className='p-20 '>
                        <div key={id}>
                            <p className='text-white text-center text-sm'>{Comments}</p>

                            <h2 className='text-white p-5 font-bold'>{names}</h2>
                        </div>
                        </SwiperSlide>

                    )
                })}

            </Swiper>


        </div>
    )
}

export default Testimonials