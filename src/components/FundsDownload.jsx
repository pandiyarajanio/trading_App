const FundsDownload = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="dashboard_container">
          <div className="dashboard_container_header">
            <div className="dashboard_fl_1">
              <h4>Transactions Summary</h4>
            </div>
          </div>
          <div className="dashboard_container_body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    {/* <!--<th scope="col">S.No</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">P/L</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Trade</th>
                                    <th scope="col">Tax</th>
                                    <th scope="col">Net P/L</th>
                                    <th scope="col">Net Amount</th>--> */}

                    <th scope="col">S.No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Mode</th>
                    <th scope="col">Details</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>04 Apriil 2024</td>
                    <td>Debit</td>
                    <td>Online - ID:1234D1212SSJJDD$$$</td>
                    <td>202500</td>
                    <td>
                      <div className="dash_action_link">
                        <a href="#" className="view">
                          Download
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

export default FundsDownload;
