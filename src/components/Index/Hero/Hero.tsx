import { heroData } from './Hero-data.astro';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

export default function Hero () {
  return (
    <article className="h-screen">
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper w-full h-screen p-12"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
      >
        {heroData.map(({description, image, link}) => (
          <SwiperSlide 
            key={image} 
            className="bg-center bg-cover w-full relative overflow-hidden"
          >
            <a href={link}>
              <img 
                className="w-full h-[90vh] object-cover absolute top-0 left-0 animate-scalePlus" 
                src={`/images/inicio/carousel/${image}`} 
                alt={description}
                title={description}
              />

                <div className="absolute transform z-40 font-MontserratAlternates bottom-36 w-[80vw] left-8 
                 md:left-16 md:w-[50vw] lg:w-[40vw] md:top-1/2 md:-translate-y-1/2">
                  <article className="relative p-4 bg-gradient-to-br from-primary to-secondary
                  text-white text-xl md:text-3xl rounded-xl flex justify-center items-center gap-x-2
                  opacity-90 lg:opacity-80 lg:hover:opacity-100 transition">
                    {description}
                    <aside className="absolute inset-0 border-4 border-primary rounded-xl"></aside>
                  </article>
                </div>
              </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}
