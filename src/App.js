import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import React, { useEffect } from "react";
import AddIncome from "./components/AddIncome";
import Team from "./components/Team";
import Transaction from "./components/Transaction";
import UserLogin from "./components/UserLogin/UserLogin";
import UserInfo from "./components/UserProfile/UserProfile";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";

function App() {
  const url = "https://project3-backend-1207.herokuapp.com";

  // ----------------------- Defines STATES -----------------------
  const [user, setUser] = React.useState(null);
  const [toggleAdd, setToggleAdd] = React.useState(false);

  // ============= USEEFFECT FUNCTION TO GET DATA =============
  const getSingleUser = (user) => {
    fetch(url + "/users/" + user.userName + "/" + user.password)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          return setUser(data);
        } else {
          console.log("Not a user, try again");
        }
      });
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
  // useEffect(()=>{getSingleUser()}, [user])
  return (
    <div className="App">
      <div className="container-main">
      <Link to="/userlogin">
            <button>Login</button>
          </Link>
        {toggleAdd ? (
          <AddIncome
            user={user}
            url={url}
            handleSubmit={addIncome}
            toggleAdd={handleToggleAdd}
          />
        ) : null}
        <Switch>
          <Route exact path="/">
            <Landing user={user} />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/userlogin">
            <UserLogin
              setUser={setUser}
              url={url}
              getSingleUser={getSingleUser}
            />
          </Route>

          <Route path="/transactions">
            <Transaction user={user} />
          </Route>

          

          <Route path="/transactions">
            <Transaction user={user} />
          </Route>
          <Route  path="/userinfo">
            <UserInfo userInfo={user} url={url} />
          </Route>
        </Switch>
      </div>
      <NavBar toggleAdd={handleToggleAdd} />
    </div>
  );
}

export default App;
