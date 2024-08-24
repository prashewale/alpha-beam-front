import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const OurLeaders: React.FC = () => {
  const leaders = [
    {
      name: "Jennifer Smith",
      title: "Managing Director",
      image: "https://i.ibb.co/d5DY64w/img1.jpg",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.",
    },
    {
      name: "Managing Directorh",
      title: "Managing Director",
      image: "https://i.ibb.co/d5DY64w/img3.jpg",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.",
    },
    {
      name: "Jennifer Smith",
      title: "Office Worker",
      image: "https://i.ibb.co/d5DY64w/img2.jpg",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row mt-10">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 col-center m-auto">
                <h2 className="text-center mt-10">Our Leaders</h2>
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showIndicators={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  stopOnHover={true}
                  swipeable={true}
                  emulateTouch={true}
                  showThumbs={false}
                  className="mt-10"
                >
                  {leaders.map((leader, index) => (
                    <div className="item carousel-item" key={index}>
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                          <div className="img-box">
                            <img src={leader.image} alt={leader.name} />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <p className="overview">
                            <b>{leader.name}</b>
                          </p>
                          <p>{leader.title}</p>
                          <p className="testimonial">{leader.testimonial}</p>
                        </div>
                        <div className="col-md-1"></div>
                      </div>
                    </div>
                  ))}
                </Carousel>
                <div className="carousel-control-block">
                  <a
                    className="carousel-control left carousel-control-prev"
                    href="#myCarousel"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left"></i>
                  </a>
                  <a
                    className="carousel-control right carousel-control-next"
                    href="#myCarousel"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeaders;
