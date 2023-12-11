import React, { useState } from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { sliderDataImages } from './Slider-data';
import { GrGallery } from "react-icons/gr";
import Modal from './Modal';

export default function Slider() {
  const [modalOpen, setModalOpen] = useState(false);
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
      <h2 
        className='font-Kalnia mb-12 font-semibold text-3xl py-4 px-12 md:px-28 text-primary flex
        items-center gap-x-4 rounded shadow-3xl'>
        <span><GrGallery /></span>
        GALERÍA
      </h2>

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
              src={`public/images/sections/${image}`}
              alt='Valle-de-santiago'
              title='Valle-de-santiago'
              className='w-auto h-72 rounded-xl cursor-pointer'
              onClick={() => openModal(`public/images/sections/${image}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalOpen && selectedImage && (
        <Modal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </section>
  )
}
