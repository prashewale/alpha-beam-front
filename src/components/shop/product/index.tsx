import Header from "../../common/header";
import ProductDetail from "./product-detail";
import Footer from "../../common/footer";
import FeedbackSection from "../../common/feedback-section";
import ProductBestBanner from "../../common/product-best-banner";

const Product = () => {
  const similarProducts = [
    {
      imgSrc: "/img/garmine-1.jpg",
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
      <ProductDetail />
      <ProductBestBanner
        title="Products you may like"
        products={similarProducts}
      />
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Product;
