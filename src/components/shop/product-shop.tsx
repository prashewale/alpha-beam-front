import { useState } from "react";
import Select from "react-select";

const ProductShop = () => {
  const filterOptions = [
    { value: "best-seller", label: "Best Seller" },
    { value: "high-price", label: "High Price" },
    { value: "low-price", label: "Low Price" },
  ];
  const brandOptions = [{ value: "lawarrange", label: "Lawarrange" }];
  const [selectedOption, setSelectedOption] = useState();

  return (
    <section className="product-shop spad">
      <div className="container">
        <div className="row">
          <h2>Highlighted best-in-className search results </h2>
          <div className="col-lg-12 order-1 order-lg-2">
            <div className="product-show-option">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <div className="select-option">
                    <label className="btn btn-light">Filter</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => setSelectedOption(undefined)}
                      options={filterOptions}
                    />
                    <label className="btn btn-light">Brands</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => setSelectedOption(undefined)}
                      options={brandOptions}
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 text-right">
                  <p>Show 01- 09 Of 36 Product</p>
                </div>
              </div>
            </div>
            <div className="product-list shoplist">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/img/garmine-1.jpg" />
                      <div className="sale pp-sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active">
                          <a href="#">
                            <i className="icon_bag_alt"></i>
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="/products/1">+ Quick View</a>
                        </li>
                        <li className="w-icon">
                          <a href="#">
                            <i className="fa fa-random"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <a href="#">
                        <h5>GPSMAP® 10x2/12x2 Series</h5>
                        <p>
                          Our GPSMAP 10×2 and 12×2 chartplotter series is
                          designed for cruisers, sailors and captains who need
                          an advanced all-in-one solution at the helm with keyed
                          control
                        </p>
                      </a>
                      <div className="product-price"> £581.63 ex-VAT </div>
                      <div className="action">
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Shop Now
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Compare
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/img/garmine-1.jpg" />
                      <div className="sale pp-sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active">
                          <a href="#">
                            <i className="icon_bag_alt"></i>
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="/products/1">+ Quick View</a>
                        </li>
                        <li className="w-icon">
                          <a href="#">
                            <i className="fa fa-random"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <a href="#">
                        <h5>GPSMAP® 10x2/12x2 Series</h5>
                        <p>
                          Our GPSMAP 10×2 and 12×2 chartplotter series is
                          designed for cruisers, sailors and captains who need
                          an advanced all-in-one solution at the helm with keyed
                          control
                        </p>
                      </a>
                      <div className="product-price"> £581.63 ex-VAT </div>
                      <div className="action">
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Shop Now
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Compare
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/img/garmine-1.jpg" />
                      <div className="sale pp-sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active">
                          <a href="#">
                            <i className="icon_bag_alt"></i>
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="/products/1">+ Quick View</a>
                        </li>
                        <li className="w-icon">
                          <a href="#">
                            <i className="fa fa-random"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <a href="#">
                        <h5>GPSMAP® 10x2/12x2 Series</h5>
                        <p>
                          Our GPSMAP 10×2 and 12×2 chartplotter series is
                          designed for cruisers, sailors and captains who need
                          an advanced all-in-one solution at the helm with keyed
                          control
                        </p>
                      </a>
                      <div className="product-price"> £581.63 ex-VAT </div>
                      <div className="action">
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Shop Now
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Compare
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/img/garmine-1.jpg" />
                      <div className="sale pp-sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active">
                          <a href="#">
                            <i className="icon_bag_alt"></i>
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="/products/1">+ Quick View</a>
                        </li>
                        <li className="w-icon">
                          <a href="#">
                            <i className="fa fa-random"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <a href="#">
                        <h5>GPSMAP® 10x2/12x2 Series</h5>
                        <p>
                          Our GPSMAP 10×2 and 12×2 chartplotter series is
                          designed for cruisers, sailors and captains who need
                          an advanced all-in-one solution at the helm with keyed
                          control
                        </p>
                      </a>
                      <div className="product-price"> £581.63 ex-VAT </div>
                      <div className="action">
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Shop Now
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Compare
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/img/garmine-4.jpeg" />
                      <div className="sale pp-sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active">
                          <a href="#">
                            <i className="icon_bag_alt"></i>
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="/products/1">+ Quick View</a>
                        </li>
                        <li className="w-icon">
                          <a href="#">
                            <i className="fa fa-random"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <a href="#">
                        <h5>GPSMAP® 10x2/12x2 Series</h5>
                        <p>
                          Our GPSMAP 10×2 and 12×2 chartplotter series is
                          designed for cruisers, sailors and captains who need
                          an advanced all-in-one solution at the helm with keyed
                          control
                        </p>
                      </a>
                      <div className="product-price"> £581.63 ex-VAT </div>
                      <div className="action">
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Shop Now
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Compare
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/img/garmine-2.jpeg" />
                      <div className="sale pp-sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active">
                          <a href="#">
                            <i className="icon_bag_alt"></i>
                          </a>
                        </li>
                        <li className="quick-view">
                          <a href="/products/1">+ Quick View</a>
                        </li>
                        <li className="w-icon">
                          <a href="#">
                            <i className="fa fa-random"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <a href="#">
                        <h5>GPSMAP® 10x2/12x2 Series</h5>
                        <p>
                          Our GPSMAP 10×2 and 12×2 chartplotter series is
                          designed for cruisers, sailors and captains who need
                          an advanced all-in-one solution at the helm with keyed
                          control
                        </p>
                      </a>
                      <div className="product-price"> £581.63 ex-VAT </div>
                      <div className="action">
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Shop Now
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Compare
                        </a>
                        <a
                          href="#"
                          className="prodt-btn border-gradient border-gradient-purple"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="loading-more">
              <i className="icon_loading"></i>
              <a href="#"> Loading More </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShop;
