import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Cart, User } from "../../types";
import { categories } from "../../data/categories";
import { useCart } from "../../hooks/useCart";
import { productsList } from "../../data/products";
import { officeLocations } from "../../data/office-locations";
const Header = () => {
  const { getUser, logout } = useAuth();

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

  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, [getUser]);

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
                        <ul className="dropdown" style={{ display: "none" }}>
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
            <div className="col-lg-2 text-right col-md-2">
              <ul className="nav-right">
                <li className="cart-icon">
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </a>
                  <div className="cart-hover">
                    <div className="select-items">
                      <table>
                        <tbody>
                          {officeLocations.map((location) => (
                            <tr>
                              <td className="si-pic">
                                <i
                                  className={location.icon}
                                  aria-hidden="true"
                                ></i>
                              </td>
                              <td className="si-text">
                                <div className="product-selected">
                                  <p>{location.address}</p>
                                  <h6>{location.city}</h6>
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
                  {user ? (
                    <>
                      <a href="#">
                        <i className="fa fa-user"></i>
                      </a>
                      <div className="cart-hover">
                        <div className="select-items">
                          <table>
                            <tbody>
                              <tr>
                                <td className="si-pic">
                                  <img src="/img/select-product-1.jpg" />
                                </td>
                                <td className="si-text">
                                  <div className="product-selected">
                                    <span className="text-small text-muted">
                                      Welcome
                                    </span>
                                    <h6>
                                      {user.firstName + " " + user.lastName}{" "}
                                    </h6>
                                  </div>
                                </td>
                                <td className="si-close">
                                  <button
                                    onClick={logout}
                                    className="btn btn-outline-danger btn-sm"
                                  >
                                    {" "}
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
                      ""
                    )}
                  </a>
                  <div className="cart-hover">
                    <div className="select-items">
                      <table>
                        <tbody>
                          {productsFromCart.map((cartLine) => (
                            <tr>
                              <td className="si-pic" style={{ width: "60px" }}>
                                <img src={cartLine.image} />
                              </td>
                              <td
                                className="si-text"
                                style={{ textWrap: "nowrap" }}
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
                          <a href="#" className="primary-btn view-card">
                            VIEW CART
                          </a>
                          <a href="#" className="primary-btn checkout-btn">
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
              <div id="mobile-menu-wrap" style={{ display: "none" }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-top">
        <div className="container">
          <div className="ht-left">
            Free Ground Installation On Orders Above $2500*
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
