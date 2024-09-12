import { categories } from "../../data/categories";
import { BreadCrumbItem } from "../../types";
import cn from "classnames";

type BreadCrumbSectionProps = {
  children?: React.ReactNode;
  breadCrumbItems: BreadCrumbItem[];
  style?: React.CSSProperties;
  className?: string;
};
const BreadCrumbSection = ({
  children,
  breadCrumbItems,
  style,
  className,
}: BreadCrumbSectionProps) => {
  return (
    <div className={cn("breacrumb-section", className)} style={style}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text">
              {breadCrumbItems.map((item, index) => {
                if (index < breadCrumbItems.length - 1) {
                  return (
                    <a href={item.url} key={index}>
                      <i className={item.icon}></i>
                      <span className="pl-2">{item.title}</span>
                    </a>
                  );
                } else {
                  return <span key={index}>{item.title}</span>;
                }
              })}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbSection;
