import { GalleryImages } from './Gallery-data';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination, Thumbs, FreeMode } from 'swiper/modules';

interface ModalProps {
  onClose: () => void;
  selectedImage: number | null;
}

const Modal: React.FC<ModalProps> = ({ 
  onClose,
  selectedImage
}) => {
  return (
    <article className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
      <aside className="relative max-w-screen-md w-full overflow-hidden">
        <Swiper
          loop={true}
          effect={'cube'}
          freeMode={true}
          watchSlidesProgress={true}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination, Thumbs, FreeMode]}
          className="mySwiper w-full h-full"
          initialSlide={selectedImage ?? 0}
        >
          {GalleryImages.map(({ image, description, id }) => (
            <SwiperSlide key={id} className='bg-center bg-cover'>
              <img 
                className='w-full h-[50vh] lg:h-[80vh]' 
                src={`images/gallery/${image}`} 
                title={description}
                alt={description}
              />

              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={onClose}
              >
                <span className='px-2 rounded-full bg-red-700 lg:hover:bg-red-500 transition-colors text-2xl'>
                  &times;
                </span>
              </button>

              <span className="text-lg absolute bottom-0 backdrop-blur-xl text-black">
                {description}
              </span>
            </SwiperSlide>        
          ))}
        </Swiper>
      </aside>
    </article>
  );
};

export default Modal;
