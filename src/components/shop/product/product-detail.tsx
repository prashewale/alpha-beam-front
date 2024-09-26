import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';
import { Product } from '../../../types';
import { formatPrice } from '@/lib/utilities';

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
                        <img src={product.images[0]} alt="shoe image" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-2">
                      {product.images.map((image, index) => (
                        <div className="img-item">
                          <a href={image} data-id={index} target={'_blank'}>
                            <img src={image} alt="shoe image" className="" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-content">
                    <h2 className="product-title">{product.name}</h2>

                    <div className="product-detail">
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.description
                              .replace('\n', '')
                              .replace('\r', ''),
                          }}
                        />
                      </p>
                    </div>
                    <div className="product-price">
                      <p className="new-price">
                        £{formatPrice(product.price)} ex-VAT
                      </p>
                    </div>
                    <div className="hidden">
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
