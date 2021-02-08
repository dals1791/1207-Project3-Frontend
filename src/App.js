import "./App.css";
import React from "react";


import AddIncome from "./components/AddIncome";
import PieChart from "./components/PieChart";
import Team from "./components/Team";
import Transaction from "./components/Transaction";
import UserLogin from "./components/UserLogin/UserLogin";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <AddIncome />
      <PieChart />
      <Team />
      <Transaction />
      <UserLogin />
    </div>
  );
}

export default App;
