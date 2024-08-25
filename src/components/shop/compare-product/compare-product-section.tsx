import { useNavigate } from "react-router-dom";
import { productsList } from "../../../data/products";
import { Product } from "../../../types";

type CompareProductProps = {
  product: Product;
};
const CompareProductSection = ({ product }: CompareProductProps) => {
  const navigate = useNavigate();
  const similarProducts = productsList.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const firstFourSimilarProducts = similarProducts.slice(0, 4);

  return (
    <section className="product-shop spad productDeatils">
      <div className="container">
        <div className="row">
          <div className="card-wrapper">
            <div className="card">
              <div className="row mt-10">
                <div className="col-md-6 prod-deat borderRight">
                  <div className="product-imgs">
                    <div className="img-display">
                      <div className="img-showcase">
                        <img src={product.image} alt="product img" />
                        <img src="img/garmine-2.jpeg" alt="product img" />
                        <img src="img/garmine-1.jpeg" alt="product img" />
                        <img src="img/garmine-4.jpeg" alt="product img" />
                      </div>
                    </div>
                    <div className="img-select">
                      <div className="img-item">
                        <a href="#" data-id="1">
                          <img src={product.image} alt="product img" />
                        </a>
                      </div>
                      <div className="img-item">
                        <a href="#" data-id="2">
                          <img src="/img/garmine-2.jpeg" alt="product img" />
                        </a>
                      </div>
                      <div className="img-item">
                        <a href="#" data-id="3">
                          <img src="/img/garmine-1.jpeg" alt="product img" />
                        </a>
                      </div>
                      <div className="img-item">
                        <a href="#" data-id="4">
                          <img src="/img/garmine-4.jpeg" alt="product img" />
                        </a>
                      </div>
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
                      <p>{product.description}</p>
                    </div>
                    <div className="product-price">
                      <p className="new-price">£{product.price} ex-VAT</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12 mr-auto mb20">
                      <h4 className="text-center">
                        Compare best similar products
                      </h4>
                    </div>
                    {firstFourSimilarProducts.map((product, index) => (
                      <div
                        className="col-md-6 mt-10"
                        key={index}
                        onClick={() => navigate(`/products/${product.id}`)}
                      >
                        <div className="product-item">
                          <div className="pi-pic">
                            <img src={product.image} alt="" />

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
