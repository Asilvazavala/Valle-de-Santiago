import { useState } from 'react';
import { sliderDataImages } from './Slider-data';
import Modal from './Modal';

import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Title from '../../Shared/Title';

export default function Slider() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <section className='my-12 flex flex-col items-center justify-center'>
      <Title 
        title='GALERÍA' 
        image= {<i className='bx bx-images'></i>} 
      />

      <Swiper
        spaceBetween={15}
        freeMode={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Scrollbar]}
        className='h-[240px] md:h-[320px] w-[300px] md:w-[1000px]'
        grabCursor
        breakpoints={{
          300: {
            slidesPerView: 2.5,
          },
          700: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
      >
        {sliderDataImages.map(({id, image}) => (
          <SwiperSlide key={id}>
            <img 
              src={`images/sections/${image}`}
              alt='Valle-de-santiago'
              title='Valle-de-santiago'
              className='w-auto h-72 rounded-xl cursor-pointer'
              onClick={() => openModal(`public/images/sections/${image}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalOpen && selectedImage && (
        <Modal 
          imageUrl={selectedImage} 
          onClose={closeModal} 
        />
      )}
    </section>
  )
}
