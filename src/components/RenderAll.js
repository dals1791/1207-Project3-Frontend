import { Route, Switch, Link } from "react-router-dom";

import "../App.css";
import React, { useEffect } from "react";
import AddIncome from "./AddIncome";
import Team from "./Team";
import Transaction from "./Transaction";
import UserLogin from "./UserLogin/UserLogin";
import UserInfo from "./UserProfile/UserProfile";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Topbar from "./Topbar";

function App(props) {
  const url = "https://project3-backend-1207.herokuapp.com";

  // ----------------------- Defines STATES -----------------------
  const [singleUser, setSingleUser] = React.useState(null);
  const [toggleAdd, setToggleAdd] = React.useState(false);
  const { user } = props;

  console.log("RenderAll - user props ", user);
  // ============= USEEFFECT FUNCTION TO GET DATA =============
  const getUser = async () => {
    const response = await fetch(`${url}/users/${user._id}`);
    const data = await response.json();
    setSingleUser(data);
  };

  // POST route for addIncome
  const addIncome = (newTransaction) => {
    fetch(url + "/transactions/" + user[0]._id, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });
  };
  const handleToggleAdd = () => {
    setToggleAdd((toggle) => !toggle);
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <Topbar user={user} />
      <div className="container-main">
        <Switch>
          <Route exact path="/" render={(rp) => <UserLogin />} />

          <Route path="/home">
            <Landing user={singleUser} />
          </Route>

          <Route path="/team">
            <Team />
          </Route>

          <Route path="/transactions">
            <Transaction user={singleUser} />
          </Route>

          <Route path="/userinfo">
            <UserInfo userInfo={singleUser} url={url} />
          </Route>
          <Route path="/userinfo"></Route>
        </Switch>
      </div>
      <div className="add-transaction-container">
        {toggleAdd ? (
          <AddIncome
            user={singleUser}
            handleSubmit={addIncome}
            toggleAdd={handleToggleAdd}
          />
        ) : null}
      </div>
      <NavBar toggleAdd={handleToggleAdd} />
    </div>
  );
}

export default App;
