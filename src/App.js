import "./App.css";
import React from "react";
import Mychart from "./Mychart";
import Dounut from "./Dounut";
import AddIncome from "./components/AddIncome";
import PieChart from "./components/PieChart";
import Team from "./components/Team";
import Transaction from "./components/Transaction";
import UserLogin from "./components/UserLogin";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <AddIncome />
      <PieChart />
      <Mychart />
      <Dounut />
      <Team />
      <Transaction />
      <UserLogin />
      <NavBar />
    </div>
  );
}

export default App;
