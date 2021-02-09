import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            {/* <h3> BUDGTPAD</h3> */}
            
            <div className="nav-bar-text">
                <ul>
                <Link to="/">
                    <li><a href="/">Home</a></li>
                </Link>
                <Link to="/transactions">
                    <li><a href="/transactions">Transactions</a></li>
                </Link>
                <Link to="/">
                    <li className="add-button"><a href="/">New</a></li>
                </Link>
                <Link to="/team">
                    <li><a href="/team">Team</a></li>
                </Link>
                <Link to="/userinfo">
                    <li><a href="/userinfo">User</a></li>
                </Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;