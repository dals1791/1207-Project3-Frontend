import React from "react";
import {Link}from 'react-router-dom'
import UserCredentials from "./User-Credentials-Form";
import UserBudget from "./User-Budget-Form";
// ===IMPORT REACT FONTAWESOME======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
const UserProfile = (props) => {
  const { user, url, getUser, setLoggedIn } = props;
  const loaded = () => {
      return user.budget.map((budget) => {
        //    CRUD Routes for user profile ===========
        const updateUser = (userField) => {
          fetch(url + "/users/" + user._id, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userField),
          })
          .then(()=>{getUser()})
        };

        const updateBudget = (budgetField) => {
          fetch(url + "/budgets/" + budget._id, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(budgetField),
          })
          .then(()=>{getUser()})
        };
        const handleLoginState = ()=>{
          setLoggedIn(false)
        }

        // =====================================
        return (
          <div classname="user-info-container">
            <div className="user-info-header">
              <h2>Welcome {user.firstName} </h2>
              <p>Username: {user.userName}</p>
              <p>Password: {user.password}</p>
              <p>Income: ${budget.income}</p>
              
                <button 
                onClick={handleLoginState}className="user-info-logout-button">Log out</button>
              
              <FontAwesomeIcon
              className="user-info-icon"
              style={{ color: "gold" }}
              icon={faCoins}
            />
            </div>
           
            <hr />
            <div className="user-info-fields">
              {/* Update username and password */}
              <UserCredentials user={user} handleSubmit={updateUser} />
              <UserBudget budget={budget} handleSubmit={updateBudget} />
            </div>
          </div>
        );
      });
   
  };
  const loading = <h3>Loading...</h3>;
  return user ? loaded() : loading;
};

export default UserProfile;
