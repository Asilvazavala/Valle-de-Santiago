import { useState } from 'react';

import { Navigation, Scrollbar, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { alcaldesMunicipales } from './galeria-de-alcaldes-municipales-data.astro';

const GaleriaAlcaldesMunicipales = () => {
  const [selectedMayor, setSelectedMayor] = useState<string>('1 J. Félix Galván Coria (1911-1912).png');
  const [selectedMayorName, setSelectedMayorName] = useState<string>('1 J. Félix Galván Coria (1911-1912)');

  const handleChangeMayor = (image: string, name: string) => {
    setSelectedMayor(image);
    setSelectedMayorName(name);
  }

  return (
    <div className='flex justify-center items-center flex-col gap-y-8'>
      <header className='flex justify-center items-center flex-col'>
        <img 
          loading="lazy" 
          decoding="async"
          src={`/images/historia/alcaldes-municipales/${selectedMayor}`}
          alt={selectedMayor}
          title={selectedMayor}
          className='w-40 h-40 md:w-48 md:h-48 rounded-xl cursor-pointer object-cover'
        />
        <span className='font-medium'>{selectedMayorName}</span>
      </header>

      <Swiper
        spaceBetween={15}
        freeMode={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Scrollbar, Thumbs, FreeMode]}
        className='h-[140px] md:h-[170px] w-full'
        grabCursor
        breakpoints={{
          300: {
            slidesPerView: 4.5,
          },
          700: {
            slidesPerView: 6.5,
          },
          1024: {
            slidesPerView: 8.5,
          },
          2000: {
            slidesPerView: 10.5,
          },
        }}
      >
        {alcaldesMunicipales.map(({title, image }, index) => (
          <SwiperSlide key={index}>
            <img 
              loading="lazy" 
              decoding="async"
              src={`/images/historia/alcaldes-municipales/${image}`}
              alt={title}
              title={title}
              className={`w-28 h-28 md:w-36 md:h-36 cursor-pointer object-cover 
              ${selectedMayorName === title && 'border-4 lg:border-8 border-primary'}`}
              onClick={() => handleChangeMayor(image, title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default GaleriaAlcaldesMunicipales;