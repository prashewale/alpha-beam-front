import BannerSection from "./banner-section";
import LogoCarousel from "./logo-carousel";
import Header from "../common/header";
import HeroSection from "./hero";
import SpotLightSection from "./spotlight-section";
import CategoryBannerSection from "./category-banner-section";
import ProductBestBanner from "../common/product-best-banner";
import VideoBannerSection from "../common/video-section";
import TestimonialsAboutUs from "./testimonials-about-us";
import TestimonialSection from "./testimonial-section";
import CounterClient from "./counter-client";
import FeedbackSection from "../common/feedback-section";
import Footer from "../common/footer";

const Home = () => {
  const bestSellerProducts = [
    {
      imgSrc: "/img/garmine-1.jpeg",
      title: "GPSMAP® 10x2 /12x2 Series",
    },
    {
      imgSrc: "/img/garmine-2.jpeg",
      title: "GPSMAP® 10x2 /12x2 Series",
    },
    {
      imgSrc: "/img/garmine-4.jpeg",
      title: "GPSMAP® 10x2 /12x2 Series",
    },
  ];
  return (
    <>
      <Header />
      {/* <Features /> */}
      <HeroSection />
      <BannerSection />
      <SpotLightSection />
      <LogoCarousel />
      <CategoryBannerSection />
      <ProductBestBanner
        title="Best seller of all times"
        products={bestSellerProducts}
      />
      <VideoBannerSection />
      <TestimonialsAboutUs />
      <TestimonialSection />
      <CounterClient />
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Home;
