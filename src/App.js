import { Route, Switch} from "react-router-dom";

import "./App.css";
import React from "react";
import Mychart from "./Mychart";
import AddIncome from "./components/AddIncome";
import PieChart from "./components/PieChart";
import Team from "./components/Team";
import Transaction from "./components/Transaction";
import UserLogin from "./components/UserLogin/UserLogin";
import UserProfile from "./components/UserProfile";
import NavBar from "./components/NavBar";
import UserCredentials from "./components/User-Credentials-Form";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AddIncome />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/userlogin">
          <UserCredentials />
          <Transaction />
        </Route>

        <Route path="/transactions">
          <PieChart />
          <Transaction />
        ></Route>
        <Route path="/userinfo">
          <UserProfile />

        </Route>
      </Switch>
      <NavBar />
    </div>
  );
}

export default App;
