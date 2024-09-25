import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';
import { Product } from '../../../types';

type ProductDetailProps = {
  product: Product;
};
const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addToCart } = useCart();

  const navigate = useNavigate();

  return (
    <section className="product-shop spad productDeatils">
      <div className="container">
        <div className="row">
          <div className="card-wrapper">
            <div className="card !border-none">
              <div className="row">
                <div className="col-md-6 prod-deat">
                  <div className="product-imgs">
                    <div className="img-display">
                      <div className="img-showcase">
                        <img src={product.image} alt="shoe image" />
                        <img src="/img/garmine-3.png" alt="shoe image" />
                        <img src="/img/garmine-2.png" alt="shoe image" />
                        <img src="/img/garmine-4.png" alt="shoe image" />
                      </div>
                    </div>
                    <div className="img-select">
                      <div className="img-item">
                        <a href="#" data-id="1">
                          <img src={product.image} alt="shoe image" />
                        </a>
                      </div>
                      <div className="img-item">
                        <a href="#" data-id="2">
                          <img src="/img/garmine-2.png" alt="shoe image" />
                        </a>
                      </div>
                      <div className="img-item">
                        <a href="#" data-id="3">
                          <img src="/img/garmine-1.png" alt="shoe image" />
                        </a>
                      </div>
                      <div className="img-item">
                        <a href="#" data-id="4">
                          <img src="/img/garmine-4.png" alt="shoe image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-content">
                    <h2 className="product-title">{product.name}</h2>

                    <div className="product-detail">
                      <p>{product.description}</p>
                    </div>
                    <div className="product-price">
                      <p className="new-price">£{product.price} ex-VAT</p>
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
                    <div className="action flex gap-2">
                      <button
                        className="gradient-btn p-2 text-sm"
                        onClick={() => addToCart(product.id.toString(), 1)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="gradient-btn p-2 text-sm"
                        onClick={() => navigate(`/compare/${product.id}`)}
                      >
                        Compare
                      </button>
                      <button className="w-[440px] rounded-xl border-none bg-[#FE5639] px-[2px] py-[5px] text-sm text-white outline-none">
                        Enquire Now
                      </button>
                    </div>
                    <div className="purchase-info" style={{ display: 'none' }}>
                      <input type="number" min="0" defaultValue="1" />
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
