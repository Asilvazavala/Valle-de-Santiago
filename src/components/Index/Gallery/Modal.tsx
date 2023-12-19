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
          modules={[EffectCube, Pagination, Thumbs, FreeMode]}
          className="mySwiper w-full h-full"
          initialSlide={selectedImage ?? 0}
        >
          {GalleryImages.map(({ image, description, id }) => (
            <SwiperSlide key={id} className='bg-center bg-cover'>
              <img 
                className='w-full h-[50vh] lg:h-[80vh]' 
                src={`/images/inicio/gallery/${image}`} 
                title={description}
                alt={description}
              />

              <button
                className="absolute top-4 right-4 text-white z-20"
                onClick={onClose}
              >
                <span className='px-[7.7px] rounded-full bg-red-500 lg:hover:bg-red-700 transition-colors text-2xl'>
                  &times;
                </span>
              </button>

              <a
                href={`/images/inicio/gallery/${image}`} 
                download={description || 'imagen'}
                className="absolute top-16 right-4 text-white z-20"
              >
                <span className='px-[5px] py-[2.3px] rounded-full bg-cyan-500 lg:hover:bg-cyan-700 transition-colors text-xl'>
                  <i className='bx bxs-download'></i>
                </span>
              </a>

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
