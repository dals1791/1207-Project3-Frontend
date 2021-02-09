import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'

const UserLogin = ()=>{
    
    const [toggle, setToggle] = useState(0)
    const handleToggleLogin =()=>{
        setToggle((toggle) => 1)
    }
    const handleToggleRegister =()=>{
        setToggle((toggle) => 2)
    }
    const displayUserLogin = ()=>{
        if (toggle===1){
            return <Login/>
        }
        else if (toggle===2){
            return <Register/>
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