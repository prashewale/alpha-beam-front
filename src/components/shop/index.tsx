import React from "react";
import Header from "../common/header";
import FeedbackSection from "../common/feedback-section";
import Footer from "../common/footer";
import BreadCrumbSection from "./bread-crumb-section";
import ProductShop from "./product-shop";
import Pagination from "./pagination";

const Shop = () => {
  return (
    <>
      <Header />
      <BreadCrumbSection />
      <ProductShop />
      <Pagination />
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Shop;
