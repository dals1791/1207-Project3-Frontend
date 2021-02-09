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
          <UserCredentials />
          <Transaction />
        </Route>

        <Route path="/transactions">
          <PieChart />
          <Transaction />
        ></Route>
        <Route path="/userinfo">
<<<<<<< HEAD
          <UserProfile />
=======
>>>>>>> c07d97a9598b5f6c8c25138babc1ea809e1e6df0

        </Route>
      </Switch>
      <NavBar />
    </div>
  );
}

export default App;
