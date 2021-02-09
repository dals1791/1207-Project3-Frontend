import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'

 const UserLogin = (props)=>{
    //SECTION FOR CRUD ROUTES ============
    //move url, emptyy user and stat to app.js
    const url = "https://project3-backend-1207.herokuapp.com"
    const emptyUser = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        lastName: ""
    }
    const [user, setUser] = useState(emptyUser) //move to app.js

    // creates a user
    const handleCreate = (newUser)=> {
        fetch(url + "/users", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        })
    }
    // Gets a single User
    const getSingleUser = (user)=>{
        fetch(url + "/users/"+user.userName+'/'+user.password)
        .then(res=>res.json())
        .then((data)=>{
            if(data.length>0){
                return setUser(data)
            }
            else{
                console.log("Not a user, try again") 
            }
            })
    }
    // ======================================

    const [toggle, setToggle] = useState(0)
    const handleToggleLogin =()=>{
        setToggle((toggle) => 1)
    }
    const handleToggleRegister =()=>{
        setToggle((toggle) => 2)
    }
    const displayUserLogin = ()=>{
        if (toggle===1){
            return <Login handleSubmit={getSingleUser}/>
        }
        else if (toggle===2){
            return <Register handleSubmit={handleCreate}/>
        }
    }
    
    return(
        <div>
          <h1>BUGTPAD</h1>
          <p>We got tired of complicated apps, so here you go.</p>
          <button onClick={handleToggleLogin}>Login</button>
          <button onClick={handleToggleRegister}>New User?</button>
            <div>
                {displayUserLogin()}
            </div>
        </div>

    )
}

export default UserLogin