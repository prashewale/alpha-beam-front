const FeedbackSection = () => {
  return (
    <div className="partner-logo mt-10">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center"></div>
          <div className="col-md-6 text-center">
            <div className="newslatter-item">
              <h2 className="mb-4 !text-3xl font-bold text-white">
                Let us keep you Updated!
              </h2>

              <form action="#" className="subscribe-form">
                <input type="text" placeholder="Sign up with your Email" />
                <button type="button">Enter</button>
              </form>
              <p className="firstPara">
                Get product news and promotions based on your preferences and
                registered devices.
              </p>
              <p>Learn about email privacy.</p>
            </div>
          </div>
          <div className="col-md-3 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
