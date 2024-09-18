const EnquirySection = () => {
  return (
    <section className="product-best-banner bg-[#f1f2f2]">
      <div className="container-fluid contact-form">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="mb-0">Book Your appointment today</h2>
              <p>Or Send your enquiry to us</p>
            </div>
          </div>
        </div>
        <div className="row leave-comment">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="row comment-form text-center">
              <div className="col-lg-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="!border !border-gray-400 bg-[#f1f2f2] !text-gray-400"
                />
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  placeholder="+974"
                  className="!border !border-gray-400 bg-[#f1f2f2] !text-gray-400"
                />
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="!border !border-gray-400 bg-[#f1f2f2] !text-gray-400"
                />
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="Enquiry"
                  className="!border !border-gray-400 bg-[#f1f2f2] !text-gray-400"
                />
                <button type="submit" className="site-btn w-[400px] rounded-xl">
                  Call Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
