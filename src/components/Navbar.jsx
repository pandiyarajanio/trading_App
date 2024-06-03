import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
const Navbar = ({ navlogo }) => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  return (
    <>
      <div className="header header-light head-shadow">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <Link className="nav-brand" to="/">
                <img src={navlogo} className="logo" alt="" />
              </Link>
              <div className="nav-toggle"></div>
            </div>
            <div className="nav-menus-wrapper">
              {/* above element style="transition-property: none;" */}
              <ul className="nav-menu">
                <li className={url == "/dashboard" ? "active" : ""}>
                  <Link to="/dashboard">Dashboard </Link>
                </li>
                <li className={url.includes("funds") ? "active" : ""}>
                  <Link to="#">
                    Funds<span className="submenu-indicator"></span>
                  </Link>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <Link to="/funds/deposit">Deposit</Link>
                    </li>
                    <li>
                      <Link to="/funds/withdraw">Withdrawal</Link>
                    </li>
                    <li>
                      <Link to="/funds/downloads">Downloads</Link>
                    </li>
                  </ul>
                </li>
                <li className={url == "/profile" ? "active" : ""}>
                  <Link to="/profile"> Profile</Link>
                </li>

                <li className={url.includes("settings") ? "active" : ""}>
                  <Link to="#">
                    Settings<span className="submenu-indicator"></span>
                  </Link>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <Link to="/settings/eprofile">Edit Profile</Link>
                    </li>
                    <li>
                      <Link to="/settings/ephoto">Edit Photo</Link>
                    </li>
                    <li>
                      <Link to="/settings/ebank">Edit Bank Details</Link>
                    </li>
                    <li>
                      <Link to="/settings/changepassword">Change Password</Link>
                    </li>
                  </ul>
                </li>
                <li className={url.includes("reports") ? "active" : ""}>
                  <Link to="#">
                    Reports<span className="submenu-indicator"></span>
                  </Link>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <Link to="/reports/accountssummary">
                        Accounts Summary
                      </Link>
                    </li>
                    <li>
                      <Link to="/reports/tradesummary">Trading Summary</Link>
                    </li>
                  </ul>
                </li>

                <li className="active">
                  <Link to="/" data-toggle="modal" data-target="#login">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- End Navigation --> */}
      <div className="clearfix"></div>
    </>
  );
};

export default Navbar;
