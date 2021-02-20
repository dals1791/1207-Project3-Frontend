import React, { useState } from "react";
import myMoney from "../../Images/mymoney.mp4";

const Register = (props) => {
  const [formData, setFormData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    // props.history.push("/landing"); //Push back to landing page
    props.setToggle(0)
  };
  //Handle for UserName & PW - Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log("this is formdata", formData);
  return (
    <div className="register-component-container">
      <div className="login-header-desktop">
        <h2 className="register-header-desktop-text">New Account Setup</h2>
      </div>
      <div className="login-container-component">
        <div className="side-image-login">
          <div className="side-image-login-text">
            <h3> We got tired of complicated apps, so here you go.</h3>
          </div>
          <video autoPlay loop muted className="video-background">
            <source src={myMoney} type="video/mp4" />
          </video>
        </div>
        <form className="register-container" onSubmit={handleSubmit}>
          <div className="member-login">
            <h3> Create an account</h3>
          </div>
          <input
            className="firstname-bar"
            type="text"
            name="firstName"
            placeholder="Enter your First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="username-bar"
            type="text"
            name="userName"
            placeholder="Enter a Username"
            value={formData.userName}
            onChange={handleChange}
          />
          <input
            className="password-bar"
            type="text"
            name="password"
            placeholder="Enter a Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="register-button"
            type="submit"
            
          >
            Register User
          </button>
        </form>
        <button className="back-button" onClick={props.handleToggle}>
          Back to Login
        </button>
      </div>
    </div>
  );
};
export default Register;
