import { useNavigate } from 'react-router-dom';
import { Product } from '../../../types';
import { useGetProducts } from '@/lib/react-query/queries';
import { useState } from 'react';

type CompareProductProps = {
  product: Product;
};
const CompareProductSection = ({ product }: CompareProductProps) => {
  const navigate = useNavigate();
  const { data: productsListResponse, isFetching: isProductsFetching } =
    useGetProducts();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const productsList = productsListResponse?.data || [];
  const similarProducts = productsList
    .filter((p) => p.category === product.category && p._id !== product._id)
    .slice(0, 4);

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
                      <div className="img-showcase md:px-28">
                        <img
                          src={selectedImage}
                          alt="shoe image"
                          className="px-20 md:px-0"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      {product.images.map((image, i) => (
                        <div className="img-item rounded-xl border p-2" key={i}>
                          <a
                            data-id={i}
                            onClick={() => setSelectedImage(image)}
                          >
                            <img
                              src={image}
                              alt="product img"
                              className="h-24 cursor-pointer"
                            />
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
                      <p className="new-price !font-bold">
                        £{product.price.toFixed(2)} ex-VAT
                      </p>
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
                        onClick={() => navigate(`/products/${product._id}`)}
                      >
                        <div className="product-item">
                          <div className="pi-pic flex flex-col items-center">
                            <img
                              src={product.images[0]}
                              alt=""
                              className="!w-32"
                            />

                            <div className="icon">
                              <i className="icon_heart_alt"></i>
                            </div>
                          </div>
                          <div className="pi-text">
                            <a href={`/products/${product._id}`}>
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
