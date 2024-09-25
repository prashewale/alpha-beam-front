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
    <header className="flex flex-col">
      <div className="inner-header flex justify-center">
        <div className="flex items-end gap-8">
          <div className="logo">
            <a href="/">
              <img src="/img/logo.png" className="max-w-36" />
            </a>
          </div>
          <div className="navbar-center flex items-center gap-8">
            <div className="nav-item">
              <nav className="nav-menu mobile-menu mt-0">
                <ul className="mb-0">
                  <li>
                    <a href="/products">Products</a>
                    <ul className="dropdown">
                      {categories.map((c, index) => (
                        <li key={index}>
                          <a href={`/products?category=${c.value}`}>{c.name}</a>
                        </li>
                      ))}
                      <li>
                        <a href={`/products`}>See All</a>
                      </li>
                      <li>
                        <a href={`/products`}>Best Sellers</a>
                      </li>
                      <li>
                        <a href={`/products`}>Package Deals</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"> Services</a>
                  </li>
                  <li>
                    <a href="#"> Brands</a>
                  </li>

                  <li>
                    <a href="/solutions"> Solutions</a>
                  </li>
                  <li>
                    <a href="/about-us">About</a>
                  </li>
                  <li>
                    <a href="#">Subsidary</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="advanced-search flex items-center border-b border-b-gray-700 pb-1">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search product"
                  className="h-full !w-[200px] py-0 text-[#d1d1d1]"
                />
                <button type="button" className="mx-3">
                  <i className="ti-search"></i>
                </button>
              </div>
            </div>
          </div>
          <ul className="nav-right !mb-0">
            <li className="cart-icon">
              <a href="#">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </a>
              <div className="cart-hover !w-[370px] rounded-xl !p-5">
                <div className="select-items">
                  <table>
                    <tbody>
                      {officeLocations.map(
                        (location: OfficeLocation, index) => (
                          <tr key={index}>
                            <td
                              className={cn(
                                'mt-2 flex gap-5',
                                index !== officeLocations.length - 1
                                  ? 'border-b pb-3'
                                  : '!pb-1'
                              )}
                            >
                              <div className="flex cursor-pointer items-start justify-center text-sky-500">
                                <i
                                  className={cn(location.icon, '!text-4xl')}
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="flex w-full flex-col">
                                <span className="font-semi bold text-lg">
                                  {location.officeName}
                                </span>
                                <span className="text-sm">
                                  {location.address}
                                </span>
                                <a
                                  href={location.googleMapLocation}
                                  className="mt-2 text-[12px] italic !text-sky-500 !underline underline-offset-8"
                                >
                                  click to see on maps
                                </a>
                                <div className="mt-2 flex items-center justify-between">
                                  <span className="text-[12px] font-semibold italic">
                                    24 hours service
                                  </span>
                                  <span className="flex flex-nowrap items-center justify-end gap-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-sky-500 p-1">
                                      <img
                                        src="img/icon/phone.svg"
                                        // className="fill-sky-500"
                                      />
                                    </span>
                                    <span className="flex-nowrap text-[12px] font-semibold">
                                      {location.phone}
                                    </span>
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
                                  {authUser.firstName + ' ' + authUser.lastName}{' '}
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
                      <a href="/checkout" className="primary-btn checkout-btn">
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
        </div>
      </div>
      <div className="header-top bg-[#053349]">
        <div className="container">
          <div className="ht-left">
            Free Ground Installation On Orders Above QAR 2,500.00*
          </div>
          <div className="ht-right">
            Call us on{' '}
            <span className="!font-normal text-white">+974 4418 8446</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
