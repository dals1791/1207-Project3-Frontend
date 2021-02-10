import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import React from "react";
import AddIncome from "./components/AddIncome";
import Team from "./components/Team";
import Transaction from "./components/Transaction";
import UserLogin from "./components/UserLogin/UserLogin";
import UserInfo from "./components/UserProfile/UserProfile";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";

function App() {
  const url = "http://localhost:4000/users";
  const urlLive = "https://project3-backend-1207.herokuapp.com";

  // ----------------------- Defines STATES -----------------------
  const [user, setUser] = React.useState(null);

  // ============= USEEFFECT FUNCTION TO GET DATA =============

  // const getUser = async () => {
  //   const response = await fetch(urlLive);
  //   const data = await response.json();
  //   setUser(data);
  // };
  const getSingleUser = (user) => {
    fetch(urlLive + "/users/" + user.userName + "/" + user.password)
      //fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          return setUser(data);
        } else {
          console.log("Not a user, try again");
        }
      });
  };

  // fetch users when page loads
  // React.useEffect(() => {
  //   getSingleUser();
  // }, []);
  return (
    <div className="App">
      <div className="container-main">
      {/* <Link to="/userlogin">
        <button>Login</button>
      </Link> */}
      <Switch>
        <Route exact path="/">
         <Landing user={user} />      
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/userlogin">
          <UserLogin setUser={setUser} url={urlLive}getSingleUser={getSingleUser}/>
          
        </Route>

        <Route path="/transactions">
        <Transaction />
        </Route>
        <Route path="/userinfo">
        <Link to="/userlogin">
        <button>Login</button>
      </Link>
          <UserInfo userInfo={user} url={urlLive}/>

        </Route>
      </Switch>
    </div>
      <NavBar />
    </div>
  );
}

export default App;
