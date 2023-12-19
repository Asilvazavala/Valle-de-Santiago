import { useState } from 'react';
import { GalleryImages } from './Gallery-data';
import Modal from './Modal';

import { Navigation, Scrollbar, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Title from '../../Shared/Title';

export default function Gallery () {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
    setModalOpen(true);
  };

  return (
    <>
      <section className='my-12 flex flex-col items-center justify-center containerSpace scrollAnimation'>
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
          modules={[Navigation, Scrollbar, Thumbs, FreeMode]}
          className='h-[240px] md:h-[320px] w-full'
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
            2000: {
              slidesPerView: 5.5,
            },
          }}
        >
          {GalleryImages.map(({id, image, description}, index) => (
            <SwiperSlide key={id}>
              <img 
                src={`/images/inicio/gallery/${image}`}
                alt={description}
                title={description}
                className='w-72 h-52 md:h-72 rounded-xl cursor-pointer'
                onClick={() => openModal(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {modalOpen && selectedImage !== null && (
        <Modal 
          onClose={closeModal} 
          selectedImage={selectedImage}
        />
      )}
    </>
  )
}
