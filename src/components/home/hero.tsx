import { useGetBanners } from '@/lib/react-query/queries';
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

  const { data: bannersListResponse, isFetching: isBannersFetching } =
    useGetBanners();

  const bannerList = bannersListResponse?.data || [];

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
        {!isBannersFetching &&
          bannerList.map((banner) => {
            let largeImage = '';
            let mobileImage = '';

            if (banner.images.length > 0) {
              largeImage = banner.images[0];

              if (banner.images.length > 1) {
                mobileImage = banner.images[1];
              }
            }

            return (
              <SwiperSlide
                className="flex items-center justify-center overflow-hidden"
                key={banner._id}
              >
                <img
                  src={isMobile ? mobileImage : largeImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Hero;
