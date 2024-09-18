import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <section className="hero-section" style={{ position: 'relative' }}>
      <Carousel
        showArrows={true} // Equivalent to `nav: true`
        showStatus={false} // Hides the slide number
        showIndicators={false} // Equivalent to `dots: false`
        infiniteLoop={true} // Equivalent to `loop: true`
        autoPlay={true} // Equivalent to `autoplay: true`
        interval={3000} // Controls the speed of autoplay transition
        stopOnHover={false} // Stops autoplay on hover
        transitionTime={1500} // Equivalent to `smartSpeed: 1200` (in half, since Owl Carousel uses double the value in ms)
        swipeable={true} // Enables swiping
        emulateTouch={true} // Enables touch swipe
        dynamicHeight={false} // Equivalent to `autoHeight: false`
        showThumbs={false} // Hides the thumbnail images
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={clickHandler}
              className="control-arrow control-prev"
            >
              {/* <i className="ti-angle-left"></i> */}
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={clickHandler}
              className="control-arrow control-next"
            >
              {/* <i className="ti-angle-right"></i> */}
            </button>
          )
        }
      >
        <div
          style={{
            backgroundImage: `url("img/banner-1.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            padding: '80px',
          }}
        ></div>

        <div
          //   className="single-hero-items"
          style={{
            backgroundImage: `url("img/banner-2.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* <div
            className="container"
            style={{
              position: 'relative',
              zIndex: 2,
              //   background: "rgba(255, 255, 255, 0.8)", // Temporary background to check visibility
              padding: '20px',
            }}
          >
            <div className="row">
              <div className="col-lg-5">
                <h1>
                  Visit us at Qatar project
                  <span>communications to enable smooth sailing.</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#" className="primary-btn">
                  Know more
                </a>
              </div>
            </div> 
          </div>*/}
        </div>
        <div
          style={{
            backgroundImage: `url("img/banner-3.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            padding: '80px',
          }}
        ></div>
      </Carousel>
    </section>
  );
};

export default Hero;
