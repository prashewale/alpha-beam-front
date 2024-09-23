import { testimonials } from '@/constants';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialsAboutUs = () => {
  return (
    <section className="about-us testimonials-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-section">
              <h2>Why choose us?</h2>
              <p>
                Professionals with decades of international expertise in the
                marine business make up our group. We value our reputation and
                take <br />
                great satisfaction in delivering dependable, excellent work that
                is finished on schedule and within budget. round-the-clock
                assistance.
              </p>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-12">
                <div className="col-span-3 col-start-3 flex items-center">
                  <img src={item.iconUrl} className="earphone" />
                </div>
                <div className="col-span-6 col-start-6 flex items-center">
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsAboutUs;
