// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image1 from '../assets/project-image01.png'
import Image2 from '../assets/project-image02.png'
import Image3 from '../assets/project-image03.png'
import Image4 from '../assets/project-image04.png'
import Image5 from '../assets/project-image05.png'

export default () => {
  return (
    <div className="max-w-7xl mx-auto">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      // spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image1} alt="projects" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image2} alt="projects" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image3} alt="projects" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image4} alt="projects" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image5} alt="projects" />
          </div>
        </SwiperSlide>
    </Swiper>
    </div>
  );
};