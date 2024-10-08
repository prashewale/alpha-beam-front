import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

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

  const generateSlideItem = (product: Product, index: number) => {
    return (
      <>
        <div
          className="flex items-center justify-center"
          onClick={() => window.location.replace(`/products/${product._id}`)}
        >
          <div className="pi-pic !max-w-60">
            <div className="flex h-auto w-32 items-center justify-center">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-auto w-auto"
              />
            </div>

            {/* <div className="sale">Sale</div> */}
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
        <div className="">
          <a href={`/products/${product._id}`}>
            <p className="text-md text-center font-bold">{product.name}</p>
          </a>
        </div>
      </>
    );
  };
  return (
    <section className="mx-10 mt-20 flex flex-col gap-8 md:mx-28">
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      {products.length > 3 ? (
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={sliderPagination}
          slidesPerView={slidesPerView}
          centeredSlides={products.length < 4}
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
              {generateSlideItem(product, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          className={cn(
            'flex w-full items-center justify-center',
            windowWidth < 768 && 'flex-col'
          )}
        >
          {products.map((product, index) => (
            <div className="product-item w-[300px] cursor-pointer" key={index}>
              {generateSlideItem(product, index)}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductBestBanner;
