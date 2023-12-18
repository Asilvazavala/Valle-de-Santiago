import { useState } from 'react';
import { GalleryImages } from './Gallery-data';
import Modal from './Modal';

import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Title from '../../Shared/Title';

export default function Gallery () {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openModal = (imageUrl: string, imageIndex: number, description: string) => {
    setSelectedImage(imageUrl);
    setSelectedImageIndex(imageIndex);
    setSelectedDescription(description);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % GalleryImages.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(`images/gallery/${GalleryImages[nextIndex].image}`);
    setSelectedDescription(`${GalleryImages[nextIndex].description}`);
  };
  
  const prevImage = () => {
    const prevIndex = (selectedImageIndex - 1 + GalleryImages.length) % GalleryImages.length;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(`images/gallery/${GalleryImages[prevIndex].image}`);
    setSelectedDescription(`${GalleryImages[prevIndex].description}`);
  };

  return (
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
        modules={[Navigation, Scrollbar]}
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
        {GalleryImages.map(({id, image, description}) => (
          <SwiperSlide key={id}>
            <img 
              src={`images/gallery/${image}`}
              alt='Valle-de-santiago'
              title='Valle-de-santiago'
              className='w-72 h-52 md:h-72 rounded-xl cursor-pointer'
              onClick={() => openModal(`images/gallery/${image}`, id, description)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalOpen && selectedImage && (
        <Modal 
          imageUrl={selectedImage} 
          onClose={closeModal} 
          nextImage={nextImage}
          prevImage={prevImage}
          description={selectedDescription}
        />
      )}
    </section>
  )
}
