import Header from "../common/header";
import BackgroundBanner from "./background-banner";
import FeedbackSection from "../common/feedback-section";
import Footer from "../common/footer";
import FutureScope from "./future-scope";
import VideoBannerSection from "../common/video-section";

const AboutUs = () => {
  return (
    <>
      <Header />
      <BackgroundBanner />
      <FutureScope />
      {/* <OurLeaders /> */}
      <section className="mt-10">
        <h2 className="text-center mt-10">Blogs & Vlogs & Articles</h2>
        <VideoBannerSection />
      </section>
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default AboutUs;
