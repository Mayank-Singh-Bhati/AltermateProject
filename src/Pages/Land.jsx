import React, { useState, useEffect } from 'react';
import LandNavbar from '../Components/NavbarOne';
import LandHero from '../Components/LandHero';
import LandExplore from '../Components/LandExplore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import LandAppDescription from '../Components/LandAppDescription';

const Landing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  if (isMobile) {
    return (
      <div className='h-full w-full max-w-[1600px] mx-auto px-4 md:px-[25px] lg:px-[40px] 3xl:px-[60px]'>
        <div className='h-[70px]'>
          <LandNavbar />
        </div>
        <div className='h-auto'>
          <LandHero />
          <LandExplore />
          <LandAppDescription />
        </div>
      </div>
    );
  } else {
    return (
      <div className='h-full w-full max-w-[1600px] mx-auto px-4 md:px-[25px] lg:px-[40px] 3xl:px-[60px]'>
        <div className='h-[70px]'>
          <LandNavbar />
        </div>
        <div className='h-[calc(100vh_-_70px)]'>
          <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            
          >
            <SwiperSlide><LandHero /></SwiperSlide>
            <SwiperSlide><LandExplore /></SwiperSlide>
            <SwiperSlide><LandAppDescription /></SwiperSlide>
            <style>
      {`
      .mySwiper {
        position: relative;
        height: 100%;
        width: 100%;
      }
      .mySwiper .swiper-pagination {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
      }
      .mySwiper .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        background-color: #AAA;
      }
      .mySwiper .swiper-pagination-bullet-active {
        width: 10px;
        height: 10px;
        background-color: #F08A4B;
      }
    `}</style>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Landing;
