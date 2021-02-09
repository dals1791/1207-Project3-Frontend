import React from "react";
import PieChart from "./PieChart";

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
      <div
        className="landing-component"
        style={{
          border: "1px solid red",
        }}
      >
        <h1> Spend Summary </h1>
        <h2> Starting Income ${user[0].budget[0].income}</h2>

        <section
          style={{
            border: "1px solid green",
            width: "300px",
            margin: "0 auto",
          }}
        >
          <h2>${totalSpent}</h2>
          <h3>Total Spent</h3>
        </section>

        <section
          style={{
            border: "1px solid green",
            width: "300px",
            margin: "0 auto",
          }}
        >
          <h2>${user[0].budget[0].income - totalSpent}</h2>
          <h3>Remaining Balance</h3>
        </section>

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
