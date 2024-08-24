import Header from "../common/header";
import FeedbackSection from "../common/feedback-section";
import Footer from "../common/footer";
import BackgroundBannerSolutions from "./background-banner-solutions";
import SolutionList from "./solution-list";

const Solutions = () => {
  return (
    <>
      <Header />
      <BackgroundBannerSolutions />
      <SolutionList />
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Solutions;
