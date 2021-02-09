import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            {/* <h3> BUDGTPAD</h3> */}
            
            <ul>
            <div className="flex-container">
               <li>Home</li>
               <li>Transactions</li>
               <li className="add-button">button</li>
               <Link to="/team">
               <li>Our Team</li>
               </Link>
               <Link to="/userProfile">
                   <li>User</li>
                </Link>
            </div>
            </ul>
        </div>
    )
}

export default NavBar;