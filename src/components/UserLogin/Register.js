import React, {useState} from 'react'

const Register = ()=>{
const [formData, setFormData] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    // props.handleSubmit(formData); // Submit to Parents desired function
    // props.history.push("/landing"); //Push back to landing page
  };
  //Handle for UserName & PW - Tracks typing when inputing into form input.
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };
    return(
        <form>
        <h2>Register</h2>
        <div>
        <input
          type="text"
          name="firstName"
          placeholder= "Enter your First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder= "Enter your Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userName"
          placeholder= "Enter a Username"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder= "Enter a Password"
          value={formData.password}
          onChange={handleChange}
        />
        </div>
        <button type="submit" onClick={handleSubmit}>
        Register
      </button>
        </form>
    )
}
export default Register