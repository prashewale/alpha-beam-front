import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const LogoCarousel: React.FC = () => {
  const logos = [
    {
      brandName: 'plastimo',
      imageUrl: 'img/partner_logos/partner-1.png',
      className: 'max-h-8',
    },
    {
      brandName: 'sionix',
      imageUrl: 'img/partner_logos/partner-2.png',
      className: 'max-h-12',
    },
    {
      brandName: 'fusion',
      imageUrl: 'img/partner_logos/partner-3.png',
      className: 'max-h-8',
    },
    {
      brandName: 'germin',
      imageUrl: 'img/partner_logos/partner-4.png',
      className: 'max-h-12',
    },
    {
      brandName: 'mgnetron',
      imageUrl: 'img/partner_logos/partner-5.png',
      className: 'max-h-16',
    },
    {
      brandName: 'onwa',
      imageUrl: 'img/partner_logos/partner-6.png',
      className: 'max-h-10',
    },

    {
      brandName: 'sionix',
      imageUrl: 'img/partner_logos/partner-2.png',
      className: 'max-h-12',
    },
    {
      brandName: 'inmarsat',
      imageUrl: 'img/partner_logos/partner-7.png',
      className: 'max-h-12',
    },
    {
      brandName: 'intellian',
      imageUrl: 'img/partner_logos/partner-8.png',
      className: 'max-h-6',
    },
    {
      brandName: 'lowrance',
      imageUrl: 'img/partner_logos/partner-9.png',
      className: 'max-h-8 w-24',
    },
    {
      brandName: 'shakesphere-global',
      imageUrl: 'img/partner_logos/partner-10.png',
      className: 'max-h-20',
    },
    {
      brandName: 'sailor',
      imageUrl: 'img/partner_logos/partner-11.png',
      className: 'max-h-8',
    },
  ];

  const splittedLogos = [
    logos.filter((_, index) => index % 2 === 0),
    logos.filter((_, index) => index % 2 === 1),
  ];

  const navigate = useNavigate();

  return (
    <div className="mx-32 mt-10 flex flex-col justify-center gap-16">
      <div className="flex justify-center">
        <span className="text-[36px] font-bold text-gray-800">
          Choose by brands
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {splittedLogos.map((logos, spIndex) => (
          <Swiper
            key={spIndex}
            spaceBetween={8}
            slidesPerView={5}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
            className="w-full"
          >
            {logos
              .filter((_, index) => index <= 5)
              .map((item, index) => {
                return (
                  <SwiperSlide
                    className="flex h-36 cursor-pointer items-center justify-center bg-[#f5f6f6]"
                    key={index}
                    onClick={() =>
                      navigate(`/products?brand=${item.brandName}`)
                    }
                  >
                    <img src={item.imageUrl} className={item.className} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
