import React from "react";

const CategoryBannerSection = () => {
  return (
    <div className="banner-section spad">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-1.png" />
            </div>
            <div className="inner-text text-center icon-color">
              <h4>BOAT FLEET MANAGEMENT</h4>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-2.png" />
              <div className="inner-text">
                <h4>SERVICES ASSISTANCE</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-3.png" />
              <div className="inner-text">
                <h4>COMMANDO RADARS</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-4.png" />
              <div className="inner-text">
                <h4>SATELLITE</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-5.png" />
              <div className="inner-text">
                <h4>BEST BRANDS</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-6.png" />
              <div className="inner-text">
                <h4>TRUSTED PRODUCTS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBannerSection;
