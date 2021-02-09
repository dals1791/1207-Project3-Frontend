import React from "react";
import PieChart from "./PieChart";

const Landing = () => {
  const url = "http://localhost:4000/users";

  // ----------------------- Defines STATES -----------------------
  const [user, setUser] = React.useState(null);

  // ============= USEEFFECT FUNCTION TO GET DATA =============

  const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
  };

  // fetch dogs when page loads
  React.useEffect(() => {
    getUser();
  }, []);

  const loaded = () => {
    // ============= Calculate total budget and total spendings... =============
    // const balance = 0;
    // const sum = 0;

    // const totalSpent = user.transactions.forEach((transaction) => {
    //   return sum + transaction.amount;
    // });

    // console.log("Total Spent: ", totalSpent);

    console.log("User state: ", user);
    console.log("transactions : ", user[0].transactions);
    console.log("Budget : ", user[0].budget);

    return (
      <div
        className="landing-component"
        style={{
          border: "1px solid red",
        }}
      >
        <h1> Spend Summary </h1>
        <h2> Budget ${user[0].budget[0].income}</h2>

        <section>
          <h2>$2400</h2>
          <h3>Total Spent</h3>
          <h2>$1000</h2>
          <h3>Remaining</h3>
        </section>

        <PieChart />

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
