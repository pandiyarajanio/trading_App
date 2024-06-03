const AccountCards = ({ wid, Amount, AmountType }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className={`dashboard_stats_wrap widget-${wid}`}>
        <div className="dashboard_stats_wrap_content" align="center">
          <h4>{Amount}</h4> <span>{AmountType}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountCards;
