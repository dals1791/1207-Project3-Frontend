import React from "react";
import PieChart from "./PieChart";
import Summary from "./Summary";

const Landing = (props) => {
  const { user } = props;

  const loaded = () => {
    // ============= Calculate total remaining and total spent... =============
    let totalSpent = 0;
    //Make an array to hold the user transactions
    const transactions = user.transactions;
    //Make a variable to hold the user's income/budget
    const budget = user.budget;

    //Grab only the transactions that are isExpense: true
    const totalExpenses = user.transactions.filter((transaction) => {
      return transaction.isExpense === true;
    });

    // Add up each expense transaction to the totalSpent
    totalExpenses.forEach((transaction) => {
      return (totalSpent = totalSpent + transaction.amount);
    });

    /* ------------------------------------------------------
  - CALCULATE DEPOSITES AND ADD TO INCOME
  ------------------------------------------------------ */
    //Grab all transaction objects that has isExpense false
    const totalDeposite = transactions.filter((transaction) => {
      return transaction.isExpense === false;
    });

    // Sum up the amount from the transaction objects
    let depositeSum = 0;
    totalDeposite.forEach((deposite) => {
      return (depositeSum += deposite.amount);
    });
    console.log("Total deposites: ", totalDeposite);
    console.log("Total deposite amount: ", depositeSum);

    /* ------------------------------------------------------
  - RETURNING THE COMPONENT
  ------------------------------------------------------ */
    return (
      <div className="landing-component">
        <Summary
          transactions={transactions}
          budget={budget}
          totalSpent={totalSpent}
          depositeSum={depositeSum}
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
