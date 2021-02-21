import React, { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import SetBudget from "./Set-Budget";

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

  const displayToggle = () => {
    if (toggle == 1) {
      return (
        <Register handleSubmit={handleCreate} setToggle={setToggle} handleToggle={toggleLogin}/>
      );
    } else if (toggle == 2) {
      return <SetBudget toggleLogin={toggleLogin} />;
    } else if (toggle == 0) {
      return (
        <Login handleSubmit={props.getSingleUser} render={props.history} />
      );
    }
  };
  const toggleLogin = () => {
    setToggle(0);
  };
  const toggleRegister = () => {
    setToggle(1);
  };
  const toggleBudget = () => {
    setToggle(2);
  };

  return (
    <>
      <div className="budgetpad-landing">
        <div>{displayToggle()}</div>
        <div className="new-account-button-landing" onClick={toggleRegister}>
          <h4>New User? Create Account</h4>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
