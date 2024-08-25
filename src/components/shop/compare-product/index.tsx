import { useParams } from "react-router-dom";
import FeedbackSection from "../../common/feedback-section";
import Footer from "../../common/footer";
import Header from "../../common/header";
import CompareProductSection from "./compare-product-section";
import { productsList } from "../../../data/products";

const CompareProduct = () => {
  const { id } = useParams();

  const product = productsList.find((x) => x.id.toString() === id);
  return (
    <>
      <Header />
      {product ? (
        <CompareProductSection product={product} />
      ) : (
        <div>Product not found</div>
      )}
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default CompareProduct;
