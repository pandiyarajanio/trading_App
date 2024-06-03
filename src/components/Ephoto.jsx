const Ephoto = ({ userimg }) => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="dashboard_container">
          <div className="dashboard_container_header">
            <div className="dashboard_fl_1">
              <h4>Upload Photo</h4>
            </div>
          </div>
          <div className="dashboard_container_body p-4">
            {/* <!-- Basic info --> */}
            <div className="submit-section">
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label>Browse File</label>
                  <input type="file" id="myFile" name="filename" />
                </div>

                <div className="form-group col-md-3">
                  <img
                    src={userimg}
                    className="img-fluid avater ml-2"
                    alt=""
                    width="60%"
                  />{" "}
                </div>

                <div className="form-group col-md-6"></div>

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

export default Ephoto;
