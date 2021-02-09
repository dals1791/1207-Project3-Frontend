import "./App.css";
import React from "react";

import AddIncome from "./components/AddIncome";
import Team from "./components/Team";
import Landing from "./components/Landing";
import Transaction from "./components/Transaction";
import UserLogin from "./components/UserLogin";

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
      <h1>Hello World</h1>
      <AddIncome />
      <Landing user={user} />
      <Team />
      <Transaction />
      <UserLogin />
    </div>
  );
}

export default App;
