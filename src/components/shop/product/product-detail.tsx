const ProductDetail = () => {
  return (
    <section className="product-shop spad productDeatils">
      <div className="container">
        <div className="row">
          <div className="card-wrapper">
            <div className="card">
              <div className="row">
                <div className="col-md-6 prod-deat">
                  <div className="product-imgs">
                    <div className="img-display">
                      <div className="img-showcase">
                        <img src="/img/garmine-1.jpg" alt="shoe image" />
                        <img src="/img/garmine-2.jpeg" alt="shoe image" />
                        <img src="/img/garmine-1.jpg" alt="shoe image" />
                        <img src="/img/garmine-4.jpeg" alt="shoe image" />
                      </div>
                    </div>
                    <div className="img-select">
                      <div className="img-item">
                        <a href="#" data-id="1">
                          <img src="/img/garmine-1.jpg" alt="shoe image" />
                        </a>
                      </div>
                      <div className="img-item">
                        <a href="#" data-id="2">
                          <img src="/img/garmine-2.jpeg" alt="shoe image" />
                        </a>
                      </div>
                      <div className="img-item">
                        <a href="#" data-id="3">
                          <img src="/img/garmine-1.jpg" alt="shoe image" />
                        </a>
                      </div>
                      <div className="img-item">
                        <a href="#" data-id="4">
                          <img src="/img/garmine-4.jpeg" alt="shoe image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-content">
                    <h2 className="product-title">GPSMAP® 10x2/12x2 Series</h2>

                    <div className="product-detail">
                      <p>
                        Our GPSMAP 10×2 and 12×2 chartplotter series is designed
                        for cruisers, sailors and captains who need an advanced
                        all-in-one solution at the helm with keyed control.
                        display 11 inches.
                      </p>
                    </div>
                    <div className="product-price">
                      <p className="new-price">£581.63 ex-VAT</p>
                    </div>
                    <div>
                      <div className="prod-list">
                        <label>Display</label>
                        <br />
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          10"
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          12"
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          14"
                        </button>
                      </div>
                      <div className="prod-list">
                        <label>Charts and Maps</label>
                        <br />
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          WORLDWIDE BASEMAP
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          WORLDWIDE BASEMAP
                        </button>
                      </div>
                      <div className="prod-list">
                        <label>Includes Transducer</label>
                        <br />
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          No
                        </button>
                      </div>
                      <div className="prod-list">
                        <label className="mt-10">
                          Available to ship
                          <br />
                          in 1–3 business days
                        </label>
                        <label>
                          Ground Installation
                          <br />
                          Available.
                        </label>
                      </div>
                    </div>
                    <div className="action">
                      <a
                        href="#"
                        className="prodt-btn border-gradient border-gradient-purple"
                      >
                        Add to Cart{" "}
                      </a>
                      <a
                        href="#"
                        className="prodt-btn border-gradient border-gradient-purple"
                      >
                        Compare
                      </a>
                      <a href="#" className="prodt-btn btn-red">
                        Enquire Now
                      </a>
                    </div>
                    <div className="purchase-info" style={{ display: "none" }}>
                      <input type="number" min="0" value="1" />
                      <button type="button" className="btn">
                        Add to Cart <i className="fas fa-shopping-cart"></i>
                      </button>
                      <button type="button" className="btn">
                        Compare
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
