import React, {useState} from "react";

const Login = () => {
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
        <h2>Welcome Back!</h2>
      <div>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="Password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default Login;
