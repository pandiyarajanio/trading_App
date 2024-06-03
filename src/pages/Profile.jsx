import { useState } from "react";

const Profile = () => {

  const [num , setnum] =useState(IC241000);


  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="dashboard_container">
            <div className="dashboard_container_header">
              <div className="dashboard_fl_1">
                <h4>My Profile</h4>
              </div>
            </div>
            <div className="dashboard_container_body p-4">
              {/* <!-- Basic info --> */}
              <div className="submit-section">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>
                      <strong> Account ID : </strong>
                    </label>{" "}
                    <label>{num}</label>
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong> Name : </strong>
                    </label>{" "}
                    <label>M.Jai Ganesh Kumar</label>
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong> Email : </strong>
                    </label>{" "}
                    <label>jaiganesh@gmail.com</label>
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong> Mobile / WhatsApp Number : </strong>
                    </label>{" "}
                    <label>+91 - 9876543210 </label>
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong> City : </strong>
                    </label>{" "}
                    <label>Madurai</label>
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong> PAN Number : </strong>
                    </label>{" "}
                    <label>1ZIUY6754</label>
                  </div>
                </div>
              </div>
              {/* <!-- Basic info --> */}
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 pl-0">
        <div className="dashboard_container">
          <div className="dashboard_container_header">
            <div className="dashboard_fl_1">
              <h4>Bank Details</h4>
            </div>
          </div>
          <div className="dashboard_container_body p-4">
            {/* <!-- Basic info --> */}
            <div className="submit-section">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>
                    <strong>Account Type : </strong>
                  </label>{" "}
                  <label>Savings Account</label>
                </div>

                <div className="form-group col-md-6">
                  <label>
                    <strong> Bank Name : </strong>
                  </label>{" "}
                  <label>ICICI</label>
                </div>

                <div className="form-group col-md-6">
                  <label>
                    <strong> Account Holder Name </strong>
                  </label>{" "}
                  <label>JM Solutions</label>
                </div>

                <div className="form-group col-md-6">
                  <label>
                    <strong> Account Number </strong>
                  </label>{" "}
                  <label>9129876543210 </label>
                </div>

                <div className="form-group col-md-6">
                  <label>
                    <strong> Branch : </strong>
                  </label>{" "}
                  <label>Madurai</label>
                </div>

                <div className="form-group col-md-6">
                  <label>
                    <strong> City : </strong>
                  </label>{" "}
                  <label>Madurai</label>
                </div>

                <div className="form-group col-md-6">
                  <label>
                    <strong> View : </strong>
                  </label>{" "}
                  <label>
                    <a href="#" target="_blank">
                      Proof
                    </a>
                  </label>
                </div>

                <div className="form-group col-md-6">
                  <label>
                    <strong> IFSC Code : </strong>
                  </label>{" "}
                  <label>ICIC0001</label>
                </div>
              </div>
            </div>
            {/* <!-- Basic info --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
