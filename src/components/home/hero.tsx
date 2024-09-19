import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  return (
    <section className="hero-section" style={{ position: 'relative' }}>
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="flex h-[90vh] items-start justify-center"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide
          style={{
            backgroundImage: `url("img/banner-1.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url("img/banner-2.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("img/banner-3.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
