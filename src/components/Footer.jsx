import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="dark-footer skin-dark-footer">
        <div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <ul className="footer-bottom-social pb-2">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>{" "}
                  &nbsp;| &nbsp;
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                   &nbsp;| &nbsp;
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>{" "}
                   &nbsp;| &nbsp;
                  <li>
                    <a href="#">Help Desk</a>
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

              <div className="col-lg-4 col-md-4" align="center"></div>
              <div className="col-lg-4 col-md-4" align="center">
                <p className="mb-0">
                  Designd By{" "}
                  <a href="https://www.a2zmadurai.com">Wecare Technologies</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
