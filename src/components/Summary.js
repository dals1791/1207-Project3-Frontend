import React from "react";

const Summary = (props) => {
  console.log("Summary props: ", props);

  return (
    <div className="spend-summary">
      <h1> Spend Summary </h1>

      <div>
        <section className="spendSum-total">
          <h2>${props.totalSpent}</h2>
          <h3>Total Spent</h3>
        </section>

        <section className="spendSum-remain">
          <h2>${props.budget[0].income - props.totalSpent}</h2>
          <h3>Remaining</h3>
        </section>

        <section className="spendSum-deposite">
          <h2>${props.budget[0].income + props.depositeSum}</h2>
          <h3>Deposits</h3>
        </section>
      </div>
    </div>
  );
};
export default Summary;
