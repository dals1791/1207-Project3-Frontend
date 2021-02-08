import "./App.css";
import React from "react";
import Mychart from "./Mychart";
import Dounut from "./Dounut";
import AddIncome from "./components/AddIncome";
import PieChart from "./components/PieChart";
import Team from "./components/Team";
import Transaction from "./components/Transaction";
import UserLogin from "./components/UserLogin/UserLogin";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Mychart />

      <Dounut />
    </div>
  );
}

export default App;
