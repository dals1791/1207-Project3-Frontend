import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import UserLogin from "./UserLogin/UserLogin";

const Topbar = () => {
  return (
    <div style={{ border: "1px solid purple", height: "100px" }}>
      <h1>BUDGETPAD</h1>
      <Link to="/userlogin">
        <button>Login</button>
      </Link>
    </div>
  );
};
export default Topbar;
