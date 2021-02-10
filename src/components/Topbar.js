import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import UserLogin from "./UserLogin/UserLogin";

const Topbar = (props) => {
  const [login, setLogin] = React.useState("Log In");

  return (
    <div
      style={{
        border: "1px solid purple",
        width: "100%",
        height: "auto",
      }}
    >
      <h1>BUDGETPAD</h1>
      <Link to="/">
        <button>Log out</button>
      </Link>
    </div>
  );
};
export default Topbar;
