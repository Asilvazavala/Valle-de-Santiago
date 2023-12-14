import { carouselData } from './Carousel-data.astro';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState, useEffect  } from 'react';
import { useSwipeable } from 'react-swipeable';
import Title from '../../Shared/Title';

const Carousel = () => {
  const [curr, setCurr] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    swipeDuration: 250,
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  const prev = () => setCurr((curr) => (curr === 0 ? carouselData.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === carouselData.length - 1 ? 0 : curr + 1));
  const goToSlide = (i: number) => setCurr(i);

  const autoSlide = false;
  const autoSlideInterval = 5000;

  useEffect(() => {
    if (!autoSlide) return

    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide])

  return (
    <main className='containerSpace mx-auto flex items-center flex-col  
    justify-center overflow-hidden relative group mb-6 lg:mb-10'>
      <Title 
        title='NOTICIAS' 
        image= {<i className='bx bx-news'></i>} 
      />
      <article className='rounded-lg overflow-hidden bg-black/30 pb-28 md:pb-20 flex flex-col
      transition-transform ease-out duration-1000'>
        <div className='flex'>
          {carouselData.map((slide, slideIndex) => (
            <a className='min-w-full' key={slideIndex} href={slide.link}>
              <figure 
                {...handlers}
                className='flex transition-transform ease-out duration-1000' 
                style={{ transform: `translateX(-${curr * 100}%)`}}>
                <img
                  src={slide.image}
                  alt={slide.description}  
                  title={slide.description}  
                  className='object-cover min-w-full max-h-[250px] md:max-h-[400px] lg:max-w-[500px]'
                />  
              </figure>
              <span className='text-black/60 font-semibold absolute bottom-3 text-center left-1/2 transform 
              -translate-x-1/2 min-w-[250px] md:min-w-[400px]'>
                {slideIndex === curr && slide.description}
              </span>
            </a>
            ))
          }
        </div>

        <button 
          onClick={prev} 
          className='absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2
           bg-black/40 text-white cursor-pointer hover:bg-black/70 transition-colors'>
          <IoIosArrowBack  />
        </button>

        <button 
          onClick={next}
          className='absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 
          bg-black/40 text-white cursor-pointer hover:bg-black/70 transition-colors'>
          <IoIosArrowForward />
        </button>

        <footer className='mt-2'>
          <div className='flex items-center justify-center gap-2'>
            {carouselData.map((data, i) => (
              <img 
                key={i}
                src={data.image}
                alt={data.description}
                title={data.description} 
                onClick={() => goToSlide(i)}
                className={`transition-all w-20 h-20 rounded cursor-pointer
                ${curr === i ? '' : 'opacity-50'}`}
              />
            ))}
          </div>
        </footer>
      </article>
    </main>
  )
};

export default Carousel;