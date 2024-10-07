import { Cart, OfficeLocation, Product, User } from '../../types';
import { categories } from '../../data/categories';
import { useCart } from '../../hooks/useCart';
import { officeLocations } from '../../data/office-locations';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useGetProducts, useSignOutAccount } from '@/lib/react-query/queries';
import {
  useNavigate,
  useParams,
  useRoutes,
  useSearchParams,
} from 'react-router-dom';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utilities';
import { useEffect, useState } from 'react';

const Header = () => {
  const authUser = useAuthUser<User>();
  const signOut = useSignOut();

  const navigate = useNavigate();

  const { data: productsListResponse, isFetching: isProductsFetching } =
    useGetProducts();

  const productsList = productsListResponse?.data || [];

  // Queries
  const { mutateAsync: signOutAccount, isPending: isSigningOut } =
    useSignOutAccount();

  const { cart, removeFromCart } = useCart();

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let isMobile = false;

  if (windowWidth < 768) {
    isMobile = true;
  }
  const generateNavIcons = () => {
    return (
      <ul className="nav-right">
        <li className="cart-icon">
          <a href="#">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </a>
          <div className="cart-hover !right-[-70px] !w-[370px] rounded-xl !bg-gray-100 !p-5">
            <div className="select-items">
              <table>
                <tbody>
                  {officeLocations.map((location: OfficeLocation, index) => (
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
                          <span className="text-sm">{location.address}</span>
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
                  ))}
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
              <div className="cart-hover !bg-gray-100">
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
          <div className="cart-hover !rounded-xl !bg-gray-100">
            <div className="select-items">
              <table>
                <tbody>
                  {productsFromCart
                    .filter((_, i) => i < 3)
                    .map((cartLine, index) => (
                      <tr key={index}>
                        <td
                          className="si-pic"
                          style={{
                            width: '60px',
                          }}
                        >
                          <img src={cartLine.images[0]} />
                        </td>
                        <td
                          className="si-text"
                          style={{
                            textWrap: 'nowrap',
                          }}
                        >
                          <div className="product-selected">
                            <p>
                              £{formatPrice(cartLine.price)} x{' '}
                              {cartLine.quantity}
                            </p>
                            <h6>
                              {cartLine.name.length > 20
                                ? cartLine.name.slice(0, 20) + '...'
                                : cartLine.name}
                            </h6>
                          </div>
                        </td>
                        <td
                          className="si-close"
                          onClick={() => {
                            removeFromCart(cartLine._id.toString());
                          }}
                        >
                          <i className="ti-close"></i>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {productsFromCart.length > 3 && (
                <div className="flex items-center justify-center">
                  <span
                    className="cursor-pointer rounded-full border px-3 py-1 text-sm font-semibold"
                    onClick={() => navigate('/cart')}
                  >
                    and {productsFromCart.length - 3} more
                  </span>
                </div>
              )}
            </div>

            {productsFromCart.length > 0 ? (
              <>
                <div className="select-total mt-2">
                  <span>total:</span>
                  <h5>£{formatPrice(cartTotalPrice)}</h5>
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
    );
  };

  const subsidaries = [
    {
      name: 'Alfa Telecom',
      url: 'https://www.alfatelecom.com.qa/telecom/Home',
      icon: '/img/alpha-telecom-icon.png',
      description: `Qatar's Largest  Amateur Radio Dealer`,
    },
    {
      name: 'Techno Qatar',
      url: 'https://technoqatar.com/',
      icon: '/img/techno-qatar-icon.png',
      description:
        'Techno Qatar is actively involved in Design and build various and completed a numbers of Contracts with a challenging projects in many aspects of the engineering and construction sector requirement',
    },
  ];

  const url = window.location.href;
  const path = url.split('/').pop()?.split('?')[0];

  // const category = searchParams.get('category');

  // const categoryInfo = categories.find(
  //   (x) => x.value.toLowerCase() === category?.toLowerCase()
  // );

  return (
    <header className="flex flex-col">
      <div className="inner-header flex flex-col md:flex-row md:justify-center md:gap-8">
        <div className="mx-10 flex flex-row items-center justify-between">
          <div className="logo">
            <a href="/">
              <img src="/img/logo.png" className="max-w-36" />
            </a>
          </div>
          {isMobile && generateNavIcons()}
        </div>
        <div className="flex flex-col-reverse items-center md:flex-row md:items-end md:gap-8">
          <div className="mb-3 flex flex-col items-center md:!mb-0 md:flex-row">
            <div className="nav-item">
              <nav className="nav-menu mobile-menu mt-0">
                <ul className="mb-0">
                  <li>
                    <a
                      onClick={() => navigate('/products')}
                      className={cn(
                        path == 'products' ? '!text-[#1d8aca]' : ''
                      )}
                    >
                      Products
                    </a>
                    <div className="dropdown !min-w-[700px] rounded-xl !bg-gray-100 !p-5 md:!left-[-100px] lg:!left-0">
                      <div className="select-items">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                          {categories.map((c, index) => (
                            <div
                              key={index}
                              className="flex w-full cursor-pointer items-center justify-start gap-2 hover:text-[#1d8aca]"
                              onClick={() =>
                                navigate(`/products?category=${c.value}`)
                              }
                            >
                              <div className="flex h-20 w-20 items-center justify-center overflow-hidden">
                                <img
                                  src={c.iconImageUrl}
                                  alt=""
                                  className="h-auto w-20 object-cover"
                                />
                              </div>
                              <div className="w-full">{c.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      className={cn(
                        'cursor-pointer',
                        path == 'services' ? '!text-[#1d8aca]' : ''
                      )}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className={cn(
                        'cursor-pointer',
                        path == 'brands' ? '!text-[#1d8aca]' : ''
                      )}
                    >
                      {' '}
                      Brands
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={() => navigate('/solutions')}
                      className={cn(
                        'cursor-pointer',
                        path == 'solutions' ? '!text-[#1d8aca]' : ''
                      )}
                    >
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate('/about-us')}
                      className={cn(
                        'cursor-pointer',
                        path == 'about-us' ? '!text-[#1d8aca]' : ''
                      )}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className={cn(
                        'cursor-pointer',
                        path == 'subsidaries' ? '!text-[#1d8aca]' : ''
                      )}
                    >
                      Subsidary
                    </a>
                    <ul className="dropdown !right-[-70px] !w-[370px] rounded-xl !bg-gray-100 !p-5">
                      <div className="select-items">
                        <table>
                          <tbody>
                            {subsidaries.map((subsidary, index) => (
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
                                    <img
                                      className={cn(
                                        'mt-2 h-auto w-10 !text-4xl'
                                      )}
                                      aria-hidden="true"
                                      src={subsidary.icon}
                                    />
                                  </div>
                                  <div className="flex w-full flex-col items-start">
                                    <span className="font-semi bold text-lg">
                                      {subsidary.name}
                                    </span>
                                    <span className="text-sm">
                                      {subsidary.description.length > 70
                                        ? subsidary.description.slice(0, 70) +
                                          '...'
                                        : subsidary.description}
                                    </span>
                                    <button
                                      onClick={() => window.open(subsidary.url)}
                                      className="mt-2 !text-[12px] italic !text-sky-500 !underline underline-offset-8"
                                    >
                                      click to visit the website
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="advanced-search flex items-center border-b border-b-gray-700 pb-1">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search product"
                  className="!md:w-[200px] h-full w-full py-0 text-[#d1d1d1]"
                />
                <button type="button" className="mx-3">
                  <i className="ti-search"></i>
                </button>
              </div>
            </div>
          </div>
          {!isMobile && generateNavIcons()}
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
