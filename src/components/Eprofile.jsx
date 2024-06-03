const Eprofile = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
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
                  <label>Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Shaurya Preet"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value="preet77@gmail.com"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value="123 456 5847"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>City</label>
                  <input type="text" className="form-control" value="Madurai" />
                </div>

                <div className="form-group col-md-6">
                  <label>PAN Number</label>
                  <input type="text" className="form-control" value="" />
                </div>

                <div className="form-group col-md-6">
                  <br />
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

export default Eprofile;
