import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'

 const UserLogin = (props)=>{
    //SECTION FOR CRUD ROUTES ============

    // creates a user
    const handleCreate = (newUser)=> {
        fetch(props.url + "/users", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
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
            return <Login handleSubmit={props.getSingleUser}/>
        }
        else if (toggle===2){
            return <Register handleSubmit={handleCreate}/>
        }
    }
    
    return(
        <div className="budgetpad-landing">
          <h1 className="budgetpad-text">BUGTPAD</h1>
          <p>We got tired of complicated apps, so here you go.</p>
          <div className="login-buttons">
          <button className="login-button" onClick={handleToggleLogin}>Existing Users</button>
          <button className="new-account-button" onClick={handleToggleRegister}>Create Account</button>
          </div>
            <div>
                {displayUserLogin()}
                
        </div>
        </div>
    )
}

export default UserLogin