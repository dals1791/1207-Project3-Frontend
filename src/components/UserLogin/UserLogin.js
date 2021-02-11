import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const UserLogin = (props) => {
  //SECTION FOR CRUD ROUTES ============

  console.log("UserLogin props - ", props);

  // creates a user
  const handleCreate = (newUser) => {
    fetch(props.url + "/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  };

  // ======================================

  const [toggle, setToggle] = useState(0);

  const handleToggleRegister = () => {
    setToggle((toggle) => 2);
  };
  const displayUserLogin = () => {
     if (toggle === 2) {
      return <Register handleSubmit={handleCreate} />;
    } else {
      return (
      <Login handleSubmit={props.getSingleUser} render={props.history} />
      )
    }
  };

  return (
    <>
    <div className="budgetpad-landing">
      {/* <p>We got tired of complicated apps, so here you go.</p> */}
      <div className="login-buttons">
        {/* <button className="new-account-button" onClick={handleToggleRegister}>
          Create Account
        </button> */}
      </div>
      <div>{displayUserLogin()}</div>
      <div className="new-account-button-landing" onClick={handleToggleRegister}>
        <h4>New User? Create Account</h4>
      </div>
    </div>
    </>
  );
};

export default UserLogin;
