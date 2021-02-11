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
import Topbar from "./components/Topbar";

function RenderAll(props) {
const {user, url}= props
  // ----------------------- Defines STATES -----------------------
  // const [user, setUser] = React.useState(null);
  const [toggleAdd, setToggleAdd] = React.useState(false);
  const [singleUser, setSingleUser]= React.useState([])

  

  //==============GET ROUTE for user based on ID========
const getUser =()=>{
  fetch(url +'/users/'+ user[0]._id)
  .then(res=>res.json())
  .then(data=>{
    setSingleUser(data)
  })
}
// ============= USEEFFECT FUNCTION TO GET DATA =============
useEffect(()=>{getUser()}, [])
// ============
  // POST route for addIncome
  const addIncome = (newTransaction) => {
    fetch(url + "/transactions/" + singleUser._id, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
    .then(()=>{getUser()})
  };
  const handleToggleAdd = () => {
    setToggleAdd((toggle) => !toggle);
  };
  return (
    <div className="App">
      <Topbar user={singleUser} />
      <div className="container-main">
       

        <Switch>
          <Route path="/home">
            <Landing user={user} />
          </Route>

          <Route path="/team">
            <Team />
          </Route>

          <Route path="/transactions">
            <Transaction user={user} />
          </Route>

          <Route path="/userinfo">
            <UserInfo userInfo={singleUser} url={url} />
          </Route>
          <Route path="/userinfo">
            
          </Route>
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

export default RenderAll;