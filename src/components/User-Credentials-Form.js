import React, {useState} from "react";

const UserCredentials = (props) => {
  const [formData, setFormData] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    // props.handleSubmit(formData); // Submit to Parents desired function
    // props.history.push("/landing"); //Push back to landing page
  };
  //Handle for UserName & PW - Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({[event.target.name]: event.target.value });
  };
  return (
    <form>
      <label>Update User Profile</label>
      <div>
        <input
          type="text"
          name="userName"
          placeholder= {props.user.userName}
          value={formData.userName}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
        Update
      </button>
      </div>
      <div>
        <input
          type="text"
          name="Password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
        Update
      </button>
      </div>
      
    </form>
    
  );
};

export default UserCredentials;