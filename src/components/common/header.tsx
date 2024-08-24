const Header = () => {
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
                          <li>
                            <a href="/products/filter/chartplotters">
                              CHARTPLOTTERS
                            </a>
                          </li>
                          <li>
                            <a href="/products/filter/fishfinders">
                              FISHFINDERS
                            </a>
                          </li>
                          <li>
                            <a href="/products/filter/autopilot">AUTOPILOTS</a>
                          </li>
                          <li>
                            <a href="/products/filter/radar">RADAR</a>
                          </li>
                        </ul>
                      </li>
                      <li className="active">
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
                <li className="heart-icon">
                  <a href="#">
                    <i className="fa fa-user"></i>
                  </a>
                </li>
                <li className="cart-icon">
                  <a href="#">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span>3</span>
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
                                <p>60.00 x 1</p>
                                <h6>FISHFINDERS</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="ti-close"></i>
                            </td>
                          </tr>
                          <tr>
                            <td className="si-pic">
                              <img src="/img/select-product-2.jpg" />
                            </td>
                            <td className="si-text">
                              <div className="product-selected">
                                <p>60.00 x 1</p>
                                <h6>AUTOPILOTS</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="ti-close"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="select-total">
                      <span>total:</span>
                      <h5>120.00</h5>
                    </div>
                    <div className="select-button">
                      <a href="#" className="primary-btn view-card">
                        VIEW CARD
                      </a>
                      <a href="#" className="primary-btn checkout-btn">
                        CHECK OUT
                      </a>
                    </div>
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
