import Header from "../common/header";
import FeedbackSection from "../common/feedback-section";
import Footer from "../common/footer";
import BreadCrumbSection from "./bread-crumb-section";
import ProductShop from "./product-shop";
import { useSearchParams } from "react-router-dom";
import { categories } from "../../data/categories";
import { BreadCrumbItem } from "../../types";

const Shop = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const categoryInfo = categories.find(
    (x) => x.value.toLowerCase() === category?.toLowerCase()
  );

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
  ];

  let breadCrumbStyles = {};

  if (categoryInfo) {
    breadCrumbItems.push({
      title: categoryInfo.name,
      url: `/products?category=${categoryInfo.value}`,
    });

    breadCrumbStyles = {
      backgroundImage:
        categoryInfo.backgroundImage &&
        `url("${categoryInfo.backgroundImage}")`,
      backgroundSize: "cover",
      height: "250px",
      backgroundPosition: "center",
      color: "white",
    };
  }

  return (
    <>
      <Header />
      <BreadCrumbSection
        breadCrumbItems={breadCrumbItems}
        style={breadCrumbStyles}
      >
        {categoryInfo && (
          <div className="content">
            <h2>{categoryInfo.name}</h2>
            <p>{categoryInfo.description}</p>
          </div>
        )}
      </BreadCrumbSection>
      <ProductShop category={category} />
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Shop;
