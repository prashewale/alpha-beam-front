import { useCart } from '@/hooks/useCart';
import { useGetProducts } from '@/lib/react-query/queries';
import { Cart } from '@/types';

const CartSummarySection = () => {
  const { cart, removeFromCart, changeCartQuantity, addToCart } = useCart();
  const { data: productsListResponse, isFetching: isProductsFetching } =
    useGetProducts();

  const productsList = productsListResponse?.data || [];

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
    <section className="shopping-cart spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cart-table">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th className="p-name">Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="my-3"></tr>
                  {productsFromCart.map((cartLine, index) => {
                    return (
                      <tr key={index}>
                        <td className="cart-pic">
                          <img src="img/garmine-4.jpeg" />
                        </td>
                        <td className="cart-title">
                          <h5>{cartLine.name}</h5>
                        </td>
                        <td className="p-price">£{cartLine.price}</td>
                        <td className="qua-col">
                          <div className="quantity">
                            <div className="row">
                              <button
                                onClick={() =>
                                  removeFromCart(cartLine._id.toString())
                                }
                                type="button"
                                className="btn btn-link col px-2"
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                              <input
                                type="number"
                                value={cartLine.quantity}
                                className="col pro-qty"
                                onChange={(e) => {
                                  const value = e.target.value;
                                  const quantity = value
                                    ? parseInt(e.target.value)
                                    : 0;

                                  if (quantity > 0) {
                                    changeCartQuantity(
                                      cartLine._id.toString(),
                                      quantity
                                    );
                                  }
                                }}
                              />
                              <button
                                onClick={() =>
                                  addToCart(cartLine._id.toString())
                                }
                                type="button"
                                className="btn btn-link col px-2"
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="total-price">
                          £{(cartLine.price * cartLine.quantity).toFixed(2)}
                        </td>
                        <td className="close-td">
                          <i
                            className="ti-close"
                            onClick={() =>
                              changeCartQuantity(cartLine._id.toString(), 0)
                            }
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="cart-buttons">
                  <a href="/products" className="primary-btn continue-shop">
                    Continue shopping
                  </a>
                  <a href="#" className="primary-btn up-cart">
                    Update cart
                  </a>
                </div>
                <div className="discount-coupon">
                  <h6>Discount Codes</h6>
                  <form action="#" className="coupon-form">
                    <input type="text" placeholder="Enter your codes" />
                    <button type="submit" className="site-btn coupon-btn">
                      Apply
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-4">
                <div className="proceed-checkout">
                  <ul>
                    <li className="subtotal">
                      Subtotal <span>£{cartTotalPrice.toFixed(2)}</span>
                    </li>
                    <li className="cart-total">
                      Total <span>£{cartTotalPrice.toFixed(2)}</span>
                    </li>
                  </ul>
                  <a href="/checkout" className="proceed-btn">
                    PROCEED TO CHECK OUT
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

export default CartSummarySection;
