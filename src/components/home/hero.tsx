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
            src="img/banner-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center overflow-hidden">
          <img
            src="img/banner-2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center overflow-hidden">
          <img
            src="img/banner-3.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
