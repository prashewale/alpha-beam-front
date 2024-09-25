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
    <section className="bg-[#FAFAFA]">
      <div className="mx-28 mt-10 pt-10">
        <div className="spotlight">
          <div className="text-center">
            <div className="section-title">
              <h2>Highlight Deals</h2>
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
                  <li className="">
                    <button className="mx-auto flex w-28 max-w-screen-sm items-center justify-center rounded-xl font-normal text-white">
                      <div className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-50% to-[#4cb8c4] to-90% p-[0.75px] pb-[1px]">
                        <div className="h-full w-full rounded-xl bg-[#494949] p-2 text-[12px]">
                          SHOP NOW
                        </div>
                      </div>
                    </button>
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
                  <li className="">
                    <button className="mx-auto flex w-28 max-w-screen-sm items-center justify-center rounded-xl font-normal text-white">
                      <div className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-50% to-[#4cb8c4] to-90% p-[0.75px] pb-[1px]">
                        <div className="h-full w-full rounded-xl bg-[#494949] p-2 text-[12px]">
                          SHOP NOW
                        </div>
                      </div>
                    </button>
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
                  <li className="">
                    <button className="mx-auto flex w-28 max-w-screen-sm items-center justify-center rounded-xl font-normal text-white">
                      <div className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-50% to-[#4cb8c4] to-90% p-[0.75px] pb-[1px]">
                        <div className="h-full w-full rounded-xl bg-[#494949] p-2 text-[12px]">
                          SHOP NOW
                        </div>
                      </div>
                    </button>
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
                  <li className="">
                    <button className="mx-auto flex w-28 max-w-screen-sm items-center justify-center rounded-xl font-normal text-white">
                      <div className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-50% to-[#4cb8c4] to-90% p-[0.75px] pb-[1px] pr-[1px]">
                        <div className="h-full w-full rounded-xl bg-[#494949] p-2 text-[12px]">
                          SHOP NOW
                        </div>
                      </div>
                    </button>
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
