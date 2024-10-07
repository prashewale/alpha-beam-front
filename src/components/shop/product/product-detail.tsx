import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';
import { Product } from '../../../types';
import { formatPrice } from '@/lib/utilities';
import { useState } from 'react';
type ProductDetailProps = {
  product: Product;
};
const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addToCart } = useCart();

  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

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
                        <img
                          src={selectedImage}
                          alt="shoe image"
                          className="px-20 md:px-0"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-2">
                      {product.images.map((image, index) => (
                        <div className="img-item" key={index}>
                          <a
                            data-id={index}
                            onClick={() => setSelectedImage(image)}
                          >
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

                    <div className="action mb-4 mt-4 flex gap-2">
                      <button
                        className="gradient-btn p-2 text-sm"
                        onClick={() => addToCart(product._id.toString(), 1)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="gradient-btn p-2 text-sm"
                        onClick={() => navigate(`/compare/${product._id}`)}
                      >
                        Compare
                      </button>
                      <button className="rounded-xl border-none bg-[#FE5639] p-2 px-[2px] py-[5px] text-sm text-white outline-none">
                        Enquire Now
                      </button>
                    </div>

                    <div className="product-detail">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: !!product.shortDescription
                            ? product.shortDescription
                                .replace('\n', '')
                                .replace('\r', '')
                                .slice(0, 200) + '...'
                            : '',
                        }}
                      />
                    </div>
                    <div className="product-price">
                      <p className="new-price">
                        £{formatPrice(product.price)} ex-VAT
                      </p>
                    </div>
                    <div className="">
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
                      <div className="flex flex-col">
                        <label className="mt-10 text-red-700">
                          *Available to ship in 1–3 business days
                        </label>
                        <label className="text-red-700">
                          *Ground Installation Available.
                        </label>
                      </div>
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
