import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function

    console.log("login push history - ", props);
    props.render.push("/home"); //Push back to landing page
  };
  //Handle for UserName & PW - Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log("this is login form data", formData);
  return (
    <form className="login-component-container">
      <div className="login-header-desktop">
        <h2 className="login-header-desktop-text">Welcome Back!</h2>
      </div>
      <div className="login-container-component">
      <div className="side-image-login"> 
        <h3 className="side-image-login-text"> We got tired of complicated apps, so here you go.</h3>
      </div>
    <div className="login-container">
      <div>
        <input
          className="username-bar"
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          className="password-bar"
          type="text"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        className="existing-user-login"
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </button>
      </div>
      </div>
    </form>
  );
};

export default Login;
