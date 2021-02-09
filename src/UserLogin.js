import React, {useState} from 'react'

const UserLogin = ()=>{
    const [userName,setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (event)=>{
        event.preventDefault() // Prevent Form from Refreshing
    }
    const handleChangeUN = (event)=>{
        setUserName({...userName, [event.target.name]: event.target.value})
    }
    const handleChangePW = (event)=>{
        setPassword({...password, [event.target.name]: event.target.value})
    }
    
    return(
        <div>
            <form>
                <div>
                    <label>Username</label>
                <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    value={userName}
                    onChange={handleChangeUN}
                />
                </div>
                <div>
                    <label>Password</label>
                <input
                    type="text"
                    name="Password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChangePW}
                
                />
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>

    )
}

export default UserLogin