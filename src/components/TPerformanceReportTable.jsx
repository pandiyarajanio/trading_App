const TPerformanceReportTable = () => {
  return (
    <div className="dashboard_container bg-white shadow-lg">
      <div className="dashboard_container_header">
        <div className="dashboard_fl_1">
          <h4>Performance Report</h4>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Date</th>

              <th scope="col">Net P/L %</th>
              <th scope="col">Net P/L Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01.04.2024 - 30.04.2024</td>
              <td>0.01%</td>
              <td>
                <span className="payment_status complete">1500</span>
              </td>
            </tr>

            <tr>
              <td>01.05.2024 - 31.05.2024</td>
              <td>0.01%</td>
              <td>
                <span className="payment_status pending">1500</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TPerformanceReportTable;
