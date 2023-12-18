import { carouselData } from './Carousel-data.astro';
import { useState } from 'react';
import Title from '../../Shared/Title';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="containerSpace mt-20 flex flex-col justify-center items-center scrollAnimation">
      <Title 
        title='NOTICIAS' 
        image={<i className="bx bx-news"></i>}
      />

      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 w-full h-[80%]"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
          {carouselData.map((slide, slideIndex) => (
            <SwiperSlide 
              key={slideIndex}
              className="text-center text-lg bg-white flex justify-center items-center 
              bg-cover bg-center rounded-xl relative">
              <a href={slide.link}>
                <img 
                  className="w-full h-[300px] md:h-[400px] rounded-xl" 
                  src={`images/carousel/${slide.image}`} 
                  alt={slide.description}
                  title={slide.description}
                />
                <span className='text-black/70 font-semibold absolute bottom-2 text-center left-1/2 
                transform -translate-x-1/2 min-w-[250px] md:min-w-[400px] backdrop-blur-xl text-sm md:text-lg'>
                  {slide.description}
                </span>
              </a>
            </SwiperSlide>
          ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full h-[100px] mx-auto mt-2"
      >
        {carouselData.map((slide, slideIndex) => (
            <SwiperSlide 
              key={slideIndex}
              className="text-center text-lg bg-white flex justify-center items-center bg-cover 
              bg-center w-[25%] h-full opacity-40 rounded-lg cursor-pointer">
              <img 
                className="w-full h-full rounded-lg" 
                src={`images/carousel/${slide.image}`} 
                alt={slide.description}
                title={slide.description}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
};

export default Carousel;