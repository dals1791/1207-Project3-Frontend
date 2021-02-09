import React from "react";

const Transaction = (props) => {
  const { user } = props;

  const loaded = () => {
    /* ------------------------------------------------------
     CALCULATE THE TOTAL SPENDINGS
    ------------------------------------------------------ */
    let totalSpent = 0;
    const transactions = user[0].transactions;
    const budget = user[0].budget;

    user[0].transactions.forEach((transaction) => {
      return (totalSpent = totalSpent + transaction.amount);
    });

    /* ------------------------------------------------------
     GET TRANSACTIONS FROM LATEST TO OLDEST - NON-BILLS - EXPENSE TRUE
    ------------------------------------------------------ */

    const nonRoutineExpense = user[0].transactions.filter((transaction) => {
      return transaction.isRoutine === false && transaction.isExpense === true;
    });

    const expenseList = nonRoutineExpense.map((expense, index) => {
      let formatedDate = new Date(expense.time).toString();
      console.log("new date: ", formatedDate);

      return (
        <div
          style={{
            border: "1px solid green",
          }}
          key={index}
        >
          <p>{expense.description}</p>
          <p>{expense.category}</p>
          <p>{formatedDate}</p>
          <span>${expense.amount}</span>
        </div>
      );
    });

    console.log("User info in transactions: ", user[0].transactions);
    console.log("All non-routine expenses: ", nonRoutineExpense);

    /* ------------------------------------------------------
    GET TRANSACTIONS FROM LATEST TO OLDEST - BILLS - EXPENSE TRUE
  ------------------------------------------------------ */
    const routineExpense = user[0].transactions.filter((transaction) => {
      return transaction.isRoutine === true && transaction.isExpense === true;
    });

    const routineList = routineExpense.map((expense, index) => {
      let formatedDate = new Date(expense.time).toString();
      console.log("new date: ", formatedDate);

      return (
        <div
          style={{
            border: "1px solid green",
          }}
          key={index}
        >
          <p>{expense.description}</p>
          <p>{expense.category}</p>
          <p>{formatedDate}</p>
          <span>${expense.amount}</span>
        </div>
      );
    });
    console.log("All routine expenses: ", routineExpense);

    return (
      <div
        className="transaction-component"
        style={{
          border: "2px solid blue",
          padding: "10px",
        }}
      >
        <h1> Budget for Month </h1>

        <section>
          <h2>${totalSpent}</h2>
          <h3>Total Expenses</h3>
          <h2>${user[0].budget[0].income - totalSpent}</h2>
          <h3>Total Balance</h3>
        </section>

        <h2> Your Transactions </h2>

        <section
          style={{
            border: "1px solid green",
            margin: "10px",
          }}
        >
          <h2>Latest</h2>
          {expenseList}
        </section>

        <section
          style={{
            border: "1px solid green",
            margin: "10px",
          }}
        >
          <h2>Bills</h2>
          {routineList}
        </section>
      </div>
    );
  };

  const loading = () => {
    return <h1>Page loading...</h1>;
  };

  return user ? loaded() : loading();
};
export default Transaction;
