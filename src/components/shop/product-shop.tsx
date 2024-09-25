import { useState } from 'react';
import Select from 'react-select';
import Pagination from './pagination';
import { productsList } from '../../data/products';
import { Product } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';

type ProductShopProps = {
  category?: string | null;
};

const ProductShop = ({ category }: ProductShopProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const sortOptions = [
    { value: '', label: 'All' },
    { value: 'best-seller', label: 'Best Seller' },
    { value: 'high-price', label: 'High Price' },
    { value: 'low-price', label: 'Low Price' },
  ];
  const [sortOption, setSortOption] = useState<{
    value: string;
    label: string;
  } | null>({ value: '', label: 'All' });

  const [brandFilter, setBrandFilter] = useState<{
    value: string;
    label: string;
  } | null>({ value: '', label: 'All' });

  const [products] = useState(productsList);

  const getProductsSorted = (productsList: Product[]) => {
    if (sortOption?.value === 'best-seller') {
      return [...productsList].sort((a, b) => b.rating - a.rating);
    } else if (sortOption?.value === 'high-price') {
      return [...productsList].sort((a, b) => b.price - a.price);
    } else if (sortOption?.value === 'low-price') {
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
  const perPage = 9;
  const totalPages = Math.ceil(productsToShow.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;
  const productsOnPage = productsToShow.slice(startIndex, endIndex);

  const brandFilters = [
    { value: '', label: 'All' },
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
        <div className="mx-40">
          <div className="row">
            <div className="col-lg-12 order-lg-2 order-1">
              <h2>Highlighted best-in-class search results</h2>
            </div>
            <div className="col-lg-12 order-lg-2 order-1">
              <div className="product-show-option">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="select-option">
                      <label className="btn btn-light">Filter</label>
                      <span style={{ minWidth: '150px' }}>
                        <Select
                          defaultValue={sortOption}
                          onChange={setSortOption}
                          options={sortOptions}
                        />
                      </span>

                      <label className="btn btn-light">Brands</label>
                      <span style={{ minWidth: '150px' }}>
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
                      Show {startIndex + 1}-{endIndex} of{' '}
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
                      className="col-lg-4 col-md-4 col-sm-6"
                    >
                      <div className="product-item">
                        <div
                          className="pi-pic flex h-36 justify-center"
                          onClick={() => navigate(`/products/${product.id}`)}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-36"
                          />
                          <div className="sale pp-sale">Sale</div>
                          <div className="icon">
                            <i className="icon_heart_alt"></i>
                          </div>
                        </div>
                        <div className="pi-text">
                          <a href={`/products/${product.id}`}>
                            <h5 className="!text-start">{product.name}</h5>
                            <p className="h-[150px] text-sm">
                              {product.description}
                            </p>
                          </a>
                          <div className="product-price">£{product.price}</div>
                          <div className="action flex w-full items-center justify-between gap-2">
                            <button
                              className="gradient-btn p-2 text-[12px] font-semibold"
                              onClick={() =>
                                addToCart(product.id.toString(), 1)
                              }
                            >
                              ADD TO CART
                            </button>
                            <button
                              className="gradient-btn p-2 text-[12px] font-semibold"
                              onClick={() => navigate(`/compare/${product.id}`)}
                            >
                              COMPARE
                            </button>
                            <button className="w-[440px] rounded-xl border-2 border-[#FE5639] bg-[#FE5639] p-2 text-[12px] font-semibold text-white outline-none">
                              ENQUIRE NOW
                            </button>
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
