import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const SpotLightSection = () => {
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

  let slidesPerView = 4;

  if (windowWidth >= 1400) {
    slidesPerView = 4;
  } else if (windowWidth >= 1068) {
    slidesPerView = 3;
  } else if (windowWidth >= 768) {
    slidesPerView = 2;
  } else {
    slidesPerView = 1;
  }

  const sliderPagination = {
    clickable: true,
  };

  return (
    <section className="mx-28 mt-20">
      <div className="">
        <div className="spotlight">
          <div className="text-center">
            <div className="section-title">
              <h2>Spotlight</h2>
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={sliderPagination}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
          >
            <SwiperSlide className="product-item">
              <div className="pi-pic">
                <img src="/img/products/product-1.png" alt="Product 1" />
                <div className="pi-title">
                  Lowarance <br />
                  for your sea
                </div>
                <ul>
                  <li className="quick-view btn">
                    <a href="#">Shop Now</a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="product-item">
              <div className="pi-pic">
                <img src="/img/products/product-1.png" alt="Product 2" />
                <div className="pi-title">
                  Lowarance <br />
                  for your sea
                </div>

                <ul>
                  <li className="quick-view btn">
                    <a href="#">Shop Now</a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="product-item">
              <div className="pi-pic">
                <img src="/img/products/product-1.png" alt="Product 3" />
                <div className="pi-title">
                  Lowarance <br />
                  for your sea
                </div>
                <ul>
                  <li className="quick-view btn">
                    <a href="#">Shop Now</a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="product-item">
              <div className="pi-pic">
                <img src="/img/products/product-1.png" alt="Product 4" />
                <div className="pi-title">
                  Lowarance <br />
                  for your sea
                </div>
                <ul>
                  <li className="quick-view btn">
                    <a href="#">Shop Now</a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SpotLightSection;
