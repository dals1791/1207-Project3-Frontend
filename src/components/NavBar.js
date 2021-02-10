import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className="nav-bar">
            {/* <h3> BUDGTPAD</h3> */}
            
            <div className="nav-bar-text">
                <ul>
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <li><a href="/">Home</a></li>
                </Link>
                <Link to="/transactions" style={{ textDecoration: 'none'}}>
                    <li><a href="/transactions">Transactions</a></li>
                </Link>
                
                <li className="add-button" onClick={()=>{props.toggleAdd()}}>New</li>
                
                <Link to="/team" style={{ textDecoration: 'none'}}>
                    <li><a href="/team">Team</a></li>
                </Link>
                <Link to="/userinfo" style={{ textDecoration: 'none'}}>
                    <li><a href="/userinfo">User</a></li>
                </Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;