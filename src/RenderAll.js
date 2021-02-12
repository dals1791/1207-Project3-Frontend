import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import React, { useEffect } from "react";
import AddIncome from "./components/AddIncome";
import Team from "./components/Team";
import Transaction from "./components/Transaction";
import UserInfo from "./components/UserProfile/UserProfile";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Topbar from "./components/Topbar";

function RenderAll(props) {
  const { user, url } = props;
  // ----------------------- Defines STATES -----------------------
  const [toggleAdd, setToggleAdd] = React.useState(false);
  const [singleUser, setSingleUser] = React.useState(null);
  //==============GET ROUTE for user based on ID========
  const getUser = () => {
    fetch(url + "/users/" + user[0]._id)
      .then((res) => res.json())
      .then((data) => {
        setSingleUser(data);
      });
  };

  // POST route for addIncome
  const addIncome = (newTransaction) => {
    fetch(url + "/transactions/" + singleUser._id, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    }).then(() => {
      getUser();
    });
  };
  const handleToggleAdd = () => {
    setToggleAdd((toggle) => !toggle);
  };
  // ============= USEEFFECT FUNCTION TO GET DATA =============
  useEffect(() => {
    getUser();
  }, []);
  // ============
  return (
    <div className="App">
      <Topbar user={singleUser} />
      <div className="container-main">
        <Switch>
          <Route exact path="/">
            <Landing user={singleUser} />
          </Route>

          <Route  path="/team">
            <Team />
          </Route>

          <Route path="/transactions">
            <Transaction user={singleUser} url={url} getUser={getUser}/>
          </Route>

          <Route path="/userinfo">
            <UserInfo user={singleUser} url={url} getUser={getUser} />
          </Route>
        </Switch>
      </div>
      <div className="add-transaction-container">
        {toggleAdd ? (
          <AddIncome
            user={singleUser}
            handleSubmit={addIncome}
            toggleAdd={handleToggleAdd}
            setAddToggle={setToggleAdd}
          />
        ) : null}
      </div>
      <NavBar toggleAdd={handleToggleAdd} />
    </div>
  );
}

export default RenderAll;
