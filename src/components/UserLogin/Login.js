import React, {useState} from "react";

const Login = (props) => {
  const [formData, setFormData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    // props.history.push("/landing"); //Push back to landing page
  };
  //Handle for UserName & PW - Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value });
  };
  console.log("this is login form data", formData)
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
          name="password"
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
