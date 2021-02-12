import React from "react";
import PieChart from "./PieChart";
import Summary from "./Summary";

const Landing = (props) => {
  const { user } = props;

  const loaded = () => {
    // ============= Calculate total remaining and total spent... =============
    let totalSpent = 0;
    //Make an array to hold the user transactions
    const transactions = user[0].transactions;
    //Make a variable to hold the user's income/budget
    const budget = user[0].budget;

    //Grab only the transactions that are isExpense: true
    const totalExpenses = user[0].transactions.filter((transaction) => {
      return transaction.isExpense === true;
    });

    // Add up each expense transaction to the totalSpent
    totalExpenses.forEach((transaction) => {
      return (totalSpent = totalSpent + transaction.amount);
    });

    return (
      <div className="landing-component">
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
