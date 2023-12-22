import Search from "../Search.tsx";
import SocialIcons from '../../Shared/SocialIcons.astro'
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
        spaceBetween={30}
        effect={'fade'}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper w-full h-screen p-12"
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
      >
        {heroData.map(({description, image, link, colorDescription}) => (
          <SwiperSlide 
            key={image} 
            className="bg-center bg-cover w-full relative overflow-hidden animate-slide-up"
          >
            <a href={link}>
              <img 
                className="w-full h-screen object-cover" 
                src={`/images/inicio/carousel/${image}`} 
                alt={description}
                title={description}
              />

                <div className="lg:opacity-70 lg:hover:opacity-100 transition">
                  <img 
                    className="w-[90vw] h-44 left-3 absolute  transform z-40 bottom-16  
                    md:left-16 md:w-[50vw] lg:w-[40vw] md:h-auto md:top-1/2 md:-translate-y-1/2" 
                    src="/images/general/bannerHero.png"
                    alt="Banner"
                    title="Banner"
                  />
                  <span className={`${colorDescription} absolute z-50 font-semibold transform w-fit
                  left-10 max-w-[80vw] text-lg font-MontserratAlternates uppercase max-[600px]:bottom-24
                  lg:text-2xl md:max-w-[45vw] lg:max-w-[35vw] md:left-28 md:top-1/2 md:-translate-y-1/2`}>
                    {description}
                  </span>
                </div>
              </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}


{/* <article class="containerSpace bg-black mt-20 lg:my-12 p-2 relative">
  <SocialIcons />

  <video 
    class="w-full h-[60vh] mx-auto opacity-50 lg:h-[80vh] object-cover"
    autoplay
    muted
    loop
    src="/videos/videoHero.mp4"  
    title="Atracciones Valle de Santiago, GTO" 
  >
  </video>

  <aside class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs md:max-w-md">
    <h2 class="text-white font-semibold text-xl sm:text-4xl md:text-5xl font-MontserratAlternates text-center">EL PAÍS DE LAS 7 LUMINARIAS</h2>
    <div class="hidden lg:block mt-4">
      <Search />
    </div>
  </aside>

  <div
    id="yearsPage"
    class="absolute -top-[4.2rem] lg:top-0 right-0 lg:-right-[6.5rem] rounded-full 
    bg-primary p-[1.45rem] lg:p-10 flex flex-col justify-center items-center text-white font-semibold 
    font-MontserratAlternates cursor-pointer animate-wiggle 
    animate-infinite animate-duration-[3000ms]">
    <div class="flex flex-col justify-center items-center relative">
      <span class="lg:text-2xl text-sm absolute bottom-0">28</span>
      <span class="lg:text-xl text-xs absolute top-0">años</span>
    </div>
  </div>  
</article>

<script>
  const yearsPage = document.querySelector("#yearsPage");
  import JSConfetti  from 'js-confetti'

  if (yearsPage !== null) {
    yearsPage.addEventListener("click", () => {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      });
    });
  } 
</script>  */}
