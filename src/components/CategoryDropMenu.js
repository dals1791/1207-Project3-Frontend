import React, { useState } from "react";
// ===IMPORT REACT FONTAWESOME======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const CategoryDropMenu = (props) => {
    const {handleChange}= props
  const legend = [
    "Food and Drink",
    "Grocery",
    "Utility",
    "Rent/Mortgage",
    "Gas",
    "Gift",
    "Clothing",
    "Pet Supplies",
    "Travel",
    "Entertainment",
    "Recreation",
    "Other",
  ];
  const [toggleMenu, setToggleMenu] = useState(false);
  function sortAsc(a, b) {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }
  const legendSorted = legend.sort(sortAsc);
  
  function handleToggleMenu() {
    setToggleMenu((toggle) => !toggleMenu);
  }
  
  const menuList = legendSorted.map((item, index) => {
    console.log("this is item", item)
    return (
    <div role="list" className="drop-list">
        <label className="drop-list-item-label">{item}</label>
        <input
        type= "radio"
        name="category"

        value= {item}
        className="drop-list-item"
        onChange={handleChange}
        onClick={handleToggleMenu}
        />
    </div>);
  });
  
  return (
    <div className="drop-container">
       {toggleMenu? <div className="drop-list-container" >
        {menuList}
        </div>: null}
        
      <button 
      onClick={handleToggleMenu} 
      style={{
          backgroundColor: "rgba(64, 23, 129, 1)", 
          color: "white", 
          boxShadow: "0px 2px 10px white"}}>
        <div className="drop-header"></div>
        {toggleMenu ? (
          <FontAwesomeIcon style={{fontSize: "22px"}} className="toggle-up" icon={faAngleDown}  />
        ) : (
          <FontAwesomeIcon style={{fontSize: "22px"}} className="toggle-down" icon={faAngleUp} />
        )}
      </button>
      
    </div>
  );
};

export default CategoryDropMenu;
