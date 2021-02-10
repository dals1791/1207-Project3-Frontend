import React, {useState} from 'react'

const AddIncome = (props)=>{


const [formData, setFormData] = useState({description: "",
category: "",
amount: 0,
isRoutine: false,
isExpense: false
});
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    // props.history.push("/landing"); //Push back to landing page
  };
  //Handle for Form- Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: makeBoolean(event.target.value) });
  };
  const makeBoolean = (str)=>{
    if(str.toLowerCase()=="true"){
      return true
    }
    else if (str.toLowerCase()=="false"){
      return false
    }
    else {
      return str
    }
  }
  
  
    return(
        <form className="add-income-component">
          <h2>Add a Transaction</h2>
          <div >
          <input
            type="text"
            name="description"
            placeholder= "Enter a Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder= "select a category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder= "Cost"
            value={formData.amount}
            onChange={handleChange}
          />
          <div>
          <label>Non-routine</label>
          <input
          type="radio"
          name="isRoutine"
          value="false"
          onChange={handleChange}
          
          />
          <label>Routine</label>
          <input
          type="radio"
          name="isRoutine"
          value= "true"
          onChange={handleChange}
          />
          
          
          </div>
          <div>
          <label>Expense</label>
          <input
          type="radio"
          name="isExpense"
          value="false"
          onChange={handleChange}
    
          />
          <label>Inome</label>
          <input
          type="radio"
          name="isExpense"
          value="true"
          onChange={handleChange}
          />
          </div>
          <button type="submit" onClick={handleSubmit, props.toggleAdd} >
          ADD
          </button>
        </div>
      </form>
    )
}
export default AddIncome
