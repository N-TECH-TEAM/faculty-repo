import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper';
import uofa1 from './GalleryImages/uofa1.jpg';

const GallerySwiper = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Swiper Hero Section */}
      <div className="my-8 relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="swiper-gallery"
        >
          <SwiperSlide>
            <div className="relative">
              <img src={uofa1} alt="gate" className="w-full h-60 md:h-auto" />
              <div className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50">
                <h2 className="text-xl font-bold">CIVIL ENGINEERING WORKSHOP</h2>
                <p className="text-sm hidden sm:block">Laboratory </p>
                <h2 className="text-xl font-bold hidden sm:block">University Of Abuja</h2>
                <p className="text-xs md:text-sm hidden sm:block">Civil engineers shape the world we live in, building the foundations of progress, innovation, and sustainability one structure at a time.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img src={uofa1} alt="gate" className="w-full h-60 md:h-auto" />
              <div className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50">
                <h2 className="text-xl font-bold">CHEMICAL ENGINEERING WORKSHOP</h2>
                <p className="text-sm hidden sm:block">Laboratory </p>
                <h2 className="text-xl font-bold hidden sm:block">University Of Abuja</h2>
          <p className="text-sm hidden sm:block">Chemical engineers: Transforming molecules into solutions, one innovation at a time..</p>
              </div>
            </div>
          </SwiperSlide>
           
          <SwiperSlide>
            <div className="relative">
              <img src={uofa1} alt="gate" className="w-full h-60 md:h-auto" />
              <div className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50">
                <h2 className="text-xl font-bold">ELECTRICAL ENGINEERING WORKSHOP</h2>
                <p className="text-sm hidden sm:block">Laboratory </p>
                <h2 className="text-xl font-boldhidden sm:block hidden sm:block">University Of Abuja</h2>
          <p className="text-sm hidden sm:block">Electrical engineers: powering the world with innovation.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img src={uofa1} alt="gate" className="w-full h-60 md:h-auto" />
              <div className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50">
                <h2 className="text-xl font-bold">MECHANICAL ENGINEERING WORKSHOP</h2>
                <p className="text-sm hidden sm:block">Laboratory </p>
                <h2 className="text-xl font-bold hidden sm:block">University Of Abuja</h2>
          <p className="text-sm hidden sm:block ">Mechanical engineering: Where innovation meets precision, and creativity fuels progress..</p>
              </div>
            </div>
          </SwiperSlide>

      
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySwiper;
