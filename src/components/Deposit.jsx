const Deposit = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="dashboard_container">
          <div className="dashboard_container_header">
            <div className="dashboard_fl_1">
              <h4>Offline Payment</h4>
            </div>
          </div>
          <div className="dashboard_container_body p-4">
            {/* <!-- Basic info --> */}

            {/* CHANGE THE NULL TO THE HANDLER FUNCTION USING USE STATE  */}

            <div className="submit-section">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Mode of Payment</label>
                  <select id="Mode" className="form-control">
                    <option onChange={null} value="1">
                      Select Any One
                    </option>
                    <option onChange={null} value="2">
                      Bank Deposit
                    </option>
                    <option onChange={null} value="3">
                      Online Payment
                    </option>
                    <option onChange={null} value="4">
                      UPI Payment
                    </option>
                    <option onChange={null} value="5">
                      DD
                    </option>
                    <option onChange={null} value="6">
                      Cheque
                    </option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  <label>UPI Mobile Number / UPI ID</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={null}
                    value=""
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>Account Holder Name</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={null}
                    value=""
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>Type of Account</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={null}
                    value=""
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>Bank Name</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={null}
                    value=""
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>Account Number</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={null}
                    value=""
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>Branch Name</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={null}
                    value=""
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>IFSC Number</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={null}
                    value=""
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>City</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={null}
                    value=""
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>Amount</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={null}
                    value=""
                  />
                </div>

                <div className="form-group col-md-6">
                  <br /> <label>Upload Receipt</label>
                  <br />
                  <input type="file" id="myFile" name="filename" />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                  <button className="btn btn-theme" type="submit">
                    Save Changes
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

export default Deposit;
