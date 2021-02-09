import React from "react";
import PieChart from "./PieChart";
import Summary from "./Summary";

const Landing = (props) => {
  const { user } = props;

  const loaded = () => {
    // ============= Calculate total budget and total spendings... =============
    let totalSpent = 0;
    const transactions = user[0].transactions;
    const budget = user[0].budget;

    user[0].transactions.forEach((transaction) => {
      return (totalSpent = totalSpent + transaction.amount);
    });

    return (
      <div className="landing-component" style={{ border: "1px solid" }}>
        <h2> Starting Income ${user[0].budget[0].income}</h2>

        <Summary
          transactions={transactions}
          budget={budget}
          totalSpent={totalSpent}
        />

        <PieChart
          transactions={transactions}
          budget={budget}
          totalSpent={totalSpent}
        />
      </div>
    );
  };

  const loading = () => {
    return <h1>Page loading...</h1>;
  };
  return user ? loaded() : loading();
};

export default Landing;
