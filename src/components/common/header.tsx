import { Cart, OfficeLocation, User } from '../../types';
import { categories } from '../../data/categories';
import { useCart } from '../../hooks/useCart';
import { productsList } from '../../data/products';
import { officeLocations } from '../../data/office-locations';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useSignOutAccount } from '@/lib/react-query/queries';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const authUser = useAuthUser<User>();
  const signOut = useSignOut();

  const navigate = useNavigate();

  // Queries
  const { mutateAsync: signOutAccount, isPending: isSigningOut } =
    useSignOutAccount();

  const { cart, removeFromCart } = useCart();

  const cartLines: Cart[] = Object.keys(cart).map((key) => {
    return { productId: key, quantity: cart[key] };
  });

  const productsFromCart = cartLines.map((cartLine) => {
    const product = productsList.find(
      (p) => p.id.toString() === cartLine.productId
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
    <header className="header-section">
      <div className="container">
        <div className="inner-header">
          <div className="row alignV-center">
            <div className="col-lg-2 col-md-2">
              <div className="logo">
                <a href="index.html">
                  <img src="/img/logo.png" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="navbar-center">
                <div className="nav-item">
                  <nav className="nav-menu mobile-menu">
                    <ul>
                      <li>
                        <a href="/products">PRODUCTS</a>
                        <ul className="dropdown">
                          {categories.map((c, index) => (
                            <li key={index}>
                              <a href={`/products?category=${c.value}`}>
                                {c.name.toUpperCase()}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a href={`/products`}>SEE ALL</a>
                          </li>
                          <li>
                            <a href={`/products`}>BEST SELLERS</a>
                          </li>
                          <li>
                            <a href={`/products`}>PACKAGE DEALS</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#"> SERVICE</a>
                      </li>
                      <li>
                        <a href="#"> BRANDS</a>
                      </li>

                      <li>
                        <a href="/solutions"> SOLUTIONS</a>
                      </li>
                      <li>
                        <a href="/about-us">ABOUT</a>
                      </li>
                      <li>
                        <a href="#">SUBSIDARY</a>
                        <ul className="dropdown" style={{ display: 'none' }}>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="shopping-cart.html">Shopping Cart</a>
                          </li>
                          <li>
                            <a href="check-out.html">Checkout</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="advanced-search">
                  <div className="input-group">
                    <input type="text" placeholder="Search product" />
                    <button type="button">
                      <i className="ti-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 text-right">
              <ul className="nav-right">
                <li className="cart-icon">
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </a>
                  <div className="cart-hover !w-[450px]">
                    <div className="select-items">
                      <table>
                        <tbody>
                          {officeLocations.map(
                            (location: OfficeLocation, index) => (
                              <tr key={index}>
                                <td className="flex gap-5">
                                  <div className="flex cursor-pointer items-start justify-center text-sky-500">
                                    <i
                                      className={cn(location.icon, '!text-4xl')}
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div className="flex w-full flex-col">
                                    <span className="text-2xl font-bold">
                                      {location.officeName}
                                    </span>
                                    <span className="text-base font-bold">
                                      {location.address}
                                    </span>
                                    <a
                                      href={location.googleMapLocation}
                                      className="mt-2 text-base italic !text-sky-500 !underline underline-offset-8"
                                    >
                                      click to see on maps
                                    </a>
                                    <div className="mt-4 flex items-center justify-between">
                                      <span className="text-lg font-semibold italic">
                                        24 hours service
                                      </span>
                                      <span className="flex items-center justify-end gap-2">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-sky-500">
                                          <i className="fa fa-phone !text-sky-500"></i>
                                        </span>
                                        <span>{location.phone}</span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>
                <li className="cart-icon">
                  {authUser ? (
                    <>
                      <a href="#">
                        <i className="fa fa-user"></i>
                      </a>
                      <div className="cart-hover">
                        <div className="select-items">
                          <table>
                            <tbody>
                              <tr
                                onClick={() => navigate('/admin/products')}
                                className="cursor-pointer"
                              >
                                <td className="si-pic">
                                  <img src="/img/select-product-1.jpg" />
                                </td>
                                <td className="si-text">
                                  <div className="product-selected">
                                    <span className="text-small text-muted">
                                      Welcome
                                    </span>
                                    <h6>
                                      {authUser.firstName +
                                        ' ' +
                                        authUser.lastName}{' '}
                                    </h6>
                                  </div>
                                </td>
                                <td className="si-close">
                                  <button
                                    onClick={async () => {
                                      signOut();
                                      await signOutAccount();
                                    }}
                                    className="btn btn-outline-danger btn-sm"
                                  >
                                    {' '}
                                    Logout
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      className="btn btn-outline-secondary btn-sm"
                      href="/login"
                      role="button"
                    >
                      Login
                    </a>
                  )}
                </li>
                <li className="cart-icon">
                  <a href="#">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    {productsFromCart.length > 0 ? (
                      <span>{productsFromCart.length}</span>
                    ) : (
                      ''
                    )}
                  </a>
                  <div className="cart-hover">
                    <div className="select-items">
                      <table>
                        <tbody>
                          {productsFromCart.map((cartLine, index) => (
                            <tr key={index}>
                              <td
                                className="si-pic"
                                style={{
                                  width: '60px',
                                }}
                              >
                                <img src={cartLine.image} />
                              </td>
                              <td
                                className="si-text"
                                style={{
                                  textWrap: 'nowrap',
                                }}
                              >
                                <div className="product-selected">
                                  <p>
                                    £{cartLine.price} x {cartLine.quantity}
                                  </p>
                                  <h6>{cartLine.name}</h6>
                                </div>
                              </td>
                              <td
                                className="si-close"
                                onClick={() => {
                                  removeFromCart(cartLine.id.toString());
                                }}
                              >
                                <i className="ti-close"></i>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {productsFromCart.length > 0 ? (
                      <>
                        <div className="select-total">
                          <span>total:</span>
                          <h5>£{cartTotalPrice}</h5>
                        </div>
                        <div className="select-button">
                          <a href="/cart" className="primary-btn view-card">
                            VIEW CART
                          </a>
                          <a
                            href="/checkout"
                            className="primary-btn checkout-btn"
                          >
                            CHECK OUT
                          </a>
                        </div>
                      </>
                    ) : (
                      <p>Cart is empty</p>
                    )}
                  </div>
                </li>
              </ul>
              <div id="mobile-menu-wrap" style={{ display: 'none' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-top">
        <div className="container">
          <div className="ht-left">
            Free Ground Installation On Orders Above £2500*
          </div>
          <div className="ht-right">
            Call us on <span>+974 4418 8446</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
