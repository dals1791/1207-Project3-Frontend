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

        <PieChart transactions={transactions} budget={budget} />

        <section>
          <div
            style={{
              border: "1px solid",
              background: "#ebc251",
              width: "100px",
              height: "50px",
            }}
          ></div>
          <p>Groceries</p>
          <div
            style={{
              border: "1px solid",
              background: "#6c59bf",
              width: "100px",
              height: "50px",
            }}
          ></div>
          <p>Gas</p>
          <div
            style={{
              border: "1px solid",
              background: "#f2933a",
              width: "100px",
              height: "50px",
            }}
          ></div>
          <p>Food</p>
          <div
            style={{
              border: "1px solid",
              background: "#0477b5",
              width: "100px",
              height: "50px",
            }}
          ></div>
          <p>Bills</p>
          <div
            style={{
              border: "1px solid",
              background: "#c62d2d",
              width: "100px",
              height: "50px",
            }}
          ></div>
          <p>Pet Stuff</p>
          <div
            style={{
              border: "1px solid",
              background: "#2dc66b",
              width: "100px",
              height: "50px",
            }}
          ></div>
          <p>Remaining</p>
        </section>
      </div>
    );
  };

  const loading = () => {
    return <h1>Page loading...</h1>;
  };
  return user ? loaded() : loading();
};

export default Landing;
