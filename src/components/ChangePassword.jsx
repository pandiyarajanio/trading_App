const ChangePassword = () => {
  return (
    // NOTE ADD ONCHANGE FOR THE INPUT TAGS
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="dashboard_container">
          <div className="dashboard_container_header">
            <div className="dashboard_fl_1">
              <h4>Change Password</h4>
            </div>
          </div>
          <div className="dashboard_container_body p-4">
            {/* <!-- Basic info --> */}
            <div className="submit-section">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>New Password</label>
                  <input type="text" className="form-control" value="" />
                </div>

                <div className="form-group col-md-6">
                  <label>Re-Type New Password</label>
                  <input type="email" className="form-control" value="" />
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

export default ChangePassword;
