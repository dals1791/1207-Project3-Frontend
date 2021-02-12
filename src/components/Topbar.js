import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import UserLogin from "./UserLogin/UserLogin";

const Topbar = (props) => {
  const [login, setLogin] = React.useState("Log In");

  return (
    <div className="top-bar-container"
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <h1 className="budgetpad-text">BUDGTPAD</h1>
    </div>
  );
};
export default Topbar;
