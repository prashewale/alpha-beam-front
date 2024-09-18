import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

type ProductBannerProps = {
  title: string;
  products: { imgSrc: string; title: string }[];
};

const ProductBestBanner = ({ title, products }: ProductBannerProps) => {
  return (
    <section className="product-best-banner spad bg-grey">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false} // Display dots for indicators
              infiniteLoop={true} // Equivalent to `loop: true`
              autoPlay={true} // Equivalent to `autoplay: true`
              interval={2000} // Controls the speed of autoplay transition
              stopOnHover={true} // Stops autoplay on hover
              transitionTime={1000} // Equivalent to `smartSpeed: 1200` (in half, since Owl Carousel uses double the value in ms)
              swipeable={true} // Enables swiping
              emulateTouch={true} // Enables touch swipe
              dynamicHeight={false}
              centerMode={true} // Centers the active slide
              centerSlidePercentage={40} // Controls how much of the slide is shown
              showThumbs={false} // Hides the thumbnail images
            >
              {products.map((product, index) => (
                <div
                  className="product-item"
                  key={index}
                  style={{ width: '436px' }}
                >
                  <div className="pi-pic">
                    <img src={product.imgSrc} alt={product.title} />
                    <div className="sale">Sale</div>
                    <div className="icon">
                      <i className="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li className="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                    </ul>
                  </div>
                  <div className="pi-text">
                    <a href="#">
                      <h5>{product.title}</h5>
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBestBanner;
