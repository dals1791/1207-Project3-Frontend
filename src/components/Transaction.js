import React from "react";
import Summary from "./Summary";

const Transaction = (props) => {
  const { user } = props;

  const loaded = () => {
    /* ------------------------------------------------------
     CALCULATE THE TOTAL SPENDINGS
    ------------------------------------------------------ */
    let totalSpent = 0;
    const budget = user[0].budget; //for use as props also
    const transactions = user[0].transaction; // for use as props also

    //- Gran only the transactions that are isExpense: true
    const totalExpenses = user[0].transactions.filter((transaction) => {
      return transaction.isExpense === true;
    });

    console.log("Extracted expenses: ", totalExpenses);

    // Add up each expense transaction to the totalSpent
    totalExpenses.forEach((transaction) => {
      return (totalSpent = totalSpent + transaction.amount);
    });

    /* ------------------------------------------------------
     GET TRANSACTIONS - NON-BILLS - POSITIVE AND NEGATIVE TRANSACTIONS
    ------------------------------------------------------ */

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const nonRoutineExpense = user[0].transactions.filter((transaction) => {
      //return transaction.isRoutine === false && transaction.isExpense === true;
      return transaction.isRoutine === false;
    });

    const expenseList = nonRoutineExpense.map((expense, index) => {
      let formatedDate = new Date(expense.time);

      let transactionType = "";

      if (expense.isExpense === true) {
        transactionType = "Expense";
      } else {
        transactionType = "Deposite";
      }

      return (
        <div
          style={{
            border: "1px solid green",
          }}
          key={index}
        >
          <p>{expense.description}</p>
          <p>{expense.category}</p>
          <p>Transaction Type: {transactionType}</p>
          <p>
            {months[formatedDate.getMonth()]} / {formatedDate.getDate()} /
            {formatedDate.getFullYear()} - {formatedDate.toLocaleTimeString()}
          </p>
          <span>${expense.amount}</span>
        </div>
      );
    });

    console.log("User info in transactions: ", user[0].transactions);
    console.log("All non-routine expenses: ", nonRoutineExpense);

    /* ------------------------------------------------------
    GET TRANSACTIONS - BILLS - IS AN EXPENSE
  ------------------------------------------------------ */
    const routineExpense = user[0].transactions.filter((transaction) => {
      return transaction.isRoutine === true && transaction.isExpense === true;
    });

    const routineList = routineExpense.map((expense, index) => {
      let formatedDate = new Date(expense.time);

      return (
        <div
          style={{
            border: "1px solid green",
            marginBottom: "20px",
          }}
          key={index}
        >
          <p>{expense.description}</p>
          <p>{expense.category}</p>
          <p>
            {months[formatedDate.getMonth()]} / {formatedDate.getDate()} /
            {formatedDate.getFullYear()} - {formatedDate.toLocaleTimeString()}
          </p>
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
