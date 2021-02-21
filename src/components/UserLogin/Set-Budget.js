import React, { useState } from "react";

const SetBudget = (props) => {
  const [formData, setFormData] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    //   history.push("/"); //Push back to landing page
    props.setUserBudget(true);
  };
  //Handle for Form - Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({ [event.target.name]: event.target.value });
  };

  return (
    <div className="budgetpad-landing">
        <div className="set-budget-header-container">
      <h2 className="set-budget-header">
        Welcome {props.user[0].firstName}! Input your monthly income to get
        started.{" "}
      </h2>
      
      </div>
      <br />
      <form  
      className="set-budget-form-container"
      onSubmit={handleSubmit}>
        <div  >
          <input
            className="username-bar"
            type="number"
            name="income"
            placeholder="Type in your Income"
            value={formData.income}
            onChange={handleChange}
          />

          <button type="submit" className="existing-user-login">Submit</button>
        </div>
      </form>
      <small className="set-budget-header-smtxt">
        You can change your income anytime at the user profile page.
      </small>
    </div>
  );
};

export default SetBudget;
