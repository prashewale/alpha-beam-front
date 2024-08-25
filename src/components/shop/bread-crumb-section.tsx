import { categories } from "../../data/categories";

type BreadCrumbSectionProps = {
  category: string;
};
const BreadCrumbSection = ({ category }: BreadCrumbSectionProps) => {
  const categoryInfo = categories.find(
    (x) => x.value.toLowerCase() === category.toLowerCase()
  );

  if (!categoryInfo) return null;

  return (
    <div className="breacrumb-section breacrumb-section-product ">
      <div className="container bk-black">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text">
              <a href="#">
                <i className="fa fa-home"></i> Home{" "}
              </a>
              <span>Shop</span>
            </div>
            <div className="content">
              <h2>{categoryInfo.name}</h2>
              <p>{categoryInfo.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbSection;
