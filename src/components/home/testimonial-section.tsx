import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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

  return (
    <section className="testimonal">
      <div className="testimonials-wrap">
        <div className="container">
          <div className="heading-section">
            <h2>What clients say about us?</h2>
          </div>
          <div className="relative z-10 mb-[-80px]">
            {/* <i className="fa fa-quote-left"></i> */}
            <img src="img/icon/inverted-comma.png" className="h-32 w-auto" />
          </div>
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
            centerSlidePercentage={35} // Controls how much of the slide is shown
            showThumbs={false} // Hides the thumbnail images
          >
            {testimonials.map((testimonial, index) => (
              <div
                className="item"
                key={index}
                style={{ width: '350px', paddingTop: '20px' }}
              >
                <div className="testimonial-box d-flex">
                  {/* {testimonial.imgUrl && (
                    <div
                      className="user-img"
                      style={{
                        backgroundImage: `url(${testimonial.imgUrl})`,
                      }}
                    />
                  )} */}
                  <div className="text pl-4">
                    <p>{testimonial.quote}</p>
                    <p className="name">{testimonial.name}</p>
                    <span className="position" style={{ display: 'none' }}>
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
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
