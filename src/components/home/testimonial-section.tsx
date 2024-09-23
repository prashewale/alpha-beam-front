import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Mark Huff',
      position: 'Businesswoman',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Rodel Golez',
      position: 'Businesswoman',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Ken Bosh',
      position: 'Businesswoman',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Racky Henderson',
      position: 'Father',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Rodel Golez',
      position: 'Businesswoman',
      //imgUrl: 'https://randomuser.me/api/portraits/men/88.jpg',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Ken Bosh',
      position: 'Businesswoman',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Racky Henderson',
      position: 'Father',
    },
  ];
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

  let slidesPerView = 3;

  if (windowWidth >= 1400) {
    slidesPerView = 3;
  } else if (windowWidth >= 1068) {
    slidesPerView = 2;
  } else if (windowWidth >= 768) {
    slidesPerView = 1;
  } else {
    slidesPerView = 1;
  }

  const sliderPagination = {
    clickable: true,
  };
  return (
    <section className="testimonal">
      <div className="testimonials-wrap">
        <div className="container">
          <div className="heading-section">
            <h2>What clients say about us?</h2>
          </div>
          <div className="relative z-10 mb-[-80px]">
            <img src="img/icon/inverted-comma.png" className="h-32 w-auto" />
          </div>
          <Swiper
            modules={[Autoplay]}
            // pagination={sliderPagination}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            className="w-full"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                className="item"
                key={index}
                style={{ width: '350px', paddingTop: '20px' }}
              >
                <div className="testimonial-box d-flex">
                  <div className="text pl-4">
                    <p className="!text-sm">{testimonial.quote}</p>
                    <p className="!text-base !text-[#868686]">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative z-10 mt-[-70px] flex justify-end">
            {/* <i className="fa fa-quote-left"></i> */}
            <img
              src="img/icon/inverted-comma.png"
              className="h-32 w-auto rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
