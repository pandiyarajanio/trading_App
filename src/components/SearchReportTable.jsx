const SearchReportTable = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="dashboard_container">
          <div className="dashboard_container_header">
            <div className="dashboard_fl_1">
              <h4>Search Reports</h4>
            </div>
          </div>
          <div className="dashboard_container_body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">From Date</th>

                    <th scope="col">To Date</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="dash_action_link">
                        <a href="#" className="view">
                          Search & Download Report
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchReportTable;
