import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            {/* <h3> BUDGTPAD</h3> */}
            
            <ul>
            <div className="flex-container">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/">
                    <li>Transactions</li>
                </Link>
                <Link to="/">
                    <li className="add-button">button</li>
                </Link>
                <Link to="/team">
                    <li>Our Team</li>
                </Link>
                <Link to="/">
                    <li>User</li>
                </Link>
            </div>
            </ul>
        </div>
    )
}

export default NavBar;