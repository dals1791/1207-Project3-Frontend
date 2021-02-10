import React from "react";

const Summary = (props) => {
  console.log("Summary props: ", props);

  return (
    <div style={{ border: "1px solid red" }}>
      <h1> Spend Summary </h1>
      <section>
        <h2>${props.budget[0].income}</h2>
        <h3>Income</h3>
      </section>

      <section>
        <h2>${props.totalSpent}</h2>
        <h3>Total Spent</h3>
      </section>

      <section>
        <h2>${props.budget[0].income - props.totalSpent}</h2>
        <h3>Remaining Balance</h3>
      </section>
    </div>
  );
};
export default Summary;
