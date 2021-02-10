import React, { useState } from "react";

const UserBudget = (props) => {
  const [formData, setFormData] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    // props.history.push("/landing"); //Push back to landing page
  };
  //Handle for Form - Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({ [event.target.name]: event.target.value });
  };
  console.log(formData);
  return (
    <div>
      <label>Update Budget</label>
      <br />
      <small>note: log out and log back in to see changes</small>
      <form>
        <div>
          <label>Income:</label>
          <input
            type="text"
            name="income"
            placeholder={props.budget.income}
            value={formData.income}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
      <form>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="spendCategory"
            placeholder={props.budget.spendCategory}
            value={formData.spendCategory}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
      <form>
        <div>
          <label>Goal:</label>
          <input
            type="text"
            name="spendGoal"
            placeholder={props.budget.spendGoal}
            value={formData.spendGoal}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserBudget;
