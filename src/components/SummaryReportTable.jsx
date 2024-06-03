const SummaryReportTable = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="dashboard_container">
          <div className="dashboard_container_header">
            <div className="dashboard_fl_1">
              <h4>Performance Summary</h4>
            </div>
          </div>
          <div className="dashboard_container_body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Date</th>

                    <th scope="col">Investment Amount</th>
                    <th scope="col"> Returns % </th>
                    <th scope="col"> Return Amount </th>

                    <th scope="col"> Profit Amount </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01.04.2024 - 30.04.2024</td>
                    <td>100000</td>
                    <td>
                      <span className="payment_status complete">0.1%</span>{" "}
                    </td>
                    <td>1000 </td>
                    <td>101000 </td>
                  </tr>

                  <tr>
                    <td>01.05.2024 - 30.05.2024</td>
                    <td>50000</td>
                    <td>
                      <span className="payment_status complete">0.1%</span>{" "}
                    </td>
                    <td>500 </td>
                    <td>50500 </td>
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

export default SummaryReportTable;
