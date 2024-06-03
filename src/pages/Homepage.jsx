import { useState } from "react";
import Signin from "../components/Signin.jsx";
import Signup from "../components/Signup.jsx";
// HOMEPAGE COMPONENT INDEX.HTML
const Homepage = ({ banner }) => {
  const [islogin, setIslogin] = useState(false);
  const loginHandler = () => {
    setIslogin(!islogin);
  };
  {
    /*  THIS PRELOAADER I HIDDEN DUE TO THE CUSTOM JS FAILED FUNCTION
  <div id="preloader">
    <div className="preloader">
      <span></span>
      <span></span>
    </div> 
  </div>
    */
  }
  return (
    <>
      <div id="main-wrapper">
        <div
          className="alert alert_top alert-dismissible fade show"
          role="alert"
        >
          <div className="container">
            <div className="alert_caption">
              <div className="alert_rate">
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star"></i>{" "}
              </div>
              <p>
                Welcome To Stockz Buddy <strong>Investor Portal &nbsp;</strong>{" "}
                &nbsp;
              </p>
              <div className="alert_rate">
                <i className="fas fa-star"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
              </div>
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>{" "}
            </button>
          </div>
        </div>
        <div className="clearfix"></div>

        <div
          className="image-cover half_banner"
          style={{
            background: `#0b2248 url(${banner}) no-repeat`,
          }}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="banner-search-2">
                  <h1 className="cl_2 f_2 mb-0">
                    Start Earning <br />
                    <span className="theme-cl">Daily</span>
                  </h1>
                  <p>
                    Study any topic, anytime. Choose from thousands of
                    expert-led courses now.
                  </p>

                  <div className="form-group">
                    <p className="d-inline-block mr-3">
                      { !islogin ?'Already Have Account ?':"Don't Have an Account ?"}
                    </p>
                    <button
                      className="btn btn-secondary"
                      onClick={loginHandler}
                    >
                      {!islogin?'Login':'SignUp'}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-5 col-lg-5 p-3 rounded"
                style={{ background: "white" }}
              >
                {!islogin ? <Signup /> : <Signin />}
              </div>
            </div>
          </div>
        </div>

        <footer className="dark-footer skin-dark-footer">
          <div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12 col-md-12 text-center">
                  <ul
                    className="footer-bottom-social"
                    style={{ paddingBottom: "20px" }}
                  >
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>{" "}
                    &nbsp;| &nbsp;
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>{" "}
                    &nbsp;| &nbsp;
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>{" "}
                    &nbsp;| &nbsp;
                    <li>
                      <a href="contactus.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-4">
                  <p className="mb-0">
                    © 2022 StockzBuddy.com All rights reserved.{" "}
                  </p>
                </div>

                <div className="col-lg-4 col-md-4" align="center">
                  <p className="mb-0">
                    Designd By{" "}
                    <a href="https://www.a2zmadurai.com">Wecare Technologies</a>
                    .
                  </p>
                </div>

                <div className="col-lg-4 col-md-4 text-right">
                  <ul className="footer-bottom-social">
                    <li>
                      <a
                        href="https://www.facebook.com/StockzBuddy-102505609225254"
                        target="_blank"
                      >
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/StockzBuddy" target="_blank">
                        <i className="ti-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/stockzbuddy/"
                        target="_blank"
                      >
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/StockzBuddy/"
                        target="_blank"
                      >
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCtAXiAv5wPGx8vIIugOhvaA"
                        target="_blank"
                      >
                        <i className="ti-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </>
  );
};

export default Homepage;
