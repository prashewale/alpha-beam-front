import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { useNavigate } from 'react-router-dom';

type ProductBannerProps = {
  title: string;
  products: Product[];
};

const ProductBestBanner = ({ title, products }: ProductBannerProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
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
    <section className="mx-28 mt-20 flex flex-col gap-8">
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={sliderPagination}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        className="w-full"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
      >
        {products.map((product, index) => (
          <SwiperSlide className="product-item" key={index}>
            <div
              className="flex items-center justify-center"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="pi-pic !max-w-60">
                <div className="flex h-auto items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-auto w-auto"
                  />
                </div>

                <div className="sale">Sale</div>
                <div className="icon">
                  <i className="icon_heart_alt"></i>
                </div>
                {/* <ul>
                      <li className="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                    </ul> */}
              </div>
            </div>
            <div className="pi-text">
              <a href={`/products/${product.id}`}>
                <h5>{product.name}</h5>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductBestBanner;
