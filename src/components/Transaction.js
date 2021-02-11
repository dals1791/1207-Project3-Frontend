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
    const transactions = user[0].transactions; // for use as props also

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
      let spanColor = "white";

      if (expense.isExpense === true) {
        transactionType = "Expense";
        spanColor = "#ffb0b0";
      } else {
        transactionType = "Deposite";
        spanColor = "#5dca00";
      }

      return (
        <div className="transact-card" key={index}>
          <div>
            <p className="transact-descr">{expense.description}</p>
            <p className="trnact-light-font">{expense.category}</p>

            <p className="trnact-light-font">
              Transaction Type: {transactionType}
            </p>

            <p className="trnact-light-font">
              {months[formatedDate.getMonth()]} / {formatedDate.getDate()} /
              {formatedDate.getFullYear()} - {formatedDate.toLocaleTimeString()}
            </p>
          </div>

          <span style={{ color: spanColor }}>${expense.amount}</span>
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
        <div className="transact-card" key={index}>
          <div>
            <p className="transact-descr">{expense.description}</p>
            <p className="trnact-light-font">{expense.category}</p>
            <p className="trnact-light-font">
              {months[formatedDate.getMonth()]} / {formatedDate.getDate()} /
              {formatedDate.getFullYear()} - {formatedDate.toLocaleTimeString()}
            </p>
          </div>

          <span>${expense.amount}</span>
        </div>
      );
    });
    console.log("All routine expenses: ", routineExpense);

    return (
      <div className="transaction-component">
        <Summary
          transactions={transactions}
          budget={budget}
          totalSpent={totalSpent}
          depositeSum={depositeSum}
        />
        <div className="transact-headline">
          <h2> Your Transactions </h2>
        </div>

        <div className="all-transactions">
          <section>
            <h2>Latest</h2>
            {expenseList}
          </section>

          <section>
            <h2>Bills</h2>
            {routineList}
          </section>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Page loading...</h1>;
  };

  return user ? loaded() : loading();
};
export default Transaction;
