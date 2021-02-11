import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import UserLogin from "./UserLogin/UserLogin";
import { useHistory } from "react-router-dom";

const Topbar = (props) => {
  const [login, setLogin] = React.useState("Log In");

  const history = useHistory();

  const handleRedirect = () => {
    history.push("/");
  };

  return (
    <div
      className="top-bar-container"
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <h1 className="budgetpad-text" onClick={handleRedirect}>
        BUDGTPAD
      </h1>
    </div>
  );
};
export default Topbar;
