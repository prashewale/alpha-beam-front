import { useEffect, useState } from "react";
import Select from "react-select";
import Pagination from "./pagination";
import { productsList } from "../../data/products";
import { Product } from "../../types";
import { useNavigate } from "react-router-dom";

type ProductShopProps = {
  category?: string | null;
};

const ProductShop = ({ category }: ProductShopProps) => {
  const navigate = useNavigate();

  const sortOptions = [
    { value: "", label: "All" },
    { value: "best-seller", label: "Best Seller" },
    { value: "high-price", label: "High Price" },
    { value: "low-price", label: "Low Price" },
  ];
  const [sortOption, setSortOption] = useState<{
    value: string;
    label: string;
  } | null>({ value: "", label: "All" });

  const [brandFilter, setBrandFilter] = useState<{
    value: string;
    label: string;
  } | null>({ value: "", label: "All" });

  const [products] = useState(productsList);

  const getProductsSorted = (productsList: Product[]) => {
    if (sortOption?.value === "best-seller") {
      return [...productsList].sort((a, b) => b.rating - a.rating);
    } else if (sortOption?.value === "high-price") {
      return [...productsList].sort((a, b) => b.price - a.price);
    } else if (sortOption?.value === "low-price") {
      return [...productsList].sort((a, b) => a.price - b.price);
    }
    return productsList;
  };

  const getProductsToShow = () => {
    let filteredProducts = products.filter(
      (x) => !category || x.category.toLowerCase() === category.toLowerCase()
    );

    if (brandFilter?.value) {
      filteredProducts = filteredProducts.filter(
        (x) => x.brand.toLowerCase() === brandFilter?.value.toLowerCase()
      );
    }

    return getProductsSorted(filteredProducts);
  };

  const productsToShow = getProductsToShow();

  const [page, setPage] = useState(1);
  const perPage = 8;
  const totalPages = Math.ceil(productsToShow.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;
  const productsOnPage = productsToShow.slice(startIndex, endIndex);

  const brandFilters = [
    { value: "", label: "All" },
    ...Array.from(new Set(productsToShow.map((product) => product.brand))).map(
      (brand: string) => ({ value: brand.toLowerCase(), label: brand })
    ),
  ];

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <section className="product-shop spad">
        <div className="container">
          <div className="row">
            <h2>Highlighted best-in-class search results</h2>
            <div className="col-lg-12 order-1 order-lg-2">
              <div className="product-show-option">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="select-option">
                      <label className="btn btn-light">Filter</label>
                      <span style={{ minWidth: "150px" }}>
                        <Select
                          defaultValue={sortOption}
                          onChange={setSortOption}
                          options={sortOptions}
                        />
                      </span>

                      <label className="btn btn-light">Brands</label>
                      <span style={{ minWidth: "150px" }}>
                        <Select
                          defaultValue={brandFilter}
                          onChange={setBrandFilter}
                          options={brandFilters}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 text-right">
                    <p>
                      Show {startIndex + 1}-{endIndex} of{" "}
                      {productsToShow.length} Products
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-list shoplist">
                <div className="row">
                  {productsOnPage.map((product) => (
                    <div
                      key={product.id}
                      className="col-lg-6 col-sm-6"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <div className="product-item">
                        <div className="pi-pic">
                          <img src={product.image} alt={product.name} />
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
                              <a href={`/products/${product.id}`}>
                                + Quick View
                              </a>
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
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                          </a>
                          <div className="product-price">{product.price}</div>
                          <div className="action">
                            <a
                              href="#"
                              className="prodt-btn border-gradient border-gradient-purple"
                            >
                              Shop Now
                            </a>
                            <a
                              onClick={() => navigate(`/compare/${product.id}`)}
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
                  ))}
                </div>
              </div>
              {/* <div className="loading-more">
                <i className="icon_loading"></i>
                <a href="#"> Loading More </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductShop;
