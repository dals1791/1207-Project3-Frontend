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
  const url = "http://localhost:4000/users";

  // ----------------------- Defines STATES -----------------------
  const [user, setUser] = React.useState(null);

  // ============= USEEFFECT FUNCTION TO GET DATA =============

  const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
  };

  // fetch dogs when page loads
  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <AddIncome />
      <Switch>
        <Route exact path="/">
         <Landing user={user} />      
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
