import Header from "../common/header";
import FeedbackSection from "../common/feedback-section";
import Footer from "../common/footer";
import BreadCrumbSection from "./bread-crumb-section";
import ProductShop from "./product-shop";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  // let { category } = useParams();

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  console.log(`category: ${category}`);

  return (
    <>
      <Header />
      {category && <BreadCrumbSection category={category} />}
      <ProductShop category={category} />
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Shop;
