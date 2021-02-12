import React, { useState } from "react";
import CategoryDropMenu from "./CategoryDropMenu"
import {useHistory} from 'react-router-dom'

const AddIncome = (props) => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: 0,
    isRoutine: false,
    isExpense: false,
  });
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    history.push("/transactions"); //Push back to landing page
    props.setAddToggle(false)
  };
  //Handle for Form- Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: makeBoolean(event.target.value),
    });
  };
  const makeBoolean = (str) => {
    if (str.toLowerCase() == "true") {
      return true;
    } else if (str.toLowerCase() == "false") {
      return false;
    } else {
      return str;
    }
  };
  

  return (
    <>
    
    <div className="add-income-component">
      
      <button onClick={props.toggleAdd} className="close-button">
        X
      </button>
      <h2>Add a Transaction</h2>
      
      <div className="add-income-fields">
        <input
        className="add-income-field"
          type="text"
          name="description"
          placeholder="Enter a Description"
          value={formData.description}
          onChange={handleChange}
        />
        <div className="add-income-category-field">
        <input
        className="add-income-field"
          type="text"
          name="category"
          placeholder="select a category"
          value={formData.category}
          onChange={handleChange}
        />
        <CategoryDropMenu handleChange={handleChange} />
        </div>
        <input
        className="add-income-field"
          type="number"
          name="amount"
          placeholder="Cost"
          value={formData.amount}
          onChange={handleChange}
        />
        <div className="add-income-routine">
          <div>
            <label>Non-routine</label>
            <input
              type="radio"
              name="isRoutine"
              value="false"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Routine</label>
            <input
              type="radio"
              name="isRoutine"
              value="true"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="add-income-expense">
          <label>Expense</label>
          <input
            type="radio"
            name="isExpense"
            value="true"
            onChange={handleChange}
          />

          <label>Income</label>
          <input
            type="radio"
            name="isExpense"
            value="false"
            onChange={handleChange}
          />
        </div>
        <button
          className="add-income-add-button"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
    </>
  );
};
export default AddIncome;
