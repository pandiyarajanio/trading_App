import React from "react";
import { Link } from "react-router-dom";
const SideMenu = ({ userimg, page }) => {
  return (
    <>
      <div className="col-lg-3 col-md-3 p-0 hidden-xs ">
        <div className="dashboard-navbar">
          <div className="d-user-avater">
            <img src={userimg} className="img-fluid avater" alt="" />
            <h4>Adam Harshvardhan</h4>
            <h5 style={{ color: "#FFFFFF", fontSize: "15px" }}>Canada USA</h5>
          </div>

          <div className="d-navigation">
            <ul id="side-menu">
              <li className={page == "dashboard" ? "active" : ""}>
                <Link to="/dashboard">
                  <i className="ti-user"></i>Dashboard
                </Link>
              </li>
              <li className={page.includes("funds") ? "active dropdown" : ""}>
                <Link to="#">
                  <i className="ti-money"></i>Funds
                  <span className="ti-angle-left"></span>
                </Link>
                <ul className="nav nav-second-level">
                  <li
                    className={
                      page == "funds deposit" ? "active " : console.log(page)
                    }
                  >
                    <Link to="/funds/deposit">Deposit</Link>
                  </li>
                  <li className={page == "funds withdraw" ? "active " : ""}>
                    <Link to="/funds/withdraw">Withdrawal</Link>
                  </li>
                  <li className={page == "funds download" ? "active " : ""}>
                    <Link to="/funds/downloads">Downloads</Link>
                  </li>
                </ul>
              </li>
              <li className={page == "profile" ? "active " : ""}>
                <Link to="/profile">
                  <i className="ti-heart"></i> Profile
                </Link>
              </li>
              <li
                className={page.includes("settings") ? "active dropdown" : ""}
              >
                <Link to="#">
                  <i className="ti-layers"></i>Settings
                  <span className="ti-angle-left"></span>
                </Link>
                <ul className="nav nav-second-level">
                  <li className={page == "settings eprofile" ? "active " : ""}>
                    <Link to="/settings/eprofile">Edit Profile</Link>
                  </li>
                  <li className={page == "settings ephoto" ? "active " : ""}>
                    <Link to="/settings/ephoto">Edit Photo</Link>
                  </li>
                  <li className={page == "settings ebank" ? "active " : ""}>
                    <Link to="/settings/ebank">Edit Bank Details</Link>
                  </li>
                  <li className={page == "settings changepassword" ? "active " : ""}>
                    <Link to="/settings/changepassword">Change Password</Link>
                  </li>
                </ul>
              </li>

              <li  className={page.includes("reports") ? "active dropdown" : ""}>
                <Link to="#">
                  <i className="ti-download"></i>Reports
                  <span className="ti-angle-left"></span>
                </Link>
                <ul className="nav nav-second-level">
                  <li className={page == "reports accountssummary" ? "active " : ""}>
                    <Link to="/reports/accountssummary">Accounts Summary</Link>
                  </li>
                  <li className={page == "reports tradesummary" ? "active " : ""}>
                    <Link to="/reports/tradesummary">Trading Summary</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/#">
                  <i className="ti-power-off"></i>Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
