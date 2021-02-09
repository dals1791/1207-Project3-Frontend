import React from 'react'
import UserCredentials from "./User-Credentials-Form"
import {Link} from 'react-router-dom'
const UserProfile = (props)=>{
const {userInfo, url} = props
const loaded = ()=>{
   return userInfo.map((user)=>{
    //    CRUD Routes for user profile ===========
        const updateUser =(userField)=>{ 
            fetch(url + "/users/" + user._id, {
            method: "put",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userField)
          })
        }

    // =====================================
        return(
            <div>
                <div>
                    <h2>Welcome</h2>
                    <h2>{user.firstName}</h2>
                </div>
                <img src="#" alt="imgText"/>
                <div>
                    <p>Username: {user.userName}</p>
                    <p>Password: {user.password}</p>
                    <p>Income: {user.budget[0].income}</p>
                </div>
                <div>
                    {/* Update username and password */}
                    <UserCredentials user={user} handleSubmit={updateUser}/>
                    <h3>Placeholder for Budget Component/income update</h3>
                </div>
                <Link to='/userlogin'>
                <button>Login</button>
                </Link>
                <button>Sign Out</button>
                
            </div>
        )
    })
}
const loading = <h3>Loading...</h3>
    return(
        userInfo ? loaded(): loading
    )
}

export default UserProfile