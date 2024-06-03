import AccountCards from "./AccountCards";
const Accounts = () => {
  const Accounts = [
    {
      // CAN USE THE STRING INSTEAD OF NUMBER TYPES
      id: 1,
      Amt: "200000",
      Amttype: "Investment Amount",
    },
    {
      id: 2,
      Amt: "0.01 %",
      Amttype: "Overall Returns",
    },
    {
      id: 3,
      Amt: "4012",
      Amttype: "Return Amount",
    },
    {
      id: 4,
      Amt: "204012",
      Amttype: "Current Amount",
    },
  ];

  return (
    <div className="row">
      {Accounts.map((Account, index) => {
        return (
          <AccountCards
            key={index}
            wid={Account.id}
            Amount={Account.Amt}
            AmountType={Account.Amttype}
          />
        );
      })}
    </div>
  );
};

export default Accounts;
