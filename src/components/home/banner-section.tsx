const BannerSection = () => {
  const categoriesInfo = [
    {
      title: 'BOAT FLEET MANAGEMENT',
      url: '/products',
      icon: '/img/icon/icon-1.png',
    },
    {
      title: 'BOAT FLEET MANAGEMENT',
      url: '/products',
      icon: '/img/icon/icon-1.png',
    },
    {
      title: 'BOAT FLEET MANAGEMENT',
      url: '/products',
      icon: '/img/icon/icon-1.png',
    },
    {
      title: 'BOAT FLEET MANAGEMENT',
      url: '/products',
      icon: '/img/icon/icon-1.png',
    },
    {
      title: 'BOAT FLEET MANAGEMENT',
      url: '/products',
      icon: '/img/icon/icon-1.png',
    },
  ];
  return (
    <div className="banner-section spad">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-1.png" />
            </div>
            <div className="inner-text icon-color text-center">
              <h4>
                BOAT FLEET <br />
                MANAGEMENT
              </h4>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-2.png" />
              <div className="inner-text">
                <h4>
                  SERVICES <br />
                  ASSISTANCE
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-3.png" />
              <div className="inner-text">
                <h4>
                  COMMANDO <br />
                  RADARS
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-4.png" />
              <div className="inner-text">
                <h4>
                  SATELLITE <br />
                  PRODUCTS
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-5.png" />
              <div className="inner-text">
                <h4>
                  BEST <br />
                  BRANDS
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-banner">
              <img src="/img/icon/icon-6.png" />
              <div className="inner-text">
                <h4>
                  TRUSTED <br />
                  PRODUCTS
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
