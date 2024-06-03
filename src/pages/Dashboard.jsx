// using The NAV OUTLET LAYOUT:)
import SideMenu from "../components/SideMenu.jsx";
import Footer from "../components/Footer.jsx";
import Accounts from "../components/Accounts.jsx";
import SummaryReportTable from "../components/SummaryReportTable.jsx";
import Profile from "../pages/Profile.jsx";
import Deposit from "../components/Deposit.jsx";
import Withdraw from "../components/Withdraw.jsx";
import FundsDownload from "../components/FundsDownload.jsx";
import SearchReportTable from "../components/SearchReportTable.jsx";
import TPerformanceReportTable from "../components/TPerformanceReportTable.jsx";
import AccountMonthlyReport from "../components/AccountMonthlyReport.jsx";
import ChangePassword from "../components/ChangePassword.jsx";
import Ebank from "../components/Ebank.jsx";
import Eprofile from "../components/Eprofile.jsx";
import Ephoto from "../components/Ephoto.jsx";
// import { useEffect, useState } from "react";
// import axios from 'axios';


const Dashboard = ({ userimg, page }) => {
  
  return (
    <>
      <div id="main-wrapper">
        {/* <!-- ============================================================== -->
        <!-- Top header  -->
        <!-- ============================================================== -->
        <!-- Start Navigation --> */}
        {/* <!-- ============================================================== -->
        <!-- Top header  -->
        <!-- ============================================================== -->		

        
        <!-- ============================ Dashboard: Dashboard Start ================================== --> */}
        <section className="gray pt-0 pb-1">
          <div className="container-fluid">
            <div className="row">
              <SideMenu userimg={userimg} page={page} />
              {/* DASHBOARD */}
              <div className="col-lg-9 col-md-9 col-sm-12">
                {/* <!-- Row --> */}
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                    <nav aria-label="breadcrumb" className="mb-5">
                      <ul className="breadcrumb d-flex justify-content-between align-items-center ">
                        <span className="d-flex w-100">
                          <li className="breadcrumb-item">
                            <a href="#">Welcome</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                           {Name}
                          </li>
                        </span>
                        <li className="w-100 d-block">
                          <span className="d-user-avater m-0 d-flex justify-content-end align-items-center">
                            <img
                              src={userimg}
                              className="img-fluid avater "
                              alt=""
                              width="85px"
                            />
                          </span>
                        </li>
                      </ul>
                    </nav>

                    {page == "dashboard" ? (
                      <>
                        <Accounts />
                        <SummaryReportTable />
                      </>
                    ) : (
                      console.log("Something missing or wrong")
                    )}

                    {/* FUNDS */}
                    {/* DEPOSIT */}
                    {page == "funds deposit" ? (
                      <Deposit />
                    ) : (
                      console.log("Route Problems with Page Props", page)
                    )}

                    {/* WITHDRAW FUNDS */}
                    {page == "funds withdraw" ? (
                      <Withdraw />
                    ) : (
                      console.log("Route Problems with Page Props")
                    )}
                    {/* FDOWNLOAD */}
                    {page == "funds download" ? (
                      <FundsDownload />
                    ) : (
                      console.log("Route Problems with Page Props")
                    )}

                    {/* PROFILE */}
                    {page == "profile" ? (
                      <Profile />
                    ) : (
                      console.log("Route Problems with Page Props")
                    )}

                    {/* SETTINGS */}
                    {page == "settings ephoto" ? (
                      <Ephoto userimg={userimg} />
                    ) : (
                      console.log("Route Problems with Page Props")
                    )}

                    {page == "settings eprofile" ? (
                      <Eprofile />
                    ) : (
                      console.log("Route Problems with Page Props")
                    )}

                    {page == "settings ebank" ? (
                      <Ebank />
                    ) : (
                      console.log("Route Problems with Page Props")
                    )}

                    {page == "settings changepassword" ? (
                      <ChangePassword />
                    ) : (
                      console.log("Route Problems with Page Props")
                    )}

                    {/* REPORTS */}
                    {page == "reports tradesummary" ? (
                      <>
                        <Accounts />
                        <SearchReportTable />
                        <TPerformanceReportTable />
                      </>
                    ) : (
                      console.log("Route Problems with Page Props", "from TSM")
                    )}

                    {page == "reports accountssummary" ? (
                      <>
                        <Accounts />
                        <SearchReportTable />
                        <AccountMonthlyReport />
                      </>
                    ) : (
                      console.log("Route Problems with Page Props", "from ASM")
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ============================ Dashboard: Dashboard End ================================== --> */}

        {/* <!-- ============================ Footer Start ================================== --> */}
        <Footer />
        {/* <!-- ============================ Footer End ================================== --> */}

        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default Dashboard;
