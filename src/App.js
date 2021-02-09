import { Route, Switch} from "react-router-dom";

import "./App.css";
import React from "react";
import Mychart from "./Mychart";
import AddIncome from "./components/AddIncome";
import PieChart from "./components/PieChart";
import Team from "./components/Team";
import Transaction from "./components/Transaction";
import UserLogin from "./components/UserLogin/UserLogin";
import UserProfile from "./components/UserProfile"
import NavBar from "./components/NavBar";

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
          <UserLogin />
          <Transaction />
        </Route>

        <Route path="/transactions">
          <PieChart />
          <Mychart />
        ></Route>
        <Route path="/userinfo">


        </Route>
      </Switch>
      <NavBar />
    </div>
  );
}

export default App;
