import { useParams } from 'react-router-dom';
import FeedbackSection from '../../common/feedback-section';
import Footer from '../../common/footer';
import Header from '../../common/header';
import CompareProductSection from './compare-product-section';
import { useGetProducts } from '@/lib/react-query/queries';

const CompareProduct = () => {
  const { id } = useParams();
  const { data: productsListResponse, isFetching: isProductsFetching } =
    useGetProducts();

  const productsList = productsListResponse?.data || [];
  const product = productsList.find((x) => x._id.toString() === id);
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
