import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const LogoCarousel: React.FC = () => {
  const logos = [
    'img/partner_logos/partner-1.png',
    'img/partner_logos/patner-2.jpg',
    'img/partner_logos/patner-3.png',
    'img/partner_logos/patner-4.png',
    'img/partner_logos/patner-5.png',
    'img/partner_logos/patner-6.jpeg',
    'img/partner_logos/patner-7.png',
    'img/partner_logos/patner-8.png',
    'img/partner_logos/patner-9.png',
    'img/partner_logos/patner-10.jpg',
    'img/partner_logos/patner-11.png',
  ];

  return (
    <div className="latest-blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Choose by brands</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginBottom: '10px' }}>
            <div className="col-lg-12">
              <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false} // Hide dots/indicators
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                centerMode={true}
                centerSlidePercentage={20} // Adjust percentage to fit logos
                showThumbs={false}
                className="brand-logo"
              >
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="logo-item"
                    style={{
                      marginRight: '10px',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{}}>
                      <div className="tablecell-inner">
                        <img src={logo} alt={`Brand logo ${index + 1}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="row">
            {/* Second Carousel if needed */}
            <div className="col-lg-12">
              <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false} // Hide dots/indicators
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                centerMode={true}
                centerSlidePercentage={20} // Adjust percentage to fit logos
                showThumbs={false}
                className="brand-logo"
              >
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="logo-item"
                    style={{
                      marginRight: '10px',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{}}>
                      <div className="tablecell-inner">
                        <img src={logo} alt={`Brand logo ${index + 1}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
