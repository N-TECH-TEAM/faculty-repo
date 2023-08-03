import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { Pagination, Autoplay } from 'swiper';
import uofa1 from '../Assest/uofa1.jpg'
import new1 from '../Assest/new1.jpg'
import new2 from '../Assest/new2.jpg'
import new3 from '../Assest/new3.jpg'
import new4 from '../Assest/new4.jpg'
import engineering2 from '../Assest/engineering2.jpg'
import uofa from '../Assest/uofa.png'
import '../css/swiper.css'




const Slide = () => {


  return (
    <div>
      <Swiper 
        modules={[ Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        style={{ color: 'orange' }} className='swipe'>
        <div className='flex justify-center items-center '>
          {/* {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))
          } */}
          <SwiperSlide><img src={uofa1} alt='gate' className='w-screen  h-60 md:h-auto' /> </SwiperSlide>
          <SwiperSlide><img src={new1} alt='engineering1' className='w-screen  h-auto md:h-auto' /> </SwiperSlide>
          <SwiperSlide><img src={new2} alt='engineering2' className='w-screen h-auto md:h-auto' /> </SwiperSlide>
          <SwiperSlide><img src={new3} alt='engineering2' className='w-screen h-auto md:h-auto' /> </SwiperSlide>
          <SwiperSlide><img src={new4} alt='engineering2' className='w-screen h-auto md:h-auto' /> </SwiperSlide>
          <SwiperSlide><img src={uofa} alt='engineering2' className='w-screen h-auto md:h-auto' /> </SwiperSlide>
          <SwiperSlide><img src={engineering2} alt='engineering2' className='w-screen h-auto md:h-auto' /> </SwiperSlide>


        </div>
      </Swiper>

    </div>
  )
}

export default Slide