import "./App.css";
import React from "react";


import AddIncome from "./components/AddIncome";
import Team from "./components/Team";
import Landing from "./components/Landing";
import Transaction from "./components/Transaction";
import UserLogin from "./components/UserLogin/UserLogin";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <AddIncome />
      <Landing />
      <Team />
      <Transaction />
      <UserLogin />
    </div>
  );
}

export default App;
