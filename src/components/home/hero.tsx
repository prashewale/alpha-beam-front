import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  const sliderPagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + ' !bg-white' + '">' + '</span>';
    },
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let isMobile = false;

  if (windowWidth < 768) {
    isMobile = true;
  }

  return (
    <section className="hero-section" style={{ position: 'relative' }}>
      <Swiper
        pagination={sliderPagination}
        modules={[Autoplay, Pagination]}
        className="flex h-[60vh] items-start justify-center"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide className="flex items-center justify-center overflow-hidden">
          <img
            src={isMobile ? 'img/mobile-banner-1.jpg' : 'img/banner-1-1.jpg'}
            alt=""
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center overflow-hidden">
          <img
            src={isMobile ? 'img/mobile-banner-3.jpg' : 'img/banner-3-1.jpg'}
            alt=""
            className="h-full w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center overflow-hidden">
          <img
            src={isMobile ? 'img/mobile-banner-2.jpg' : 'img/banner-2-1.jpg'}
            alt=""
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
