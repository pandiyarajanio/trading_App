const Withdraw = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="dashboard_container">
          <div className="dashboard_container_header">
            <div className="dashboard_fl_1">
              <h4>Withdrawal Report</h4>
            </div>
          </div>
          <div className="dashboard_container_body p-4">
            {/* <!-- Basic info --> */}
            <div className="submit-section">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Available Amount</label>
                  <input type="text" className="form-control" value="250000" />
                </div>

                <div className="form-group col-md-6">
                  <label>Withdrawal Amount</label>
                  <input type="email" className="form-control" value="50000" />
                </div>

                <div className="form-group col-md-12" align="center">
                  <span className="payment_status inprogress">
                    {" "}
                    <label>
                      Due to insufficient balance (Below Rs:200000) ,your
                      account not eligible for next day trading{" "}
                    </label>
                  </span>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                  <button className="btn btn-theme" type="submit">
                    Request Amount{" "}
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

export default Withdraw;
