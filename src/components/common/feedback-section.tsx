import React from "react";

const FeedbackSection = () => {
  return (
    <div className="partner-logo mt-10">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center"></div>
          <div className="col-md-6 text-center">
            <div className="newslatter-item">
              <h5>Let us keep you Updated!</h5>

              <form action="#" className="subscribe-form">
                <input type="text" placeholder="Sign up with your Email" />
                <button type="button">Enter</button>
              </form>
              <p>
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
