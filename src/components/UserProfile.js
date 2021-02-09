import React from 'react'
import UserCredentials from "./User-Credentials-Form"
import {Link} from 'react-router-dom'
const UserProfile = (props)=>{
const {userInfo} = props
console.log(userInfo)
const loaded = ()=>{
   return userInfo.map((user)=>{
       
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
                    <UserCredentials user={user}/>
                    {/* NEEDS updating to match update user creds */}
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