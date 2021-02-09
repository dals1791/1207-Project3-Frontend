import React from "react";

const Transaction = (props) => {
  const { user } = props;

  const loaded = () => {
    console.log("User info in transactions: ", user[0].transactions);

    // ============= Calculate total budget and total spendings... =============
    let totalSpent = 0;
    const transactions = user[0].transactions;
    const budget = user[0].budget;

    user[0].transactions.forEach((transaction) => {
      return (totalSpent = totalSpent + transaction.amount);
    });

    /*
          <div>
            <p>Pay back for coffee from Joe</p>
            <p>Gift</p>
            <span>$35.94</span>
          </div>
    */

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

          <div>
            <p>Pay back for coffee from Joe</p>
            <p>Gift</p>
            <span>$35.94</span>
          </div>

          <div>
            <p>Delicious sushi</p>
            <p>Food</p>
            <span>$24.99</span>
          </div>

          <div>
            <p>Gratituity for Kenny's advice</p>
            <p>Other</p>
            <span>$56</span>
          </div>
        </section>

        <section
          style={{
            border: "1px solid green",
            margin: "10px",
          }}
        >
          <h2>Bills</h2>

          <div>
            <p>Subscription for Alex's video tutorials</p>
            <p>Subscriptions</p>
            <span>$24.99</span>
          </div>

          <div>
            <p>Rent Due for Mrs. Moris</p>
            <p>Rent</p>
            <span>$1350</span>
          </div>
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
