import React from "react";
import { Link } from "react-router-dom";
// ===IMPORT REACT FONTAWESOME======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faUsers, faDollarSign, faHome, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      {/* <h3> BUDGTPAD</h3> */}

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
  );
};

export default NavBar;
