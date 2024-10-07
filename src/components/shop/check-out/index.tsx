import Header from '../../common/header';
import FeedbackSection from '../../common/feedback-section';
import Footer from '../../common/footer';
import AddressSelection from './address-selection';
import { BreadCrumbItem, Cart } from '../../../types';
import BreadCrumbSection from '../bread-crumb-section';
import { useCart } from '@/hooks/useCart';
import { useGetProducts } from '@/lib/react-query/queries';

const Checkout = () => {
  const { data: productsListResponse, isFetching: isProductsFetching } =
    useGetProducts();

  const productsList = productsListResponse?.data || [];

  const breadCrumbItems: BreadCrumbItem[] = [
    {
      title: 'Home',
      url: '/',
      icon: 'fa fa-home',
    },
    {
      title: 'Shop',
      url: '/products',
      icon: 'fa fa-shopping-bag',
    },
    {
      title: 'Checkout',
      url: '/checkout',
      icon: 'fa fa-checkout',
    },
  ];
  const { cart, removeFromCart, changeCartQuantity, addToCart } = useCart();

  const cartLines: Cart[] = Object.keys(cart).map((key) => {
    return { productId: key, quantity: cart[key] };
  });

  const productsFromCart = cartLines.map((cartLine) => {
    const product = productsList.find(
      (p) => p._id.toString() === cartLine.productId
    );
    if (!product) {
      throw new Error(`Product with id ${cartLine.productId} does not exist`);
    }
    return { ...product, quantity: cartLine.quantity };
  });

  const cartTotalPrice = productsFromCart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <Header />
      <BreadCrumbSection breadCrumbItems={breadCrumbItems} />
      <section className="checkout-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <AddressSelection />
            </div>
            <div className="col-lg-6 checkout-form">
              <div className="place-order">
                <div className="order-total">
                  <ul className="order-table">
                    <li>
                      Product <span>Total</span>
                    </li>
                    {productsFromCart.map((cartLine, index) => {
                      return (
                        <li className="fw-normal" key={index}>
                          {cartLine.name} x {cartLine.quantity}{' '}
                          <span>£{cartLine.price * cartLine.quantity}</span>
                        </li>
                      );
                    })}
                    <li className="fw-normal">
                      Subtotal <span>£{cartTotalPrice}</span>
                    </li>
                    <li className="total-price">
                      Total <span>£{cartTotalPrice}</span>
                    </li>
                  </ul>

                  <div className="order-btn">
                    <button type="submit" className="site-btn place-btn">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Checkout;
