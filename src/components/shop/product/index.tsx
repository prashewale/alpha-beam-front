import Header from '../../common/header';
import ProductDetail from './product-detail';
import Footer from '../../common/footer';
import FeedbackSection from '../../common/feedback-section';
import ProductBestBanner from '../../common/product-best-banner';
import { useParams } from 'react-router-dom';
import { productsList } from '../../../data/products';

const Product = () => {
  const { id } = useParams();

  const product = productsList.find((x) => x.id.toString() === id);
  const similarProducts = productsList
    .filter((x) => x.id !== product?.id)
    .filter((x) => x.category === product?.category)
    .slice(0, 7);

  return (
    <>
      <Header />
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <div>Product not found</div>
      )}
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
