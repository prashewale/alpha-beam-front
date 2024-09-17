const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-left">
              <ul>
                <li>
                  Address: GFloor Al Qayed Holding Group , Bldg DRing Road, Near
                  Peninsula News Paper Support Center
                </li>
                <br />
                <li>
                  Office Hours:
                  <br />
                  Saturday Thursday (8:30am - 5:00pm)
                </li>
                <li>
                  <i className="fa fa-phone"></i> +974 4418 8446
                </li>
                <li>
                  <i className="fa fa-phone"></i> +974 4418 8447
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <h5>CUSTOMER SERVICE</h5>
              <ul>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>

                <li>
                  <a href="#">Shipping, Returns & Refunds.</a>
                </li>
                <li>
                  <a href="#">Order Support</a>
                </li>
                <li>
                  <a href="#">Warranty Information</a>
                </li>
              </ul>
              <div className="footer-social">
                <a href="#" style={{ marginRight: '5px' }}>
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" style={{ marginRight: '5px' }}>
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" style={{ marginRight: '5px' }}>
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-widget">
              <h5>COMPANY</h5>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>

                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>

                <li>
                  <a href="#">Career Opportunities</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <div className="copyright-reserved">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-text">
                Copyright &copy;
                <script
                  data-cfasync="false"
                  src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                ></script>
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
