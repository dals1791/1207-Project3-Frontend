import React from 'react'
import UserCredentials from "./User-Credentials-Form"

const UserProfile = (props)=>{
const dummyUser = [
    {
        firstName: "Ash",
        lastname: "Ketchem",
        email: "ash@gmail.com",
        userName: "PokeMaster",
        password: "password",
        budget: [
            {income: 1000}
        ]

    }
]

const loaded = ()=>{
   return dummyUser.map((user)=>{
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
                    <UserCredentials/>
                    {/* NEEDS updating to match update user creds */}
                    <h3>Placeholder for Budget Component/income update</h3>
                </div>
            </div>
        )
    })
}
const loading = <h3>Loading...</h3>
    return(
        dummyUser.length >0 ? loaded(): loading
    )
}

export default UserProfile