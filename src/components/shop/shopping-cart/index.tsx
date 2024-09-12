import Header from "../../common/header";
import Footer from "../../common/footer";
import FeedbackSection from "../../common/feedback-section";
import BreadCrumbSection from "../bread-crumb-section";
import { BreadCrumbItem } from "../../../types";
import CartSummarySection from "./cart-summary-section";

const ShoppingCart = () => {
  const breadCrumbItems: BreadCrumbItem[] = [
    {
      title: "Home",
      url: "/",
      icon: "fa fa-home",
    },
    {
      title: "Shop",
      url: "/products",
      icon: "fa fa-shopping-bag",
    },
    {
      title: "Cart",
      url: "/cart",
      icon: "fa fa-shopping-cart",
    },
  ];

  return (
    <>
      <Header />
      <BreadCrumbSection breadCrumbItems={breadCrumbItems} />
      <CartSummarySection />
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default ShoppingCart;
