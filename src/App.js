<<<<<<< HEAD
import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import React, { useEffect } from "react";
import UserLogin from "./components/UserLogin/UserLogin";
import RenderAll from "./components/RenderAll";

function App() {
  const url = "https://project3-backend-1207.herokuapp.com";

  // ----------------------- Defines STATES -----------------------
  const [user, setUser] = React.useState(null);

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [toggleAdd, setToggleAdd] = React.useState(false);

  //----If loggedIn state is true, setLoggedIn = true

  // ============= USEEFFECT FUNCTION TO GET DATA =============
  const getSingleUser = (user) => {
    fetch(url + "/users/" + user.userName + "/" + user.password)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setUser(data);
          setLoggedIn(true);
        } else {
          console.log("Not a user, try again");
        }
      });
  };

  const loaded = () => {
    return <RenderAll user={user} />;
  };

  const loading = () => {
    return (
      <UserLogin setUser={setUser} url={url} getSingleUser={getSingleUser} />
    );
  };

  return loggedIn ? loaded() : loading();
=======
import React from 'react'
import RenderAll from "./RenderAll"
import UserLogin from "./components/UserLogin/UserLogin"


const App = () =>{
    const url = "https://project3-backend-1207.herokuapp.com";
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [user, setUser] = React.useState(null)
    const getSingleUser = (user) => {
        fetch(url + "/users/" + user.userName + "/" + user.password)
         .then((res) => res.json())
         .then((data) => {
           if (data.length > 0) {
             return (
                 setUser(data),
                 setLoggedIn(true));
           } else {
             console.log("Not a user, try again");
           }
         }) 
     };

    const loaded= ()=>{
        return <RenderAll url={url} user={user}/>
    }
    const loading =()=>{
        return <UserLogin getSingleUser={getSingleUser}/>
    }
    return (
        loggedIn ? loaded(): loading()
    )
>>>>>>> aa976a5b020c559aea5a30135ffd8010ee488640
}

export default App