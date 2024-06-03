const AccountMonthlyReport = () => {
  return (
    <div className="dashboard_container">
      <div className="dashboard_container_header">
        <div className="dashboard_fl_1">
          <h4>Current Month Report</h4>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Date</th>

              <th scope="col">Details</th>
              <th scope="col">Deposit</th>
              <th scope="col">Withdraw</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 </td>
              <td>04 July 2020</td>
              <td>Online Payment</td>
              <td>202500</td>
              <td></td>
              <td>202500</td>
            </tr>
            <tr>
              <td>2 </td>
              <td>04 July 2020</td>
              <td>Payment Withdrawl</td>
              <td></td>
              <td>500</td>
              <td>200000</td>
            </tr>
            <tr>
              <td>3 </td>
              <td>04 July 2020</td>
              <td>Profit</td>
              <td>1500</td>
              <td></td>
              <td>201500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountMonthlyReport;
