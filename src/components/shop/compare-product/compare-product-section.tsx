import { useNavigate } from 'react-router-dom';
import { productsList } from '../../../data/products';
import { Product } from '../../../types';

type CompareProductProps = {
  product: Product;
};
const CompareProductSection = ({ product }: CompareProductProps) => {
  const navigate = useNavigate();
  const similarProducts = productsList
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 7);
  return (
    <section className="product-shop spad productDeatils">
      <div className="container">
        <div className="row">
          <div className="card-wrapper">
            <div className="card !border-none">
              <div className="row mt-10">
                <div className="col-md-6 prod-deat borderRight">
                  <div className="product-imgs">
                    <div className="img-display">
                      <div className="img-showcase">
                        {product.images.map((image, i) => (
                          <img src={image} alt="product img" />
                        ))}
                      </div>
                    </div>
                    <div className="img-select">
                      {product.images.map((image, i) => (
                        <div className="img-item" key={i}>
                          <a href={image} data-id={i} target="_blank">
                            <img src={image} alt="product img" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="text-center">
                      <div className="prod-list">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Check Product Manual
                        </button>
                      </div>
                    </div>
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
                      <p className="new-price">£{product.price} ex-VAT</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12 mb20 mr-auto">
                      <h4 className="text-center">
                        Compare best similar products
                      </h4>
                    </div>
                    {similarProducts.map((product, index) => (
                      <div
                        className="col-md-6 mt-10"
                        key={index}
                        onClick={() => navigate(`/products/${product.id}`)}
                      >
                        <div className="product-item">
                          <div className="pi-pic">
                            <img src={product.images[0]} alt="" />

                            <div className="icon">
                              <i className="icon_heart_alt"></i>
                            </div>
                            <ul>
                              <li className="quick-view">
                                <a href={`/products/${product.id}`}>
                                  + Quick View
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="pi-text">
                            <a href={`/products/${product.id}`}>
                              <h5>{product.name}</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default CompareProductSection;
