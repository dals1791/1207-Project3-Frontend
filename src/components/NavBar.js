import React from "react";
import { Link } from "react-router-dom";
// ===IMPORT REACT FONTAWESOME======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faUsers, faDollarSign, faHome, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
  return (
    <div>
    <div className="nav-bar">

      <div className="nav-bar-text">
        <ul>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li><FontAwesomeIcon  className="navbar-home-icon" style={{color: "white", fontSize: "32px"}} icon={faHome} /></li>
          </Link>
          <Link to="/transactions" style={{ textDecoration: "none" }}>
            <li><FontAwesomeIcon  className="navbar-transactions-icon" style={{color: "white", fontSize: "32px"}} icon={faFileInvoiceDollar} /></li>
          </Link>

          <li
            className="add-button"
            onClick={() => {
              props.toggleAdd();
            }}
          >
            <FontAwesomeIcon  className="navbar-add-icon" style={{color: "lawngreen", fontSize: "42px"}} icon={faDollarSign} />
          </li>

          <Link to="/team" style={{ textDecoration: "none" }}>
            <li><FontAwesomeIcon  className="navbar-team-icon" style={{color: "white", fontSize: "32px"}} icon={faUsers} /></li>
          </Link>
          <Link to="/userinfo" style={{ textDecoration: "none" }}>
            <li><FontAwesomeIcon  className="navbar-user-icon" style={{color: "white", fontSize: "32px"}} icon={faUserEdit} /></li>
          </Link>
        </ul>
      </div>
    </div>

    <div className="desktop-nav-bar">
      <div className="desktop-logo-container"><h4 className ="desktop-logo" style={{color: "white", fontSize: "40px"}}>BUGTPAD</h4></div>
      <div className="nav-bar-text">
        <ul>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li className="navbar-home" style={{color: "white", fontSize: "32px"}}>Home</li>
          </Link>
          <Link to="/transactions" style={{ textDecoration: "none" }}>
            <li className="navbar-transactions-icon" style={{color: "white", fontSize: "32px"}}>Transactions</li>
          </Link>

          <li className="navbar-add" onClick={() => {props.toggleAdd();}} style={{color: "lawngreen", fontSize: "32px"}}>
            Add </li>

          <Link to="/team" style={{ textDecoration: "none" }}>
            <li className="navbar-team" style={{color: "white", fontSize: "32px"}}>Team</li>
          </Link>
          <Link to="/userinfo" style={{ textDecoration: "none" }}>
            <li className="navbar-user" style={{color: "white", fontSize: "32px"}}>User</li>
          </Link>
        </ul>
      </div>
    </div>













    </div>

    
    
  );
};

export default NavBar;
