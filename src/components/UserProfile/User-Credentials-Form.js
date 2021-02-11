import React, { useState } from "react";

const UserCredentials = (props) => {
  const [formData, setFormData] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    // props.history.push("/landing"); //Push back to landing page
  };
  //Handle for UserName & PW - Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({ [event.target.name]: event.target.value });
  };
  console.log(formData);
  return (
    <div className="user-info-cred-form">
      <label style={{fontSize: 20}}>Update Profile</label><br/>
      <form>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            placeholder={props.user.firstName}
            value={formData.firstName}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
      <form>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="userName"
            placeholder={props.user.userName}
            value={formData.userName}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
      <form>
        <div>
          <label>Password: </label>
          <input
            type="text"
            name="password"
            placeholder="*******"
            value={formData.password}
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

export default UserCredentials;
