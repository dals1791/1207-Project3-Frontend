import React from "react";
import Summary from "./Summary";

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
      let formatedDate = new Date(expense.time);
      console.log("Month: ", formatedDate.getMonth());
      console.log("Year: ", formatedDate.getYear());
      return (
        <div
          style={{
            border: "1px solid green",
          }}
          key={index}
        >
          <p>{expense.description}</p>
          <p>{expense.category}</p>
          <p>{formatedDate.toString()}</p>
          <p>
            {formatedDate.getMonth()} - {formatedDate.getDate()} -{" "}
            {formatedDate.getYear()}
          </p>
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
        <Summary
          transactions={transactions}
          budget={budget}
          totalSpent={totalSpent}
        />

        <h2> Your Transactions </h2>

        <section>
          <h2>Latest</h2>
          {expenseList}
        </section>

        <section>
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
