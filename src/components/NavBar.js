import React from "react";

const NavBar = () => {
    return (
        <div className="nav-bar">
            {/* <h3> BUDGTPAD</h3> */}
            
            <ul>
            <div className="flex-container">
               <li>Home</li>
               <li>Transactions</li>
               <li className="add-button">button</li>
               <li>Our Team</li>
               <li>User</li>
            </div>
            </ul>
        </div>
    )
}

export default NavBar;