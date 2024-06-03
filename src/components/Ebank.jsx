const Ebank = () => {
  return (
    <div className="row">
      <div className="col-lg-12col-md-12 col-sm-12 mb-3" align="center">
        <span className="payment_status inprogress">
          {" "}
          <label>After Admin Approval Your Account Will Be Activated </label>
        </span>{" "}
        <br />
        <span className="payment_status complete">
          {" "}
          <label>Your New Bank Details Updated </label>
        </span>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12">
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
                  <label>Account Type</label>
                  <select id="Mode" className="form-control">
                    <option value="1">Select Any One</option>
                    <option value="2">Current Account</option>
                    <option value="3">Saving Account</option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  <label>Account Holder Name</label>
                  <input type="email" className="form-control" value="" />
                </div>

                <div className="form-group col-md-6">
                  <label>Bank Name</label>
                  <input type="text" className="form-control" value="" />
                </div>

                <div className="form-group col-md-6">
                  <label>Account Number</label>
                  <input type="text" className="form-control" value="" />
                </div>

                <div className="form-group col-md-6">
                  <label>Branch</label>
                  <input type="text" className="form-control" value="" />
                </div>

                <div className="form-group col-md-6">
                  <label>City</label>
                  <input type="text" className="form-control" value="" />
                </div>

                <div className="form-group col-md-6">
                  <label>IFSC Code</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Montquebe"
                  />
                </div>

                <div className="form-group col-md-6">
                  <br /> <label>Upload Cheque Leaf / Paasbook Front Page</label>
                  <br />
                  <input type="file" id="myFile" name="filename" />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                  <button className="btn btn-theme" type="submit">
                    Save{" "}
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Basic info --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebank;
